import React, { Component } from 'react';
import CreateContact from '../contact/createContact';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div>
          <CreateContact />
        </div>
        <div>to do list with table view(todo, doing, done)</div>
      </div>
    );
  }
}

export default Dashboard;
