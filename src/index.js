import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import {IntlProvider} from 'react-intl';
import App from './components/app';
import { saveState, loadState } from './modules/localStorage';

const LOCALE = "en";

const persistedState = loadState();
const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers, persistedState);

store.subscribe(() => {
  saveState(store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={LOCALE}>
      <App />
    </IntlProvider>
  </Provider>
  , document.querySelector('.app-container'));
