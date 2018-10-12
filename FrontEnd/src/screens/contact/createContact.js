import React, { Component } from 'react';
import { connect } from 'react-redux';
import Primary from '../../components/Buttons/Primary';
import TextField from '../../components/TextField/TextField';
import AvatarUpload from '../../components/AvatarUpload/AvatarUpload';
import { createUser, updateUser } from '../../actions/kanbanToolActions';
import ContactsTabularView from './tabularView';

class CreateContact extends Component {
  constructor() {
    super();
    this.state = {
      preview: null,
      disabled: true,
      editForm: false
    };
  }

  selectedRowToEdit = row => {
    const objectId = '_id';
    if (row[objectId]) {
      this.setState({
        selectedUserId: row[objectId],
        editForm: true,
        name: row.name,
        preview: row.image
      });
    } else {
      this.setState({
        selectedUserId: '',
        editForm: false,
        name: null,
        preview: null
      });
    }
  };

  captureName = e => {
    if (e.target.value === '') {
      this.setState({ disabled: true });
    } else {
      this.setState({ name: e.target.value, disabled: false });
    }
  };

  onClose = () => this.setState({ preview: null });

  onCrop = preview => this.setState({ preview });

  createUser = () => {
    this.props.dispatch(
      createUser({ name: this.state.name, image: this.state.preview })
    );
  };

  updateUser = () => {
    this.props.dispatch(
      updateUser({
        id: this.state.selectedUserId,
        name: this.state.name,
        image: this.state.preview
      })
    );
  };

  render() {
    const { preview, disabled, editForm } = this.state;
    const { users } = this.props;
    return (
      <div>
        <form>
          {editForm ? (
            <TextField
              placeholder="Contact Name"
              defaultValue={this.state.name}
              onChange={this.captureName}
            />
          ) : (
            <TextField placeholder="Contact Name" onChange={this.captureName} />
          )}

          <AvatarUpload
            onClose={this.onClose}
            onCrop={this.onCrop}
            preview={preview}
          />
          {editForm ? (
            <Primary
              value="Update User"
              onClick={this.updateUser}
              disabled={disabled}
            />
          ) : (
            <Primary
              value="Create User"
              onClick={this.createUser}
              disabled={disabled}
            />
          )}
        </form>
        <div style={{ margin: '1em auto' }}>
          <ContactsTabularView
            users={users}
            selectedRowToEdit={this.selectedRowToEdit}
          />
        </div>
      </div>
    );
  }
}

export default connect()(CreateContact);
