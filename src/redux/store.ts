/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-04-10 13:13:24
 * @LastEditTime: 2021-11-08 18:05:51
 * @LastEditors: rodchen
 */
import { createStore, combineReducers } from 'redux';
import languageReducer from "./language/languageReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(combineReducers({
  language: languageReducer
}), composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>

export default store;