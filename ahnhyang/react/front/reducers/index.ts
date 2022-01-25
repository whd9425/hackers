import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux"; // 리듀서 합쳐주는 함수

import user from "./user";
import post from "./post";

//(이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    // SSR HYDRATE를 위해 index reducer 추가
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
