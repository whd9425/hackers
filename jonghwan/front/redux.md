## redux

Redux는 상태 업데이트와 관련된 로직을 효율적으로 관리하는 라이브러리이다 <br/>
여러 개의 컴포넌트에서 같은 상태를 공유할 때도 손쉽게 상태를 변경하고 관리할 수 있다. <br/>
프로젝트의 규모가 커지면 서로 다른 컴포넌트를 오가며 props와 state를 관리하는 것이 복잡해지기 때문에 외부에 store를 두고 관리하는 방식<br/><br/>

전역 상태만 관리하고자 한다면 Context API를 사용하는 것으로 충분하지만, 프로젝트 규모가 큰 경우엔 리덕스를 사용하여 효율성과 유지 보수성을 높여주는 것이 좋다. <br/>
또한 리덕스는 리액트에 종속되는 라이브러리가 아니기 때문에 Angular, Vue, VanilaJS와 같은 다른 프론트엔드 라이브러리와 함께 사용이 가능하다.<br/>


## redux기본 셋팅

```
import { createStore, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux'; 
import { createLogger } from 'redux-logger'; 
import { composeWithDevTools } from 'redux-devtools-extension'; 

const logger = createLogger(); 
const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));

/*React에서 redux 설정방법*/
<Provider store={store}>
    <App />
    <Menu />
</Provider>
// 위처럼 store를 정의한 후에 최 상단의 컴포넌트를 provider 컴포넌트로 감싸게 된다면
// 하위 컴포넌트 어디에서든 store에 접근할 수 있게 된다!

// next에서는 페이지 불러올때마다 store를 셍성하기 때문에 방식이 맞지 않음 그래서  next-redux-wrapper 로 

const App = ({Component}: AppProps) => {  
    return(
        <div>
            <App />
            <Menu />
        </div>
    )
}

export default wrapper.withRedux(App);

```

### 1.액션(Action)<br/><br/>

상태에 변화가 필요하다면 액션을 일으켜야한다. 액션은 객체로 표현되며 type필드를 반드시 가지고 있어야 한다.

```
const initialState = {  //초기상태 
 counter: 1,
}

export const ADD_TODO = 'ADD_TODO';//액션타입 정의

```

### 2.액션 생성함수(Action Creator)<br/><br/>

액션 생성함수는 액션 객체를 만들어주는 함수이다. 화살표 함수로도 표현이 가능하다.

```

function addTodo(data) {
 return {
   type: 'ADD_TODO',
   data,
 }
}

```

### 3.리듀서(reducer)<br/><br/>

리듀서를 한국어로 번역해보면 변화를 일으키는 것을 말한다. <br/>
리듀서는 현재 상태와 액션 객체를 받아, 필요하다면 새로운 상태를 리턴하는 함수이다.<br/> 
액션 유형을 기반으로 이벤트를 처리하는 이벤트 리스너라고 생각하면 된다.<br/>

```
function reducer(state = initialState, action) {
 switch (action.type) {
   case INCREMENT:
     return {
       counter: state.counter + 1,
     }
   default:  // reducer 초기화될때를 한 번 실행이 되기 때문에 꼭 default를 넣어줘야 한다.
     return state
 }
}

```

### 4.스토어(Store)<br/><br/>

스토어에는 상태가 들어있다. 하나의 프로젝트는 하나의 스토어만 가질 수 있다.

```
const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));

```

### 5.디스패치(Dispatch)<br/><br/>

스토어의 내장 함수 중 하나인 디스패치는 액션 객체를 넘겨줘서 상태를 업데이트 하는 유일한 방법이다. 이벤트 트리거라고 생각할 수 있다.

```
dispatch({type:INCREMENT})

```

### 6.구독(Subscribe)<br/><br/>

스토어의 내장 함수 중 하나인 구독은 리스너 함수를 파라미터로 넣어 호출하면 상태가 업데이트될 때마다 호출된다. 일종의 이벤트 리스너라고 볼 수 있다.

```
// 스토어 상태 구독 (상태가 바뀔때마다 상태를 출력함)
store.subscribe(() => console.log(store.getState()))

```






