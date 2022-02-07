export const initialState = {
    isLoggedIn: false, // 로그인하면 true로 변경
    me: null,
    signUpData: {},
    loginData: {},
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return { // 안바뀌는건 ...state로 표시하고 바뀌는건 따로 표시
                ...state,
                isLoggedIn: true, // 나머지것들도 바꿔주기
                me: action.data,
            };
        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false,
                me: null,
            };
        
        default:
            return state;
    }
}

export default reducer;