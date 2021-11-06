/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-11-06 13:11:57
 * @LastEditTime: 2021-11-06 13:31:37
 * @LastEditors: rodchen
 */
import React, { useState } from 'react';

interface AppStatevalue {
  userName: string,
  shoppingCart: {
    items: {
      id: number,
      name: string
    }[]
  }
}

const defaltContextValue: AppStatevalue = {
  userName: 'rod',
  shoppingCart: {
    items: []
  }
}

export const appContext = React.createContext(defaltContextValue)
export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStatevalue>> | undefined>(undefined)

export const AppStateProvuder: React.FC = (props) => {
  const [state, setState] = useState(defaltContextValue)

  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>
        {props.children}
      </appSetStateContext.Provider>
    </appContext.Provider>
  )
}