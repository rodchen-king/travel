/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-11-03 16:35:26
 * @LastEditTime: 2021-11-06 14:45:34
 * @LastEditors: rodchen
 */

import React, { useContext } from 'react';
import styles from './Robot.module.css'
import { appContext } from '../AppState'
import { useAddToCart } from "./AddToCart";


export interface RobotProps {
  id: number,
  name: string,
  email: string,
}

const RobotDiscount: React.FC<RobotProps> = ({ id, name, email }) => {

  const value = useContext(appContext)
  const addToCart = useAddToCart()

  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name} 打折</h2>
      {value.userName}
      <span onClick={() => {addToCart(id, name)}}> 
        添加购物车
      </span>
    </div>
  )
}

export default RobotDiscount;