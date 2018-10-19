import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cloneDeep, pullAllWith, isEqual } from 'lodash';
import { updateAssignedTasks } from '../../actions/kanbanToolActions';

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

export default connect()(
  class EditTaskStatus extends Component {
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

    todo = val => {
      const { todoData, doingData, doneData } = this.state;
      const doingDataClone = pullAllWith(doingData, [val], isEqual);
      const todoClone = cloneDeep(todoData);
      const doneClone = pullAllWith(doneData, [val], isEqual);

      const generatedObj = {
        task: val.task,
        status: 'TO DO',
        _id: val[objectId]
      };
      todoClone.push(generatedObj);

      this.setState({
        todoData: todoClone,
        doingData: doingDataClone,
        doneData: doneClone
      });
    };

    doing = val => {
      const { todoData, doingData, doneData } = this.state;
      const doingDataClone = cloneDeep(doingData);
      const todoClone = pullAllWith(todoData, [val], isEqual);
      const doneClone = pullAllWith(doneData, [val], isEqual);

      const generatedObj = {
        task: val.task,
        status: 'DOING',
        _id: val[objectId]
      };
      doingDataClone.push(generatedObj);

      this.setState({
        todoData: todoClone,
        doingData: doingDataClone,
        doneData: doneClone
      });
    };

    done = val => {
      const { todoData, doingData, doneData } = this.state;
      const doingDataClone = pullAllWith(doingData, [val], isEqual);
      const todoClone = pullAllWith(todoData, [val], isEqual);
      const doneClone = cloneDeep(doneData);

      const generatedObj = {
        task: val.task,
        status: 'DONE',
        _id: val[objectId]
      };
      doneClone.push(generatedObj);

      this.setState({
        todoData: todoClone,
        doingData: doingDataClone,
        doneData: doneClone
      });
    };

    render() {
      const { todoData, doingData, doneData } = this.state;

      return (
        <div>
          <div style={taskStyles}>
            {/* eslint-disable-next-line */}
            <div style={labelStyles}>TO DO</div>
            <ol>
              {todoData.map(val => (
                <li>
                  {val.task.name}
                  <br />
                  <input
                    type="button"
                    value="DOING"
                    onClick={() => this.doing(val)}
                  />

                  &nbsp;
                  <input
                    type="button"
                    value="DONE"
                    onClick={() => this.done(val)}
                  />
                </li>
              ))}
            </ol>
          </div>
          <div style={taskStyles}>
            {/* eslint-disable-next-line */}
            <div style={labelStyles}>DOING</div>
            <ol>
              {doingData.map(val => (
                <li>
                  {val.task.name}
                  <br />
                  <input
                    type="button"
                    value="TO DO"
                    onClick={() => this.todo(val)}
                  />

                  &nbsp;
                  <input
                    type="button"
                    value="DONE"
                    onClick={() => this.done(val)}
                  />
                </li>
              ))}
            </ol>
          </div>
          <div style={taskStyles}>
            {/* eslint-disable-next-line */}
            <div style={labelStyles}>DONE</div>
            <ol>
              {doneData.map(val => (
                <li>
                  {val.task.name}
                  <br />
                  <input
                    type="button"
                    value="TO DO"
                    onClick={() => this.todo(val)}
                  />

                  &nbsp;
                  <input
                    type="button"
                    value="DOING"
                    onClick={() => this.doing(val)}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      );
    }
  }
);
