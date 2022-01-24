import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    user: {
        isLoggedIn: false, // 로그인하면 true로 변경
        user: null,
        signUpData: {},
        loginData: {},
    },
    post: {
        mainPosts: [],
    }
}

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    }
}

// 동적으로 액션 생성해주는 action creator (미리 다 만들어놓을 수 없기때문에)
const changeNickname = (data) => {
    return {
        type: 'CHANGE_NICKNAME',
        data, // 바꿀 닉네임
    }
}
changeNickname('a0'); // data

store.dispatch(changeNickname('rooroo'));


const rootReducer = (state = initialState, action) => { // (이전상태,액션) => 다음상태 | 스위치문이 있는 함수
    switch (action.type) {
        case HYDRATE:
            console.log('HYDRATE', action);
            return { ...state, ...action.payload };
        case 'LOG_IN':
            return {
                ...state, // initialState 객체 펴주기
                user: { // 그 안에 user 객체가 있으면 
                    ...state.user,
                    isLoggedIn: true, // 나머지것들도 바꿔주기
                    user: action.data,
                },
            };
        case 'LOG_OUT':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false, 
                    user: null,
                },
            };
        default:
            return state;
    
    }
};

export default rootReducer;