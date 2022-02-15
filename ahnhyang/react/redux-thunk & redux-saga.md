# 1. 리덕스 미들웨어(MiddleWare)
- 액션이 디스패치 된 다음 리듀서에서 해당 액션을 받아와서 업데이트하기 전 추가적인 작업을 할 수 있는 액션과 리듀서 사이의 중간자이다.  
- 전달받은 액션을 단순히 콘솔에 기록하거나, 액션을 아예 취소하거나, 다른 종류의 액션을 추가하는 등 다양한 역할을 담당할 수 있다.
- 보통 리덕스에서 미들웨어를 사용하는 주된 사용 용도는 비동기 작업을 처리 할 때로, 예를 들어 리액트 앱에서 우리가 만약 백엔드 API 를 연동해야 된다면, 리덕스 미들웨어를 사용하여 처리한다.
- 대표적인 리덕스 미들웨어 라이브러리에는 redux-thunk, redux-saga 등이 존재한다.
<img src="https://i.imgur.com/31tvphE.png" alt="리덕스 미들웨어의 역할"/>

<br/>

## 1.2 리덕스 미들웨어를 사용해야하는 이유
```js
// 비동기 함수 선언
const userInfo = (body) => {
  const request = axios.get('/api/users/userlist', body)
    .then(response => response.data); // request는 Promise 객체.
  
  return {
    type: USER_INFO,
    payload: request  
  }
}
dispatch(userInfo()); // Error: Actions must be plain objects. Use custom middleware for async actions.
```
리덕스에서 미들웨어 없이 비동기 액션을 호출할시,  
axios.get().then(res => res.data) 반환값이 순수한 자바스크립트 객체 ( {} )가 아닌 Promise객체를 반환하기 때문에 오류가 발생한다.

<br/>

# 2. redux-thunk
redux-thunk는 리덕스에서 비동기 작업을 처리 할 때 많이 사용하는 미들웨어이다.  
redux-thunk 사용시 **객체가 아닌 함수 형태의 액션을 디스패치** 할 수 있게 해준다.

<br/>

```js
//store에서 미들웨어로 redux-thunk 추가
import ReduxThunk from 'redux-thunk';
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';  // 액션 상수 정의
  
const increment = data => {    // 액션 함수 정의
  return {  
    type: INCREMENT_COUNTER,  
    payload: { data }  
  }  
}  
  
const incrementAsync = (sec, data) => (dispatch, getState)  => {  // thunk 함수 작성. 
  setTimeout(() => {  
    dispatch(increment(data));  
  }, sec);  
} 
```
## 2.1 thunks란?
<u>**특정작업을 나중에 할 수 있도록 미루기 위해**</u> 함수 형태로 감싼 것을 의미한다.
```js
// ex
const x = 1 + 2;
const x = () => 1 + 2;  // 함수가 호출되어야 연산이 이루어진다.
```

<br/>

# 3. redux-saga
redux-saga는 redux-thunk와 마찬가지로 redux 미들웨어이다.  
redux-thunk에 비해 이펙트 함수들을 통해 더 다양한 작업들을 처리할 수 있다.  

saga는 generator 함수를 통해 구현된다.  

<br/>

## 3.1 redux-saga 실행 흐름

1. saga(generator Function)를 만들어 redux-saga 미들웨어에 등록한다.
2. saga가 등록된 미들웨어에서 generator를 계속 실행하여 모든 effect를 실행한다.  

즉, saga는 yield 값을 반환하기만 하고 미들웨어가 이 값(effect)를 받아서 실행하는 역할을 맡는다.  

<br/>

## 3.2 saga 이펙트란
미들웨어가 실행할 명령을 담고 있는 자바스크립트 일반 객체(Plain Object)이다.  
일반적으로 put(), call() 등의  함수를 호출함으로써 해당 이펙트 객체를 생성한다.

<br/>

## 3.3 redux-saga 이펙트 주요 함수
1. call
- 함수의 동기적인 호출을 할 때 사용
2. fork
- 함수의 비동기적인 호출을 할 때 사용
3. put
- action을 디스패치 한다. (= store.dispatch() 함수)
4. take
- 액션이 디스패치 될 때까지 기다린다.
5.  takeLatest
- 액션 호출시에 같은 액션이 실행 중이면 그 액션은 파기되고 마지막 호출만 실행된다. 
- 실수로 로그인 버튼을 연달아 2번 누르는 경우 서버로 요청이 2번 가지 않도록 할 때 사용한다.
6. takeEvery 
- takeLatest와 다르게 모든 액션마다 실행된다. while (true) 로 감싸는 효과.

<br/>

## redux-saga 적용 방법
```js
// 1. store.js에 saga MiddleWare 등록
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware(); // saga MiddleWare 생성
const enhancer = 
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(sagaMiddleware))
    : composeWithDevTools(applyMiddleware(sagaMiddleware, logger));
const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga); // 루트 사가를 실행
// 2. rootSaga 만들기
import { all, fork } from "redux-saga/effects";
export default function* rootSaga() {
  yield all([fork(sagasFunction)]);
}
```

[참고링크]
- redux-saga 이해(https://velog.io/@hyex/redux-saga-redux-saga-%EB%A7%9D%EB%9D%BC%ED%95%98%EA%B8%B0)
- react에서 saga 사용하기 (https://kyounghwan01.github.io/blog/React/redux/redux-saga/#react%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5-saga-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5)
