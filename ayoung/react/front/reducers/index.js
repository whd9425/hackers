import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user'; // 리듀서 불러오기
import post from './post';

// (이전상태,액션) => 다음상태 | 스위치문이 있는 함수
const rootReducer = combineReducers({ // combineReducers = user리듀서 + post리듀서 
    index: (state = {}, action) => { // HYDRATE를 쓰기 위해 index,리듀서 추가 (서버사이드렌더링 위해서)
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