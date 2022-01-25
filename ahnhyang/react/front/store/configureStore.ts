import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers/index";

const configureStore = () => {
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  return store;
};

// createWrapper: nextjs의 라이프사이클에 redux를 결합시키는 역할.
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;

// 리덕스: 오류가 나도 추적이 쉬움. 해결하기가 쉽다. 다만 코드량이 많다.
// 몹엑스: 코드량이 크게줄어듬. 하지만 추적이 어렵다.

/*
const nest = { b: 'c' };
const prev = { a: nest};

const next = {...prev}

prev.a === next.a // true
prev === next //false
*/
