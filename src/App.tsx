/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-11-03 15:33:21
 * @LastEditTime: 2021-11-03 16:43:23
 * @LastEditors: rodchen
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import robots from './mockdata/robots.json'
import Robot from './components/Robot'

function App() {
  return (
    <ul>
      {robots.map(r => <Robot id={r.id} name={r.name} email={r.email} />)}
    </ul>
  );
}

export default App;
