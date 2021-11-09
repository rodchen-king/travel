/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-04-10 13:13:24
 * @LastEditTime: 2021-11-09 14:09:42
 * @LastEditors: rodchen
 */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer
})

const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk), composeWithDevTools()));

export type RootState = ReturnType<typeof store.getState>

export default store;