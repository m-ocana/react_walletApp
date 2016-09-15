export const STATE_KEY = "WALLET_STATE";

export function loadState() {
  try {
    const serializedState = localStorage.getItem(STATE_KEY);
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

export function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STATE_KEY, serializedState);
  } catch (err) {
    console.log(err);
  }
}
