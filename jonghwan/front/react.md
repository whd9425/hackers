# react


### next.js(typescript)

```js
/* AppLayout.tsx */

import React from 'react'; // next에서는 안써도 상관없음

/*
    typescript 문법 엄격함으로(tsconfig.json) 수정 "strict": true,
    React.ReactNode 는 PropTypes.node 와 마찬가지로 모든타입을 허용(ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;)
    children을 쓰지 않을수도 있으니 필수값으로 지정은 위험 AppLayout 컴포넌트 안에 자녀 객체가 없을시 오류남
*/

interface typeTest{
    children?: React.ReactChild  
}


const AppLayout = ({children}: typeTest) =>{
    return (
        <div>
            <div>공통메뉴</div>
            {children}
        </div>
    )

}

/*
      프로젝트가 커짐에 따라 타입 검사를 활용하면 많은 버그를(bug) 잡을 수 있다.  
      PropTypes 로 타입을 정하지 않아도 문법에서 오류는 나지않는다.
      다만 선언후 타입을 다르게 지정하면 컴파일 하는데 문제는 없지만 콘솔에서 오류노출 ex)PropTypes.number.isRequired     
*/

//  AppLayout.propTypes ={
//      children: PropTypes.node.isRequired,//기본적으로 node 및 element 를 가장 많이씀 element의 경우 자녀요소를 한번만 넣을수있음(아래글 참조)
//  }

export default AppLayout;

```


```js
/* index.tsx */

import AppLayout from '../component/AppLayout'

const Home = () =>{
    return(
        <AppLayout><div>Hello, Next;</div></AppLayout>
    )

}

export default Home

```




### 위 코드에서  React에 내장된 타입 검사 기능을 확인해보기

```js
import PropTypes from 'prop-types';

MyComponent.propTypes = {
  // prop가 특정 JS 형식임을 선언할 수 있습니다.
  // 이것들은 기본적으로 모두 선택 사항입니다.
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // 랜더링 될 수 있는 것들은 다음과 같습니다.
  // 숫자(numbers), 문자(strings), 엘리먼트(elements), 또는 이러한 타입들(types)을 포함하고 있는 배열(array) (혹은 배열의 fragment)
  optionalNode: PropTypes.node,

  // React 엘리먼트.
  optionalElement: PropTypes.element,

  // React 엘리먼트 타입 (ie. MyComponent)
  optionalElementType: PropTypes.elementType,

  // prop가 클래스의 인스턴스임을 선언할 수 있습니다.
  // 이 경우 JavaScript의 instanceof 연산자를 사용합니다.
  optionalMessage: PropTypes.instanceOf(Message),

  // 열거형(enum)으로 처리하여 prop가 특정 값들로 제한되도록 할 수 있습니다.
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // 여러 종류중 하나의 종류가 될 수 있는 객체
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),

  // 특정 타입의 행렬
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // 특정 타입의 프로퍼티 값들을 갖는 객체
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // 특정 형태를 갖는 객체
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  // 추가 프로퍼티에 대한 경고가 있는 객체
  optionalObjectWithStrictShape: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number
  }),

  // 위에 있는 것 모두 `isRequired`와 연결하여 prop가 제공되지 않았을 때
  // 경고가 보이도록 할 수 있습니다.
  requiredFunc: PropTypes.func.isRequired,

  // 모든 데이터 타입이 가능한 필수값
  requiredAny: PropTypes.any.isRequired,

  // 사용자 정의 유효성 검사기를 지정할 수도 있습니다.
  // 검사 실패 시에는 에러(Error) 객체를 반환해야 합니다.
  // `oneOfType`안에서는 작동하지 않으므로 `console.warn` 혹은 throw 하지 마세요.
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },

  // `arrayOf` 와 `objectOf 에 사용자 정의 유효성 검사기를 적용할 수 있습니다.
  // 검사 실패 시에는 에러(Error) 객체를 반환해야 합니다.
  // 유효성 검사기는 배열(array) 혹은 객체의 각 키(key)에 대하여 호출될 것입니다.
  // 유효성 검사기의 첫 두 개의 변수는 배열 혹은 객체 자신과 현재 아이템의 키입니다.

  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
};

```

