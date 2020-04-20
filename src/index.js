import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import countReducer from '../src/redux-store/reducers/CountReducer';

const bigStore = combineReducers({
  count: countReducer
});

const store = createStore(
  bigStore,
  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
