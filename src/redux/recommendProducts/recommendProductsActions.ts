/*
 * @Description:
 * @Author: rodchen
 * @Date: 2021-11-09 10:00:15
 * @LastEditTime: 2021-11-09 14:05:43
 * @LastEditors: rodchen
 */
import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

export const FETCH_RECOMMEND_PRODUCTS_START = "FETCH_RECOMMEND_PRODUCTS_START"; // 正在调用推荐信息api
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS =
  "FETCH_RECOMMEND_PRODUCTS_SUCCESS"; // 推荐信息api调用成功
export const FETCH_RECOMMEND_PRODUCTS_FAIL = "FETCH_RECOMMEND_PRODUCTS_FAIL"; // 推荐信息api调用失败

interface FetchRecommendProductStartAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_START;
}

interface FetchRecommendProductSuccessAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS;
  payload: any;
}

interface FetchRecommendProductFailAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL;
  payload: any;
}

export type RecommendProductAction =
  | FetchRecommendProductStartAction
  | FetchRecommendProductSuccessAction
  | FetchRecommendProductFailAction;

export const fetchRecommendProductStartActionCreator = (): FetchRecommendProductStartAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_START,
  };
};

export const fetchRecommendProductSuccessActionCreator = (
  data
): FetchRecommendProductSuccessAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const fetchRecommendProductFailActionCreator = (
  error
): FetchRecommendProductFailAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: error,
  };
};

export const giveMeDataActionCreator = (): ThunkAction<
  void,
  RootState,
  undefined,
  RecommendProductAction
> => async (dispatch, getState) => {
  debugger
  dispatch(fetchRecommendProductStartActionCreator());
  try {
    const { data } = await axios.get(
      "https://mock.mengxuegu.com/mock/6189dc214c5d9932f7e7590e/travel/api/productCollections"
    );

    dispatch(fetchRecommendProductSuccessActionCreator(data))
  } catch (error) {
    dispatch(fetchRecommendProductFailActionCreator(error.message))
  }
};
