export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const IN = "IN";
export const OUT = "OUT";

export function addTransaction(transactionType, value) {
  const amount = (transactionType === OUT ? value * (-1): value);
  const date = Date.now()/1000;
  const transaction = {
    amount: amount,
    date: date,
    type: transactionType
  }

  console.log("going to add:",transaction);

  return {
    type: ADD_TRANSACTION,
    payload: transaction
  }
}
