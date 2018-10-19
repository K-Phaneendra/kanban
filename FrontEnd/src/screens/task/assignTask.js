import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateTask from './createTask';
import Select from '../../components/TextField/Select';
import Primary from '../../components/Buttons/Primary';
import { assignTask } from '../../actions/kanbanToolActions';
import ContactsTabularView from '../contact/tabularView';
import ResponsiveDialog from '../../components/Model/ResponsiveDialog';
// import EditTaskStatus from './editTaskStatus';
import EditTaskStatusDnD from './editTaskStatusDnD';

class AssignTask extends Component {
  constructor() {
    super();
    this.state = {
      disableSubmit: true,
      editForm: false,
      openEdit: false
    };
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
    const taskObj = {
      task: this.state.task,
      status: 'TO DO'
    };
    this.props.dispatch(assignTask(this.state.contact, taskObj));
  };

  selectedRowToEdit = row => {
    const objectId = '_id';
    console.log('selected Row', row);
    if (row[objectId]) {
      this.setState({
        selectedRow: row,
        editForm: true
      });
    } else {
      this.setState({
        selectedRow: row,
        editForm: false
      });
    }
  };

  render() {
    const { users, tasks } = this.props;
    const usersDD = this.getDD(users);
    const tasksDD = this.getDD(tasks);

    let { disableSubmit } = this.state;
    if (this.state.contact && this.state.task) {
      disableSubmit = false;
    } else {
      disableSubmit = true;
    }
    console.log('disableSubmit', disableSubmit);
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
            <Primary
              value="Assign Task"
              disabled={disableSubmit}
              onClick={this.submit}
            />
          </form>
        </div>
        <div>
          <div>
            <ul
              style={{
                listStyleType: 'none',
                margin: '0',
                padding: '0',
                width: '60px'
              }}
            >
              {this.state.editForm ? (
                <li>
                  <i
                    className="far fa-edit"
                    title="Edit Tasks"
                    onClick={() => this.setState({ openEdit: true })}
                  />
                  <ResponsiveDialog
                    heading="Tasks Overview"
                    open={this.state.openEdit}
                    onClose={() => this.setState({ openEdit: false })}
                    onSubmit={() => this.setState({ submitClicked: true })}
                  >
                    {/* <EditTaskStatus
                      selectedRow={this.state.selectedRow}
                      submitClicked={this.state.submitClicked}
                    /> */}
                    <EditTaskStatusDnD
                      selectedRow={this.state.selectedRow}
                      submitClicked={this.state.submitClicked}
                    />
                  </ResponsiveDialog>
                </li>
              ) : (
                ''
              )}
            </ul>
          </div>
          <div style={{ margin: '1em auto' }}>
            <ContactsTabularView
              users={users}
              selectedRowToEdit={this.selectedRowToEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(AssignTask);
