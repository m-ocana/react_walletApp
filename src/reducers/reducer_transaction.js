import {ADD_TRANSACTION} from '../actions/index';

export default function( state = [], action){
  switch (action.type) {
    case ADD_TRANSACTION:
      return [action.payload, ...state]
      break;
  }
  return state;
}
