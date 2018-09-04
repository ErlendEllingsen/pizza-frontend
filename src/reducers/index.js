import { combineReducers } from 'redux';
import { Orders } from './orders';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  orders: Orders
});

export default rootReducer;
