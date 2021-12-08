# Class

##### 동일한 속성 값을 지닌 여러개의 객체를 생성해야 할 때, 클래스(class)를 쓰면 OOP(객체 지향 프로그래밍)에서 사용되는 기능을 자바스크립트에서도 사용할 수 있다.
###### ps. 클래스가 붕어빵 틀이라면, 객체는 틀에서 찍어내는 붕어빵이라고 생각하면 이해하기 쉽다.


### 기본 문법

```js
class ClassName {
  constructor () { ... }
  method1 () { ... }
  method2 () { ... }
}
```

### 사용법
```js
class User {
  constructor (name) { 
    this.name = name;
  }
  
  hello () {
    alert('Hello World' + this.name);
  }
}

let user = new User('금붕어');
user.hello(); // Hello World 금붕어

```


### 클래스의 정의 ?
##### 클래스는 함수의 한 종류이다.

```js
class User {
  constructor(name) { this.name = name; }
  hello () { alert('Hello World' + this.name); }
}

alert(typeof User); // function
```

##### class User {...} 선언 시 실행되는 과정은 아래와 같다.

1. User라는 이름을 가진 함수를 만든다. 함수 본문은 생성자 메서드 constructor에서 가져오며,  
생성자 메서드가 없으면 본문이 비워진 채로 함수가 만들어지게 된다.
2. hello 같은 클래스 내에서 정의한 메서드를 User.prototype에 저장합니다.
3. new User를 호출해 객체를 만들고, 객체의 메서드를 호출하면 메서드를 프로토타입에서 가져온다. 

<br/><br/>

# 클래스 상속 (extends)
#### 클래스 상속을 이용하면 다른 클래스의 기능을 가져와 기존 클래스의 기능을 넓힐(extends) 수 있다.

### 기본 문법

```js
class Parent {
  constructor (name) {
    this.name = name;
  }
  
  sleep() {
    alert(`${this.name} 이/가 잠을 잔다`);
  }
}

class Child extends Parent {
  run() {
    alert(`${this.name} 이/가 뛴다`);
  }
}

let child = new Child('금붕어');
child.sleep();  // 금붕어 이/가 잠을 잔다
child.run();  // 금붕어 이/가 뛴다

// child는 Child와 Parent 메서드에 모두 접근 가능하다!
```

#### extends키워드는 :boom: Child.prototype.[[Prototype]]을 Parent.prototype으로 설정한다.:boom:
##### 때문에 Child.prototype에서 메서드를 찾지 못하면 Parent.prototype에서 메서드를 가져온다. 
<br/>
따라서, Child extends Parent는 두 개의 [[ProtoType]] 참조를 만들어낸다.

1. 함수 Child는 함수 Parent를 상속받는다.
2. Child.prototype은 Parent.prototype을 상속받는다.
 
<br/><br/>
### 메서드 오버라이딩 (overwriting)
##### 부모 클래스와 동일한 메서드명으로 자식 클래스에 메서드를 재정의 하는 것.
<br/><br/>
### 생성자 오버라이딩
클래스가 다른 클래스를 상속받은 후, 생성자(constructor)가 없는 경우 아래와 같은 '텅 빈'상태의 생성자가 만들어 진다.
```js
class Child extends Parent {
  constructor(){
    super();  // (*)
  }
}
```
**자식 클래스의 생성자는 this 키워드 사용 '이전에' 반드시 super(arg) 함수를 호출해주어야 한다. !**

### [[HomeObject]]

##### [[HomeObject]] 란?
- 함수 전용 특수 내부 프로퍼티
- super는 [[HomeObject]]를 통해 부모프로토타입과 메서드를 찾는다.
- 클래스이거나 객체 메서드인 함수의 [[HomeObject]] 프로퍼티는 해당 객체가 저장







