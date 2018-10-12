import React, { Component } from 'react';
import { connect } from 'react-redux';
import Primary from '../../components/Buttons/Primary';
import TextField from '../../components/TextField/TextField';
import { createTask } from '../../actions/kanbanToolActions';

class CreateTask extends Component {
  constructor() {
    super();
    this.state = {
      disabled: true
    };
  }

  captureName = e => {
    if (e.target.value === '') {
      this.setState({ disabled: true });
    } else {
      this.setState({ name: e.target.value, disabled: false });
    }
  };

  createTask = () => {
    console.log(this.state.name);
    this.props.dispatch(createTask({ name: this.state.name }));
  };

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <form>
          <TextField placeholder="Task Name" onBlur={this.captureName} />

          <Primary
            value="Create Task"
            onClick={this.createTask}
            disabled={disabled}
          />
        </form>
      </div>
    );
  }
}

export default connect()(CreateTask);
