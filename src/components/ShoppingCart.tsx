/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-11-05 14:31:13
 * @LastEditTime: 2021-11-06 13:40:13
 * @LastEditors: rodchen
 */
import React from 'react';
import styles from './ShoppingCart.module.css'
import { appContext } from '../AppState'

interface Props {
}

interface State {
  isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: true
    }

    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log("e.target", e.target);
    console.log("e.currentTarget", e.currentTarget);
    debugger
    console.log((e.target as HTMLElement).nodeName);
    
    
    if ((e.target as HTMLElement).nodeName === 'SPAN') {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
  }

  render () {
    return (
      <appContext.Consumer>
        {value => {
          return (
            <div className={styles.cartContainer}>
              <button onClick={(e) => {this.handleClick(e)}}>
                <p>p</p>
                <span>购物车{value.shoppingCart.items.length}（件）</span>
              </button>
              <div className={styles.cartDropDown}
                style={{
                  display: this.state.isOpen ? 'block' : 'none'
                }}
              >
                <ul>
                  {value.shoppingCart.items.map(item => <li>{item.name}</li>)}
                </ul>
              </div>
            </div>
          )
        }}
      </appContext.Consumer>
    )
  }
}

export default ShoppingCart;