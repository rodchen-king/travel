/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-11-03 15:33:21
 * @LastEditTime: 2021-11-06 13:03:18
 * @LastEditors: rodchen
 */
import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart';

interface Props {
  userName: string
}

interface States {
  robotGallery: any[]
}

const App : React.FC<Props>  = (props) => {
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json();
        setRobotGallery (data) 
      } catch(err: any) {
        setError(err.messsage)
      }
      setLoading(false)
    }

    fetchData()

  }, [])



  useEffect(() => {
    document.title = `点击${count}`;
  }, [count])
  
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        {props.userName}
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>robot 机器人</h1>
      </div>
      <button onClick={() => {
        setCount(count + 1);
        setCount(count + 1)
        setCount(count + 1)
      }}>
        click
      </button>
      <span>{count}</span>
      <ShoppingCart />
      {loading ? 'loading' : <div className={styles.robotList}>
        {robotGallery.map((r: any )=> <Robot id={r.id} name={r.name} email={r.email} />)}
      </div>}
    </div>
  );
}

export default App;
