/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-11-03 15:33:21
 * @LastEditTime: 2021-11-05 15:51:46
 * @LastEditors: rodchen
 */
import React from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart';

interface Props {

}

interface States {
  robotGallery: any[]
}

class App extends React.Component<Props, States> {
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      this.setState({
        robotGallery: data
      })
    })
  }
  
  render () {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>robot 机器人</h1>
        </div>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map(r => <Robot id={r.id} name={r.name} email={r.email} />)}
        </div>
      </div>
    );
  }
}

export default App;
