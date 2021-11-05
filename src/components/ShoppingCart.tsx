/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-11-05 14:31:13
 * @LastEditTime: 2021-11-05 15:29:04
 * @LastEditors: rodchen
 */
import React from 'react';
import styles from './ShoppingCart.module.css'

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

    this.handleClick = this.handleClick.bind(this)
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
      <div className={styles.cartContainer}>
        <button onClick={this.handleClick}>
          <p>p</p>
          <span>购物车2（件）</span>
        </button>
        <div className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? 'block' : 'none'
          }}
        >
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ShoppingCart;