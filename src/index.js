import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from './App';
import store from './app/store';
import 'antd/dist/antd.css';

ReactDom.render(
    // this is the react-router-dom wrapper to allow our links to work
    <Router>
        {/* This is the redux provider wrapper, every single component in our App will have access to store variable */}
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
     document.getElementById('root')
);