import React from 'react';
import ReactDOM from "react-dom";
import App from "./App"
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';



const Store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
    thunkMiddleware
  
));
ReactDOM.render(
    <Provider store={Store} >
        <App />
    </Provider>,
    document.getElementById("root")
);
