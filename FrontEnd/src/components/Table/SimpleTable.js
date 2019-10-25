import React, { Component } from 'react';
// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class SimpleTable extends Component {
  render() {
    return (
      <ReactTable
        data={this.props.data}
        columns={this.props.columns}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    );
  }
}

export default SimpleTable;
