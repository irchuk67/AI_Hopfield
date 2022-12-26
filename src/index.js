import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss'
import {compose, createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "./redux/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>

);

