import { cloneDeep } from 'lodash';
import { OrderType } from '../actions/ActionType';

const initialState = {
  orders: [],
  restData: {}
};

export default function reducer(state = initialState, action) {
  let st = state;
  switch (action.type) {
    case OrderType.FETCH_ORDERS: {
      st = { ...state, orders: action.payload };
      break;
    }
    case OrderType.ORDER_CREATED_WITH_CHECKSUMHASH: {
      const { orders } = state;
      const ordersClone = cloneDeep(orders);
      ordersClone.push(action.payload.order);

      st = { ...state, orders: ordersClone, restData: action.payload.restdata };
      break;
    }
    default: {
      return st;
    }
  }
  return st;
}
