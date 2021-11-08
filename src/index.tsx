/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-04-10 12:59:02
 * @LastEditTime: 2021-11-08 14:07:07
 * @LastEditors: rodchen
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from  './redux/store'
import "./i18n/configs";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
    document.getElementById('root')
);

