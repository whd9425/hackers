# Promise

##### 프로미스는 자바스크립트 비동기 처리에 사용되는 객체이다.
##### 원격에서 스크립트를 불러오는 등 시간이 소요되는 작업 등을 순서대로 처리할 수 있도록 해주는 역할을 한다.

### 프로미스 적용 예시
```js
// 기존 코드
function load(callback) {
  $.get('url', response => {
    setTimeout(() => callback(), 1000);
  });
}

ajaxLoad(data => console.log(data));


// Promise 객체 사용
function load(callback) {
  return new Promise((resolve, reject) => { //new Promise() 안에 전달되는 함수를 executor (실행자, 실행함수)라고 부른다
    setTimeout(() => resolve(callback), 1000);
  });
} 

ajaxLoad().then(data => console.log(data)); // then() 
```
<br/>

### 프로미스의 3가지 상태 

Pending(대기), Fulfilled(이행), Rejected(실패) 총 세가지이며, 실행결과에 따른 상태값은 아래와 같다.

```js 
new Promise()   // Pending(대기)

new Promise((resolve, reject) => {
  resolve();  // Fulfilled(이행)
}).then(response => console.log(response)); // 이행 상태시 then() 메서드로 처리결과 값을 전달받을 수 있다.

new Promise((resolve, reject) => {
  reject();  // Rejected(실패)  // 실패 상태시 catch() 메서드로 실패처리의 결과 값을 전달받을 수 있다.
});
```
<br/>

프로미스는 성공 or 실패만 하게 된다.
#### 즉, executor는 resolve나 reject 둘 중 하나를 '반드시' 호출해야 한다.

<br/>

#### then, catch, finally
* .then() : result(이행), error(실패) 두가지 결과값 모두 받을 수 있으며, 보통 resolve시 결과값을 받는 용도로 사용한다.
* .catch() : 에러 핸들링시 사용되는 메서드. .catch는 .then에 null을 전달하는 것과 동일하게 작동한다.
* .finally() : 프로미스 처리시 이행, 실패상태에 관계없이 항상 실행되는 메서드.

### 프로미스 체이닝
프로미스의 또 다른 특징은 여러 개의 프로미스를 체이닝(Chaining)해 사용할 수 있는 점이다.
이는 then()메서드 호출시 새로운 Promise 객체가 반환되기 대문에 가능하다.

```js
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000); 
})
.then(function(result) { return result * 2})
.then(function(result) { return result * 2})
.catch(err => alert(err)); 
```

<br/><br/>
# async & await
async와 await는 기존의 프로미스 및 제너레이터의 단점을 보완하고 좀 더 편리하게 사용할 수 있는
자바스크립트 비동기 처리 패턴 중 가장 최근에 나온 문법이다.

### 사용문법
```js
async function f() {
  let promise = new Promise((resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  });
  
  let result = await promise; // 1초 후 결과값이 반환됨.
}
```

<br/>

#### async
- async 키워드는 function 앞에 위치한다.
- function 앞에 async를 붙이면 해당 함수는 프로미스를 반환한다.
- 반환값이 프로미스가 아니더라도 resolve 이행값으로 감싸 반환한다.

#### await
- await은 async 함수 안에서만 동작한다.(일반 함수에서는 사용할 수 없다.)
- await 키워드 사용시 프로미스가 처리될 때까지 기다린 후 결과를 반환한다.
- then()보다 가독성이 좋고 사용하기가 쉬운 장점이 있다.

<br/>

### 에러 핸들링

```js
async function f() {
  await Promise.reject(new Error('에러 발생!'));  // throw 문을 작성한 것처럼 에러가 던져진다.
}
```

await가 던진 에러는 try..catch / catch()을(를) 통해 잡을 수 있다.

```js
// try..catch
async function f() {
  try{
    let err = await Promise.reject(new Error('에러 발생!'));
  } catch(e) {
    alert(e);
  }
}

//catch()
async function f() {
  let err = await Promise.reject(new Error('에러 발생!'));  // throw 문을 작성한 것처럼 에러가 던져진다.
}

f().catch(alert); // Error : 에러 발생!

```
async/await 사용시 await가 대기를 처리해주기 때문에 .then이 거의 필요하지 않다.  
.catch()대신 try..catch문을 사용하는 것도 장점이다.

<br/>

##### 다수의 프로미스를 한번에 처리 & 대기해야할 땐 Promise.all([]) <- 와 async/await을 함께 사용할 수 있다.
