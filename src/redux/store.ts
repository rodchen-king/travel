/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-04-10 13:13:24
 * @LastEditTime: 2021-11-08 11:45:50
 * @LastEditors: rodchen
 */
import { createStore } from 'redux';
import languageReducer from "./language/languageReducer";

const store = createStore(languageReducer);

export default store;