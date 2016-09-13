import { combineReducers } from 'redux';
import TransactionReducer from './reducer_transaction';

const rootReducer = combineReducers({
  transactions: TransactionReducer
});

export default rootReducer;
