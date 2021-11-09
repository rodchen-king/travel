/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-11-09 09:46:19
 * @LastEditTime: 2021-11-09 11:20:57
 * @LastEditors: rodchen
 */
import {
  FETCH_RECOMMEND_PRODUCTS_FAIL,
  FETCH_RECOMMEND_PRODUCTS_START,
  FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  RecommendProductAction,
} from "./recommendProductsActions";

interface RecommendProductsState {
  productList: any[];
  loading: boolean;
  error: string | null;
}

const defaultState: RecommendProductsState = {
  loading: true,
  error: null,
  productList: [],
};

const recommendProductsReducer = (state = defaultState, action: RecommendProductAction) => {
  switch (action.type) {
    case FETCH_RECOMMEND_PRODUCTS_START:
      return { ...state, loading: true };
    case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
      return { ...state, loading: false, productList: action.payload.data };
    case FETCH_RECOMMEND_PRODUCTS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default recommendProductsReducer
