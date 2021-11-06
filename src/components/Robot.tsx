/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-11-03 16:35:26
 * @LastEditTime: 2021-11-06 14:25:48
 * @LastEditors: rodchen
 */

import React, { useContext } from 'react';
import styles from './Robot.module.css'
import { appContext } from '../AppState'
import { withAddToCart } from "./AddToCart";


export interface RobotProps {
  id: number,
  name: string,
  email: string,
  addToCart: (id: number, name: string) => void
}

const Robot : React.FC<RobotProps> = ({id, name, email, addToCart}) => {

  const value = useContext(appContext)

  return <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      {value.userName}
      <span onClick={() => {addToCart(id, name)}}> 
        添加购物车
      </span>
    </div>
}

export default withAddToCart(Robot);