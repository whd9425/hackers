# Link

```
<Link href='/signup'><a><Button>회원가입</Button></a></Link>
```

페이지 새로고침 여부가 차이점이다.

- Link 태그 - 브라우저의 주소만 바꿀 뿐 페이지 자체를 새로고침하지는 않는다.
- a 태그 - 브라우저의 주소를 이동하며 페이지 자체를 새로고침한다. 

페이지가 새로고침될 경우,<br/>
현재 렌더링되어 있는 컴포넌트가 모두 사라지고 새로 컴포넌트가 렌더링되게 되어<br/>
컴포넌트에 설정되어 있는 state 등이 모두 날아가기 때문에 필요한 정보를 제대로 표시할 수 없다.

따라서, 새로고침이 필요한 경우가 아니라면 Link 태그를 사용하는 것이 좋다.

# props

- properties의 약자
- 특정 컴포넌트의 속성을 지정할 때 사용
- 특정 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있음

```
<Box num="1" />
<Box num="2" />
```

```
<div className="box">
    Box{props.num}
</div>
```

# PropTypes

타입스크립트가 아닌 자바스크립트를 사용하기 때문에 타입 검사

## 기본적으로 제공되는 타입

```
MyComponent.propTypes = {

  children: ProTypes.node,
  // 컴포넌트 함수가 반환할 수 있는 모든 것

  menu: PropTypes.element,
  // 리액트 요소
  
  message: PropTypes.instanceOf(Message),
  // Message 클래스로 생성된 모든 객체
  
  name: PropTypes.oneOf(["jake", "olivia"]),
  // 배열에 포함된 값 중에서 하나를 만족

  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  // 배열에 포함된 타입 중에서 하나를 만족

  ages: PropTypes.arrayOf(PropTypes.number),
  // 특정 타입만 포함하는 배열

  info: PropTypes.shape({
    color: PropTypes.string,
    weight: PropTypes.number
  })
  // 객체의 속성값 타입을 정의

  infos: PropTypes.objectOf(PropTypes.number)
  // 객체에서 모든 속성값의 타입이 같은 경우

}
```

## isRequired를 사용하여 필수 propTypes 설정

- propTypes를 지정하지 않았을 때 경고 메시지 발생시킴

- propTypes를 지정할 때 뒤에 isRequired를 붙임

```
AppLayout.propTypes = {
    children: ProTypes.node.isRequired
};
```