import {ADD_TRANSACTION} from '../actions/index';

export default function( state = 0, action){
  switch (action.type) {
    case ADD_TRANSACTION:
      let currentBalance = Number(state) + Number(action.payload.amount);
      return currentBalance;
      break;
  }
  return state;
}
