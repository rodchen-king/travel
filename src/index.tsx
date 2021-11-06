/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-11-03 15:33:21
 * @LastEditTime: 2021-11-06 13:27:28
 * @LastEditors: rodchen
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppStateProvuder } from './AppState'


ReactDOM.render(
  <React.StrictMode>
    <AppStateProvuder>
      <App userName="rod"  />
    </AppStateProvuder>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
