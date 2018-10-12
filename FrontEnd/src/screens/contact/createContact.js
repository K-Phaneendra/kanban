import React, { Component } from 'react';
import { connect } from 'react-redux';
import Primary from '../../components/Buttons/Primary';
import TextField from '../../components/TextField/TextField';
import AvatarUpload from '../../components/AvatarUpload/AvatarUpload';
import { createUser } from '../../actions/kanbanToolActions';

class CreateContact extends Component {
  constructor() {
    super();
    this.state = {
      preview: null,
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

  onClose = () => this.setState({ preview: null });

  onCrop = preview => this.setState({ preview });

  createUser = () => {
    this.props.dispatch(
      createUser({ name: this.state.name, image: this.state.preview })
    );
  };

  render() {
    const { preview, disabled } = this.state;
    return (
      <div>
        <form>
          <TextField placeholder="Contact Name" onBlur={this.captureName} />
          <AvatarUpload
            onClose={this.onClose}
            onCrop={this.onCrop}
            preview={preview}
          />
          <Primary
            value="Create User"
            onClick={this.createUser}
            disabled={disabled}
          />
        </form>
      </div>
    );
  }
}

export default connect()(CreateContact);
