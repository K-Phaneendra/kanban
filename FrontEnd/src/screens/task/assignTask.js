import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateTask from './createTask';
import Select from '../../components/TextField/Select';
import Primary from '../../components/Buttons/Primary';

class AssignTask extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getDD = json => {
    const objectId = '_id';
    const jsonDD = [];
    let jsonObj = {};
    json.map(usr => {
      jsonObj = {};
      jsonObj.value = usr[objectId];
      jsonObj.label = usr.name;
      jsonDD.push(jsonObj);
      return null;
    });
    return jsonDD;
  };

  selectedDD = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submit = () => {
    alert('assign task to emp with status as TODO');
  };

  render() {
    const { users, tasks } = this.props;
    const usersDD = this.getDD(users);
    const tasksDD = this.getDD(tasks);
    return (
      <div>
        <div>
          <CreateTask />
        </div>
        <div>
          <form>
            <Select
              label="Select Contact"
              ddData={usersDD}
              selectedDD={e => this.selectedDD(e)}
              name="contact"
              value={this.state.contact}
            />
            <Select
              label="Select Task"
              ddData={tasksDD}
              selectedDD={e => this.selectedDD(e)}
              name="task"
              value={this.state.task}
            />
            <Primary value="Assign Task" onClick={this.submit} />
          </form>
        </div>
        <div>table to display all tasks with contact names</div>
      </div>
    );
  }
}

export default connect()(AssignTask);
