import { combineReducers } from 'redux';
import BalanceReducer from './reducer_balance';
import TransactionsReducer from './reducer_transactions';
import { RESET } from '../actions/index';
import { STATE_KEY } from '../modules/localStorage';

const appReducer = combineReducers({
  currentBalance: BalanceReducer,
  transactions: TransactionsReducer
});

const rootReducer = (state, action) => {
  if(action.type === RESET) {
      state = undefined; // reassigning reference to local variable
      localStorage.removeItem(STATE_KEY);
  }
  return appReducer(state, action)
}

export default rootReducer;
