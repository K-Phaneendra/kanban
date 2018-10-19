import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Todo from './dndFiles/todo';
import Doing from './dndFiles/doing';
import Done from './dndFiles/done';

const update = require('immutability-helper');

const objectId = '_id';

class EditTaskStatusDnD extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    const todoData = this.getTasksByStatus(this.props.selectedRow, 'TO DO');
    const doingData = this.getTasksByStatus(this.props.selectedRow, 'DOING');
    const doneData = this.getTasksByStatus(this.props.selectedRow, 'DONE');
    this.setState({ todoData, doingData, doneData });
  }

  getTasksByStatus = (selectedRow, statusName) => {
    const generatedArray = [];
    selectedRow.tasks.map(tsk => {
      if (tsk.status === statusName) {
        generatedArray.push(tsk);
      }
      return null;
    });
    return generatedArray;
  };

  moveCard = (dragIndex, hoverIndex) => {
    const { todoData } = this.state;
    const dragCard = todoData[dragIndex];

    this.setState(
      update(this.state, {
        todoData: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        }
      })
    );
  };

  moveCardDoing = (dragIndex, hoverIndex) => {
    const { doingData } = this.state;
    const dragCard = doingData[dragIndex];

    this.setState(
      update(this.state, {
        doingData: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        }
      })
    );
  };

  moveCardDone = (dragIndex, hoverIndex) => {
    const { doneData } = this.state;
    const dragCard = doneData[dragIndex];

    this.setState(
      update(this.state, {
        doneData: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        }
      })
    );
  };

  render() {
    const { todoData, doingData, doneData } = this.state;
    console.log('in edit', this.props);
    return (
      <div>
        <div style={{ float: 'left', border: '1px solid' }}>
          {todoData.map((tsk, i) => (
            <Todo
              key={tsk[objectId]}
              index={i}
              id={tsk[objectId]}
              text={tsk.task.name}
              moveCard={this.moveCard}
            />
          ))}
        </div>
        <div style={{ float: 'left', border: '1px solid' }}>
          {doingData.map((tsk, i) => (
            <Doing
              key={tsk[objectId]}
              index={i}
              id={tsk[objectId]}
              text={tsk.task.name}
              moveCard={this.moveCardDoing}
            />
          ))}
        </div>
        <div style={{ float: 'left', border: '1px solid' }}>
          {doneData.map((tsk, i) => (
            <Done
              key={tsk[objectId]}
              index={i}
              id={tsk[objectId]}
              text={tsk.task.name}
              moveCard={this.moveCardDone}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(EditTaskStatusDnD);
