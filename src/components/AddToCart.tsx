/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-11-06 14:12:00
 * @LastEditTime: 2021-11-06 14:25:18
 * @LastEditors: rodchen
 */
import React,  { useContext } from 'react';
import { RobotProps } from "./Robot";
import { appSetStateContext } from '../AppState'

export const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
  return (props: any) => {
    const setState = useContext(appSetStateContext)
    const addToCart = (id: number, name: string) => {
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

    return <ChildComponent {...props} addToCart={addToCart} />
  }
}