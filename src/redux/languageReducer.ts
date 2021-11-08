/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-11-07 15:55:58
 * @LastEditTime: 2021-11-08 10:19:42
 * @LastEditors: rodchen
 */
import i18n from "i18next";

export interface LanguageState {
  language: "en" | "zh",
  languageList: {
    name: string,
    code: string
  }[]
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    {
      name: "中文",
      code: "zh"
    },
    {
      name: "English",
      code: "en"
    }
  ]
}



export default (state = defaultState, action) => {
  if (action.type === "change_language") {
    const newState = {
      ...state,
      language: action.payload
    }

    i18n.changeLanguage(action.payload); // 这样处理是不标准的，有副作用

    return newState
  }

  return state;
}