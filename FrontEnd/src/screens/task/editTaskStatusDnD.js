import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { find, cloneDeep } from 'lodash';
import Todo from './dndFiles/todo';
import Doing from './dndFiles/doing';
import Done from './dndFiles/done';
import { updateAssignedTasks } from '../../actions/kanbanToolActions';

const update = require('immutability-helper');

const objectId = '_id';
const taskStyles = {
  float: 'left',
  border: '1px solid',
  borderStyle: 'dotted',
  padding: '15px',
  margin: '5px'
};

const labelStyles = {
  textAlign: 'center',
  textDecoration: 'underline'
};

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.submitClicked) {
      const tasks = [];
      this.state.todoData.map(todo => {
        tasks.push(todo);
        return null;
      });
      this.state.doingData.map(doing => {
        tasks.push(doing);
        return null;
      });
      this.state.doneData.map(done => {
        tasks.push(done);
        return null;
      });
      this.props.dispatch(
        updateAssignedTasks(nextProps.selectedRow[objectId], tasks)
      );
    }
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

  intoDoing = id => {
    const objectToAdd = find(this.state.todoData, { _id: id }) || find(this.state.doneData, { _id: id });
    console.log('objectToAdd', objectToAdd, id);
    if (objectToAdd) {
      objectToAdd.status = 'DOING';
      const doingDataClone = cloneDeep(this.state.doingData);
      doingDataClone.push(objectToAdd);

      // delete in todoData
      const toDoDataClone = [];
      this.state.todoData.map(tsk => {
        if (tsk[objectId] === id) {
          // do nothing
        } else {
          toDoDataClone.push(tsk);
        }
        return null;
      });

      // delete in doneData
      const doneDataClone = [];
      this.state.doneData.map(tsk => {
        if (tsk[objectId] === id) {
          // do nothing
        } else {
          doneDataClone.push(tsk);
        }
        return null;
      });

      console.log('doingDataClone', doingDataClone, toDoDataClone);
      this.setState({ doingData: doingDataClone, todoData: toDoDataClone, doneData: doneDataClone });
    }
  };

  intoTodo = id => {
    const objectToAdd = find(this.state.doingData, { _id: id }) || find(this.state.doneData, { _id: id });
    console.log('objectToAdd', objectToAdd, id);
    if (objectToAdd) {
      objectToAdd.status = 'TO DO';
      const toDoDataClone = cloneDeep(this.state.todoData);
      toDoDataClone.push(objectToAdd);

      // delete in doingData
      const doingDataClone = [];
      this.state.doingData.map(tsk => {
        if (tsk[objectId] === id) {
          // do nothing
        } else {
          doingDataClone.push(tsk);
        }
        return null;
      });

      // delete in doneData
      const doneDataClone = [];
      this.state.doneData.map(tsk => {
        if (tsk[objectId] === id) {
          // do nothing
        } else {
          doneDataClone.push(tsk);
        }
        return null;
      });

      console.log('doingDataClone', toDoDataClone, doingDataClone, doneDataClone);
      this.setState({ doingData: doingDataClone, todoData: toDoDataClone, doneData: doneDataClone });
    }
  };

  intoDone = id => {
    const objectToAdd = find(this.state.doingData, { _id: id }) || find(this.state.todoData, { _id: id });
    console.log('objectToAdd', objectToAdd, id);
    if (objectToAdd) {
      objectToAdd.status = 'DONE';
      const doneDataClone = cloneDeep(this.state.doneData);
      doneDataClone.push(objectToAdd);

      // delete in doingData
      const doingDataClone = [];
      this.state.doingData.map(tsk => {
        if (tsk[objectId] === id) {
          // do nothing
        } else {
          doingDataClone.push(tsk);
        }
        return null;
      });

      // delete in todoData
      const toDoDataClone = [];
      this.state.todoData.map(tsk => {
        if (tsk[objectId] === id) {
          // do nothing
        } else {
          toDoDataClone.push(tsk);
        }
        return null;
      });

      console.log('doingDataClone', doingDataClone, toDoDataClone);
      this.setState({ doingData: doingDataClone, todoData: toDoDataClone, doneData: doneDataClone });
    }
  };

  render() {
    const { todoData, doingData, doneData } = this.state;
    console.log('in edit', this.props);
    return (
      <div>
        <div style={taskStyles}>
        <div style={labelStyles}>TO DO</div>
          {todoData.map((tsk, i) => (
            <Todo
              key={tsk[objectId]}
              index={i}
              id={tsk[objectId]}
              text={tsk.task.name}
              moveCard={this.moveCard}
              intoTodo={this.intoTodo}
            />
          ))}
        </div>
        <div style={taskStyles}>
            <div style={labelStyles}>DOING</div>
          {doingData.map((tsk, i) => (
            <Doing
              key={tsk[objectId]}
              index={i}
              id={tsk[objectId]}
              text={tsk.task.name}
              moveCard={this.moveCardDoing}
              intoDoing={this.intoDoing}
            />
          ))}
        </div>
        <div style={taskStyles}>
            <div style={labelStyles}>DONE</div>
          {doneData.map((tsk, i) => (
            <Done
              key={tsk[objectId]}
              index={i}
              id={tsk[objectId]}
              text={tsk.task.name}
              moveCard={this.moveCardDone}
              intoDone={this.intoDone}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default connect()(DragDropContext(HTML5Backend)(EditTaskStatusDnD));
