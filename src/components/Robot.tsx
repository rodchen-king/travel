/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-11-03 16:35:26
 * @LastEditTime: 2021-11-05 11:03:20
 * @LastEditors: rodchen
 */

import React from 'react';
import styles from './Robot.module.css'

interface RobotProps {
  id: number,
  name: string,
  email: string
}

const Robot : React.FC<RobotProps> = ({id, name, email}) => {

  return <div className={styles.cardContainer}>
    <img alt="robot" src={`https://robohash.org/${id}`} />
    <h2>{name}</h2>
  </div>
}

export default Robot;