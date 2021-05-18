import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import authReducer from "./redux-store/reducers/auths";
import profileReducer from './redux-store/reducers/profile';

const mainStore = combineReducers({
  auth: authReducer,
  profile: profileReducer
});

const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(
  mainStore,
  composeEnhancer(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
