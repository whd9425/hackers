# React Hooks
React는 컴포넌트가 실행되거나 업데이트되거나 제거될 때 특정 메서드를 호출한다.  
React Hooks는 함수형 컴포넌트에서 기존 클래스형 컴포넌트의 기능을 구현한 개념이다.

* 컴포넌트 구조 이미지 (https://black9p.github.io/images/reactjs/Component.png)

### React Hooks 등장하게 된 동기
> 기존 클래스형 컴포넌트에는 아래와 같은 단점들이 존재했다.
> 
> 1. 컴포넌트 사이에서 코드의 재사용성이 떨어진다.
> 2. 이해하기 어려운 복잡한 코드 구성
> 3. Class의 this의 사용이나 이벤트 핸들러의 등록 등 기본적인 JS 문법 사항을 알아야 다룰 수 있다.
> 
> 이러한 문제를 함수형 컴포넌트는 커버할 수 있으나, 클래스 컴포넌트의 장점인 상태관리나 라이프사이클을 직접 다루는 등의 기능을 사용하지 못한다.  
> 이를 해결하기 위해 Hook이 등장했다.


```js
// 클래스형 컴포넌트
import React, { Component } from 'react';

class App extends Component {
    render(){
        return (
            //jsx
        );
    }
}

export default App;


// 함수형 컴포넌트
import React from 'react';

function App(){ 
    return(
        //jsx
    );
}

export default App;
```
<br/>

### Hook 종류
1. useState() : 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해주며, 해당 함수의 인자에는 상태의 기본값이 들어간다.
2. useEffect() : 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있다.
3. useReducer() : useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해주고 싶을 때 사용한다.
4. useMemo() : 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있다.  
렌더링 하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고 만약에 원하는 값이 바뀐 것이 아니라면 이전에 연산했던 결과를 다시 사용하는 방식이다.
6. useCallback() : useMemo와 상당히 비슷한 함수이다. 주로 함수 캐싱이 필요한 경우 사용한다.
7. useRef() : 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 한다.

<br/>

### Hook의 규칙
오직 React 함수 최상위에서만 호출해야한다.  
반복문, 조건문 혹은 중첩된 함수 내에서 Hook을 호출하면 안된다. 

### 코드 기본문법
```js
// useState
const [name, setName] = useState(''); // name: 변수명 / setName: 변수값을 바꿔줄 set함수 / useState 함수 안의 ''은 초깃값.

// useEffect
useEffect(() => {
  //  함수내용
},[]);  //의존성 배열

// useMemo
const avg = useMemo(() => getAverage(list), [list]);  // 연산된 값 저장

// useCallback
const print = useCallback(() => {
  console.log('hello world!');
}, []);

// 아래 useMemo, useCallback는 같은 내용의 코드이다.

useCallback(() => {
  console.log('hello world!');
}, [])

useMemo(() => {
  const fn = () => {
    console.log('hello world!');
  };
  return fn;
}, []);

```
[참고링크]
* 리액트 훅 공식문서 (https://ko.reactjs.org/docs/hooks-intro.html)
* 리액트 훅 정복하기 (https://velog.io/@velopert/react-hooks)
* Hooks 라이프사이클 이미지 (https://media.vlpt.us/images/denmark-choco/post/45c244b4-0e73-4662-b4ac-d10bebab15eb/cc006f00-a420-11e9-99a6-d0bdf5f0c7bb.png)
