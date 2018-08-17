import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore } from 'redux';

import promise from "redux-promise";

import { Provider } from 'react-redux';

import App from './App';
import reducers from './main/reducers';

const devTools =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise)(createStore)(reducers, devTools);

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store} >
        <App />
    </ Provider>
    , document.getElementById('root'));
// registerServiceWorker();
