export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const IN = "IN";
export const OUT = "OUT";
export const RESET = "RESET";

export function addTransaction(transactionType, value) {
  let amount = (transactionType === OUT ? value * (-1): value);
  let date = Date.now()/1000;
  let transaction = {
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
  console.log("IN ACTION");
  return {
    type: RESET,
    payload: {}
  }
}
