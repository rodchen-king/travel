/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-11-03 16:35:26
 * @LastEditTime: 2021-11-03 16:46:05
 * @LastEditors: rodchen
 */

import React from 'react';

interface RobotProps {
  id: number,
  name: string,
  email: string
}

const Robot : React.FC<RobotProps> = ({id, name, email}) => {

  return <li>
    <img alt="robot" src={`https://robohash.org/${id}`} />
    <h2>{name}</h2>
  </li>
}

export default Robot;