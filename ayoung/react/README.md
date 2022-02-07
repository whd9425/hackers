# 정규표현식으로 문자열 자르기

```
/#/ - 첫번째 #만 선택됨
/#/g - #들이 모두 선택됨
/#./g - #과 #뒤의 한 글자
/#../g - #과 #뒤의 두 글자
/#.+/g - #과 #뒤의 모든글자
/#[태그]+/g - #과 #뒤로 오는 글자 중 태, 그
/#[^태그]+/g - #과 #뒤로 오는 글자 중 태, 그 제외 (공백에서 끊김 - #[^\s]+/g)
/#[^\s#]+/g - #과 #뒤로 오는 글자중 공백+# 에서 끊김
```

split 사용시

```
"문자열".split(/#[^\s#]+/g) (X)
"문자열".split(/(#[^\s#]+)/g) (O) <- 괄호 안에 한번 더
```

<a href="https://regexr.com/" target="_blank">테스트해 볼 수 있는 사이트</a>

### -------질문(해결)

1. 속성 자동완성되는거 엔터치면 일반 따옴표가 나올때도 있고 쌍따옴표가 나올때도 있는데 어떤걸 쓰는게 더 좋을까요? (자동완성 되어도 제로초님꺼 따라칠지) - 상관없음
2. error - ReferenceError: store is not defined <- 이 에러 나오신분 계신가여...? - 위에 선언안해줌
![image](https://user-images.githubusercontent.com/74534083/150827691-16798148-b421-41e9-b398-5db601dc0afc.png)



### 키값 안줘서 생긴 오류

![캡쳐2](https://user-images.githubusercontent.com/74534083/150826271-3225ad00-0bc8-4694-a085-3ea6d0616a05.png)

오류 메세지 떠서 AppLayout.js의 Menu.Item에 key 값을 전부 주었습니다.

<Menu.Item key="profile">
    <Link href="/profile"><a>프로필</a></Link>
</Menu.Item>


# Link

```
<Link href='/signup'><a><Button>회원가입</Button></a></Link>
```

페이지 새로고침 여부가 차이점이다.

- Link 태그 - 브라우저의 주소만 바꿀 뿐 페이지 자체를 새로고침하지는 않는다. 파일별 이동일 경우 주로 사용!
- a 태그 - 브라우저의 주소를 이동하며 페이지 자체를 새로고침한다. 외부 주소(ex.https://naver.com)인 경우 주로 사용!

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
- 
- 특정 props를 꼭 써야하는데 실수로 안썼을 경우에는 경고 메시지 발생시킴

![캡쳐](https://user-images.githubusercontent.com/74534083/150825662-1be81fe4-f09c-41c7-b48b-c8b712108ce3.png)

Btn안에 있는 prop인 text는 required라고 표시됐는데 값이 없다(undefind)

```
AppLayout.propTypes = {
    children: ProTypes.node.isRequired
};
```
