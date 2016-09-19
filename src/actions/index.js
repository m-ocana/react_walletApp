import { v4 } from 'node-uuid';
export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const IN = "IN";
export const OUT = "OUT";
export const RESET = "RESET";

export function addTransaction(transactionType, value) {
  let id = v4();
  let amount = (transactionType === OUT ? value * (-1): value);
  let date = Date.now()/1000;
  let transaction = {
    id: id,
    amount: amount,
    date: date,
    type: transactionType
  }

  return {
    type: ADD_TRANSACTION,
    payload: transaction
  }
}

export function resetWallet() {
  return {
    type: RESET,
    payload: {}
  }
}
