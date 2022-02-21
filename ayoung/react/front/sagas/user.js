import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
    FOLLOW_FAILURE,
    FOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    UNFOLLOW_FAILURE,
    UNFOLLOW_REQUEST,
    UNFOLLOW_SUCCESS,
} from '../reducers/user';

function logInAPI(data) {
    return axios.post('/api/login', data); // logIn의 값을 서버에 요청 보냄
}
function* logIn(action) { // LOG_OUT_REQUEST의 액션이 매개변수에 저장됨(action)
    try { // 요청이 실패할 경우를 생각하여 try-catch문
        console.log('saga logIn');
        // const result = yield call(logInAPI);
        yield delay(1000);
        yield put({ // put = dispatch(누르면 status를 'action'으로 바꿔주는 메소드) 같은것. 'LOG_IN_SUCCES' action을 dispatch 한다.
            type: LOG_IN_SUCCES,
            data: action.data,
        });
        /*
        - call : 동기 함수 호출. logInAPI가 return 할때까지 기다려서 result에 넣어줌
        .then(() => {
            yield put({
                type: 'LOG_IN_SUCCES',
                data: result.data,
            });
        });
        - fork : 비동기 함수 호출. 바로 다음게 실행됨
        yield put({
            type: 'LOG_IN_SUCCES',
            data: result.data,
        });
        */
    } catch (err) {
        console.error(err);
        yield put({
            type: LOG_IN_FAILURE,
            data: err.response.data, // 실패 결과값
        });
    }
}

function logOutAPI() {
    return axios.post('/api/logout');
}
function* logOut() {
    try {
        // const result = yield call(logOutAPI);
        yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}

function signUpAPI() {
    return axios.post('/api/signUp');
}

function* signUp() {
    try {
        // const result = yield call(signUpAPI);
        yield delay(1000);
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
}

function followAPI() {
    return axios.post('/api/follow');
}

function* follow(action) {
    try {
        // const result = yield call(followAPI);
        yield delay(1000);
        yield put({
            type: FOLLOW_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: FOLLOW_FAILURE,
            error: err.response.data,
        });
    }
}

function unfollowAPI() {
    return axios.post('/api/unfollow');
}

function* unfollow(action) {
    try {
        // const result = yield call(unfollowAPI);
        yield delay(1000);
        yield put({
            type: UNFOLLOW_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UNFOLLOW_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() { // function* = generator 함수 | function* 안에 yeild를 썼을경우 내부 코드에서 중단점을 만들 수 있는 장점이 있다. 
    yield all([ // all = 여러 사가를 합쳐주는 역할. 안에 있는 것들을 한 번에 실행시켜줌. 파라미터는 배열로 받음
        fork(watchFollow), // fork = generator 함수를 실행시키는 역할. 그러나 비동기이기 때문에 결과값을 기다려 주지 않는다.
        fork(watchUnfollow),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ]);
}