import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers/index';
import rootSaga from '../sagas';

const configureStore = (context) => {
    console.log(context);
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares)) // 배포용일때는 compose (히스토리가 남아서 보안 위험하기 때문에)
        : composeWithDevTools(
            applyMiddleware(...middlewares), // 개발용 composeWithDevTools
        );
    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development', });

export default wrapper;

/*
    redux(리덕스) : 
    여러 컴포넌트의 공통적인 데이터(ex.로그인한 사람 정보)가 따로따로 분리되어 데이터가 흩어짐
    중앙에서 하나로 관리를 해서 컴포넌트들에게 뿌려주는 중앙 데이터 저장소 역할
*/