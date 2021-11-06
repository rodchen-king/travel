/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-11-03 16:35:26
 * @LastEditTime: 2021-11-06 13:38:28
 * @LastEditors: rodchen
 */

import React, { useContext } from 'react';
import styles from './Robot.module.css'
import { appContext, appSetStateContext } from '../AppState'


interface RobotProps {
  id: number,
  name: string,
  email: string
}

const Robot : React.FC<RobotProps> = ({id, name, email}) => {

  const value = useContext(appContext)
  const setState = useContext(appSetStateContext)
  const addToCart = () => {
    if (setState) {
      setState(state => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, {id, name}]
          }
        }
      })
    }
  }

  return <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      {value.userName}
      <span onClick={addToCart}> 
        添加购物车
      </span>
    </div>
}

export default Robot;