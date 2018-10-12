import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs/Tabs';
import SnackBar from './components/SnackBar/SnackBar';
import { handleSnackBar } from './actions/kanbanToolActions';

class App extends Component {
  render() {
    const { snackBarData } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kanban Tool</h1>
          <div style={{ marginTop: '60px', float: 'right' }}>
            - Phani&nbsp;&copy;
          </div>
        </header>
        <div>
          <Tabs />
        </div>
        <SnackBar
          open={snackBarData.open}
          msg={snackBarData.msg}
          onClose={() =>
            this.props.dispatch(handleSnackBar({ open: false, msg: '' }))
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  snackBarData: state.kanbanToolReducer.snackBarData
});

export default connect(mapStateToProps)(App);
