/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-04-10 13:13:24
 * @LastEditTime: 2021-11-08 14:20:30
 * @LastEditors: rodchen
 */
import { createStore } from 'redux';
import languageReducer from "./language/languageReducer";

const store = createStore(languageReducer);

export type RootState = ReturnType<typeof store.getState>

export default store;