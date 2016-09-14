import {ADD_TRANSACTION} from '../actions/index';

export default function( state = 0, action){
  switch (action.type) {
    case ADD_TRANSACTION:
      console.log(action.payload.amount);
      console.log(state);
      let currentBalance = Number(state) + Number(action.payload.amount);
      return currentBalance;
      break;
  }
  return state;
}
