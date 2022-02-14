import { all, fork, call, take, put } from 'redux-saga/effects';
import axios from 'axios';

function logInAPI(data) {
    return axios.post('/api/login', data); // logIn의 값을 서버에 요청 보냄
}
function* logIn(action) { // LOG_OUT_REQUEST의 액션이 매개변수에 저장됨(action)
    try { // 요청이 실패할 경우를 생각하여 try-catch문
        const result = yield call(logInAPI, action.data); // logInAPI 자리는 함수, action.data 자리는 매개변수
        yield put({ // put = dispatch(누르면 status를 'action'으로 바꿔주는 메소드) 같은것. 'LOG_IN_SUCCES' action을 dispatch 한다.
            type: 'LOG_IN_SUCCES',
            data: result.data,
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
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data, // 실패 결과값
        });
    }
}

function logOutAPI() {
    return axios.post('/api/logout');
}
function* logOut() {
    try {
        const result = yield call(logOutAPI);
        yield put({
            type: 'LOG_OUT_SUCCES',
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data,
        });
    }
}

function addPostAPI(data) {
    return axios.post('/api/post', data);
}
function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data);
        yield put({
            type: 'ADD_POST_SUCCES',
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.response.data,
        });
    }
}


function* watchLogIn() { // 비동기 액션 크리에이터 (saga에서는 이벤트리스너 같은 느낌)
    yield take('LOG_IN_REQUEST', logIn); // 'LOG_IN_REQUEST' 실행되면 logIn이라는 generator 함수 실행하여 next 한다.
}
function* watchLogOut() {
    yield take('LOG_OUT_REQUEST', logOut);
}
function* watchAddPost() {
    yield take('ADD_POST_REQUEST', addPost);
}

export default function* rootSaga() { // function* = generator 함수 | function* 안에 yeild를 썼을경우 내부 코드에서 중단점을 만들 수 있는 장점이 있다. 
    yield all([ // all = 여러 사가를 합쳐주는 역할. 안에 있는 것들을 한 번에 실행시켜줌. 파라미터는 배열로 받음
        fork(postSaga), // fork = generator 함수를 실행시키는 역할. 그러나 비동기이기 때문에 결과값을 기다려 주지 않는다.
        fork(userSaga),
    ]);
}