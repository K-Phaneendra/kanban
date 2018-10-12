import React, { Component } from 'react';
import CheckBoxTable from '../../components/Table/CheckboxTable';
import { contactsTableCol } from '../tableColumns';
import Avatar from '../../components/Avatar/Avatar';

class ContactsTabularView extends Component {
  constructor() {
    super();
    this.state = {
      selection: [],
      selectAll: false
    };
  }

  getSelectedRowData = (selectedId, users) => {
    const objectId = '_id';
    let selectedRow = {};
    users.map(usr => {
      if (selectedId.indexOf(usr[objectId]) >= 0) {
        selectedRow = usr;
      }
      return null;
    });
    return selectedRow;
  };

  toggleSelection = (selectedId, users) => {
    const selectedRow = this.getSelectedRowData(selectedId, users);
    this.props.selectedRowToEdit(selectedRow);
    this.setState({ selection: selectedId });
  };

  renderUsersTableData = users => {
    const usersTableData = [];
    let usersObj = {};
    users.map(usr => {
      usersObj = { ...usr };
      usersObj.avatar = <Avatar image={usr.image} />;
      usersTableData.push(usersObj);
      return null;
    });
    return usersTableData;
  };

  render() {
    const { users } = this.props;
    const usersTableData = this.renderUsersTableData(users);
    return (
      <div>
        <CheckBoxTable
          toggleSelection={selection => this.toggleSelection(selection, users)}
          toggleAll={(selectAll, selection) =>
            this.setState({ selectAll, selection })
          }
          selection={this.state.selection}
          selectAll={this.state.selectAll}
          data={usersTableData}
          columns={contactsTableCol}
        />
      </div>
    );
  }
}

export default ContactsTabularView;
