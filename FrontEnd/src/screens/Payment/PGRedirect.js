import React, { Component } from 'react';
import { connect } from 'react-redux';

class PGRedirect extends Component {
  displayForm = restData =>
    Object.keys(restData).map(name => (
      <input type="text" name={name} value={restData[name]} />
    ));

  render() {
    return (
      <div>
        <form
          method="post"
          action="https://securegw-stage.paytm.in/theia/processTransaction?ORDER_ID=vidisha1234..0"
          name="f1"
        >
          <div border="1">{this.displayForm(this.props.restData)}</div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restData: state.ordersReducer.restData
});

export default connect(mapStateToProps)(PGRedirect);
