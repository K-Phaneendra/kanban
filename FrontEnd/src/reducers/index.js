import { combineReducers } from 'redux';
import kanbanToolReducer from './kanbanToolReducer';
import ordersReducer from './ordersReducer';

export default combineReducers({
  kanbanToolReducer,
  ordersReducer
});
