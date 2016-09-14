import { combineReducers } from 'redux';
import BalanceReducer from './reducer_balance';
import TransactionsReducer from './reducer_transactions';

const rootReducer = combineReducers({
  currentBalance: BalanceReducer,
  transactions: TransactionsReducer
});

export default rootReducer;
