import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {IntlProvider} from 'react-intl';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const LOCALE = "en";

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <IntlProvider locale={LOCALE}>
      <App />
    </IntlProvider>
  </Provider>
  , document.querySelector('.app-container'));
