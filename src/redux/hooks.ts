/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-11-08 14:47:43
 * @LastEditTime: 2021-11-08 14:48:48
 * @LastEditors: rodchen
 */
import { useSelector as useReduxSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "./store";

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;