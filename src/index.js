import React from 'react';
import ReactDOM from "react-dom";
import App from "./App"
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();
const Store = createStore(rootReducer, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
));
ReactDOM.render(
    <Provider store={Store} >
        <App />
    </Provider>,
    document.getElementById("root")
);
