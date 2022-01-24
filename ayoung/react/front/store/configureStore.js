import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';

import reducer from '../reducers';

const configureStore = () => {
    const store = createStore(reducer);
    store.dispatch({
        type: 'CHANGE_NICKNAME',
        data: 'a0',
    })
    return store;
};

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development', });

export default wrapper;

/*
    redux(리덕스) : 
    여러 컴포넌트의 공통적인 데이터(ex.로그인한 사람 정보)가 따로따로 분리되어 데이터가 흩어짐
    중앙에서 하나로 관리를 해서 컴포넌트들에게 뿌려주는 중앙 데이터 저장소 역할
*/