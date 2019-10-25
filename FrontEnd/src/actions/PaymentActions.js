import { API_POST, API_GET } from './APIMethods';
import { OrderType } from './ActionType';
import { orderUrl } from './ActionURL';

export const fetchOrders = () => {
  const url = `${orderUrl.FETCH_ORDERS}`;
  return async dispatch => {
    try {
      const result = await API_GET(url);
      if (!result.error) {
        dispatch({
          type: OrderType.FETCH_ORDERS,
          payload: result.orders
        });
      }
    } catch (error) {
      alert(error.message);
    }
  };
};

export const submitOrder = data => {
  const url = `${orderUrl.SUBMIT_ORDER}`;
  return async dispatch => {
    try {
      const result = await API_POST(url, data);
      console.log('result', result);
      if (!result.error) {
        dispatch({
          type: OrderType.ORDER_CREATED_WITH_CHECKSUMHASH,
          payload: result
        });
      }
      return result;
    } catch (error) {
      alert(error.message);
    }
    return null;
  };
};
