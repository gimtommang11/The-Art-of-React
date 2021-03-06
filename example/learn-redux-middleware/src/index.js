import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  applyMiddleware
} from 'redux';
import {
  Provider
} from 'react-redux/';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './modules/index';
//import loggerMiddleware from './lib/loggerMiddleware';
import {
  createLogger
} from 'redux-logger';
import ReduxThunk from 'redux-thunk'

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk)); //미들웨어 스토어에 적용

ReactDOM.render(
  <Provider store = {store} >
  <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();