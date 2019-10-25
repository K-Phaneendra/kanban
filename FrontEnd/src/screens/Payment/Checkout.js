import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { fetchOrders, submitOrder } from '../../actions/PaymentActions';
import Primary from '../../components/Buttons/Primary';
import TextField from '../../components/TextField/TextField';
import SimpleTable from '../../components/Table/SimpleTable';

const objectId = '_id';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      orderId: null,
      customerId: 'customer123',
      totalAmount: null
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchOrders());
  }

  captureOrderId = e => {
    this.setState({ orderId: e.target.value });
  };

  captureTotal = e => {
    this.setState({ totalAmount: e.target.value });
  };

  pay = () => {
    const order = {
      ORDER_ID: this.state.orderId,
      CUST_ID: this.state.customerId,
      INDUSTRY_TYPE_ID: 'Retail',
      CHANNEL_ID: 'WEB',
      TXN_AMOUNT: this.state.totalAmount,
      MID: 'FiXgHb39123019186569',
      WEBSITE: 'WEBSTAGING',
      PAYTM_MERCHANT_KEY: 'hzG%U9%n&lqX%&S5',
      CALLBACK_URL: 'http://localhost:9000/orders/testresponse'
    };
    const orderDB = {
      orderId: this.state.orderId,
      customerId: this.state.customerId,
      totalAmount: this.state.totalAmount
    };
    this.props.dispatch(submitOrder({ order, orderDB })).then(APIResponse => {
      if (!APIResponse.error) {
        window.open(
          `http://localhost:9000/orders/testtxn/${APIResponse.order[objectId]}`,
          'payTM Payment Gateway',
          'height=800,width=700'
        );
      }
    });
  };

  // to open paytm pages directly
  // checkout = () => {
  //   window.open(
  //     'http://localhost:3001/testtxn',
  //     'payTM Payment Gateway',
  //     'height=800,width=700'
  //   );
  // };

  render() {
    console.log(this.state);
    return (
      <div>
        {/* <Button onClick={this.checkout}>Checkout</Button> */}
        <form>
          <TextField
            placeholder="Customer ID"
            defaultValue={this.state.customerId}
            disabled
          />
          <TextField
            placeholder="Order ID"
            onChange={this.captureOrderId}
            defaultValue={this.state.orderId}
          />
          <TextField
            placeholder="Total Amount"
            type="Number"
            onChange={this.captureTotal}
            defaultValue={this.state.totalAmount}
          />
          <Primary
            onClick={this.pay}
            // value={`Pay ${
            //   !this.state.totalAmount ? '' : this.state.totalAmount
            // }`}
            value="Check Out"
          />
        </form>
        <div>
          <SimpleTable
            data={this.props.orders}
            columns={[
              {
                Header: 'Order ID',
                accessor: 'orderId'
              },
              {
                Header: 'Customer ID',
                accessor: 'customerId'
              },
              { Header: 'Total Amount', accessor: 'totalAmount' },
              { Header: 'Bank Name', accessor: 'payTMResponse.BANKNAME' },
              {
                Header: 'Bank Transaction ID',
                accessor: 'payTMResponse.BANKTXNID'
              },
              { Header: 'Status', accessor: 'payTMResponse.STATUS' },
              { Header: 'Message', accessor: 'payTMResponse.RESPMSG' }
            ]}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.ordersReducer.orders
});

export default connect(mapStateToProps)(Checkout);
