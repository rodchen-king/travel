/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-04-10 13:13:24
 * @LastEditTime: 2021-11-09 09:51:00
 * @LastEditors: rodchen
 */
import { createStore, combineReducers } from 'redux';
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer
})

const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>

export default store;