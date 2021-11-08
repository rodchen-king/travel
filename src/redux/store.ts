/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-11-07 15:54:49
 * @LastEditTime: 2021-11-07 16:01:09
 * @LastEditors: rodchen
 */
import { createStore } from "redux";
import languageReducer from "./languageReducer";


const store = createStore(languageReducer);


export default store;