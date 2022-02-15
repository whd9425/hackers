# Redux
Redux란, 상태관리 라이브러리로써 **모든 컴포넌트들이 state를 쉽게 공유**할 수 있게 해주는 방식이다. (state: 변하는 데이터)  
React에서 쓰기위해 만들어져 React + Redux는 궁합이 좋아 실제 리액트 프로젝트 중 점유율이 가장높은 라이브러리 중 하나이다.

<br/>

## 1. React의 기존 데이터 흐름 방식
React는 컴포넌트 계층 구조를 따라 데이터가 한방향으로 흐른다. (단방향 데이터 흐름:one-way data flow)  
A -> B -> C -> D -> E -> G 계층구조의 컴포넌트가 있다고 가정할 떄,  
A 컴포넌트에서 G 컴포넌트로 데이터를 보내기 위해서는 props로 각 계층구조에 데이터를 넘겨줘야 한다.  
<br/>
<img src="https://i.imgur.com/nWgg01Z.png" alt="기존 리액트 데이터 흐름"/>

```js
// A.js
...
  return(
    <E data={1}/>
  )
...
...
// E.js
...
  return(
    <G data={1}/>
  )
...
```
리덕스를 쓰면, 위와 같은 데이터 관리를 컴포넌트 바깥에서 할 수 있게 된다.  
<img src="http://blog.mazarin.lk/wp-content/uploads/2017/09/Wthout-redux-with-redux.png" alt="리덕스 사용시 데이터흐름"/>
<br/>

## 2. Redux에서 사용되는 주요 키워드

1. **액션(Action)**
  - reducer에서 어떤 로직을 처리할지 정의되어 있는 객체. 액션의 이름과 같은 **type속성**을 필수로 가지고 있어야하며, data도 전달 가능하다.
2. **리듀서(Reducer)**
  - state를 변경시키는 함수. 매개변수로 state와 action 객체를 받으며, reducer에서 retrun 하는 값이 state가 된다.
3. **스토어(Store)**
  - 현재 state 및 reducer, 몇가지 내장 함수들이 포함되어있다.
4. **디스패치(Dispatch)**
  - Action객체를 reducer에게 전달하는 store 내장 함수.
5. **구독(Subscribe)**
  - state 값이 변하는지 감지하는 store 내장 함수.

<img src="https://media.vlpt.us/images/jtwjs/post/2dd260b8-603c-4025-8856-aed06e4cc142/redux-architecture%20(1).png" alt="Redux 실행 흐름">

```js
import { createStore } from "redux";  
// reducer 정의
const reducer = (state = 0, action) => {
  if(action.type === "ADD") { 
    return state + 1;
  }
  else return state;
}
// store 생성
const store = createStore(reducer); // createStore: 함수로 데이터를 넣어주는 저장소 역할. 매개변수에 state를 변경하는 reducer함수를 받는다.
// state가 변경될때 시행될 함수 정의
const onChange() => console.log("changed");
store.subscribe(onChange);  // subscribe 정의, dispatch시마다 onChange()가 호출됨.
// store에 dispatch함수로 action 객체 전달. action을 발생시킴.
store.dispatch(
  { type: "ADD" }
);
console.log(store.getState());  // '1' 출력, getState()는 상태를 출력해주는 함수.
```

<br/>

## 3. Redux를 컴포넌트에서 사용하는 방법
redux는 **useDispatch()** 와 **useSelector()** Hooks 함수로 우리가 만든 함수형 컴포넌트에서 사용할 수 있다.


### 3.1 useSelector()
useSelector 함수는 store로부터 state를 가져올 때 사용한다.
```js
//Component.jsx
import { useSelector } from "react-redux";
const result = useSelector((state) => state.count);
```

<br/>

### 3.2 useDispatch()
useDispatch 함수는 action을 dispatch할 때 사용한다.
```js
//Component.jsx
import { useDispatch } from "react-redux";
const dispatch = useDispatch();
dispatch({ 
  type: 'ADD', 
  data: 10
});
```

<br/>




[참고문헌]
- 리덕스 코리아 공식문서 (https://ko.redux.js.org/understanding/thinking-in-redux/motivation)
- 벨로퍼트 리덕스 (https://velopert.com/3528)
- 단방향 데이터 흐름 Flux 패턴의 이해(https://bestalign.github.io/translation/cartoon-guide-to-flux/)
- 리덕스 구성요소 이해(https://wonit.tistory.com/344)
- 타입스크립트와 함께 사용하기 - 공식문서 (https://redux.js.org/usage/usage-with-typescript)
