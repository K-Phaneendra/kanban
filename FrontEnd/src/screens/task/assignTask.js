import React, { Component } from 'react';
import CreateTask from './createTask';
import Select from '../../components/TextField/Select';
import Primary from '../../components/Buttons/Primary';

class AssignTask extends Component {
  render() {
    return (
      <div>
        <div>
          <CreateTask />
        </div>
        <div>
          <form>
            <Select label="Select Contact" />
            <Select label="Select Task" />
            <Primary value="Assign Task" />
          </form>
        </div>
        <div>table to display all tasks with contact names</div>
      </div>
    );
  }
}

export default AssignTask;
