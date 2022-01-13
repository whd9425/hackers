# 타입스크립트 활용법

### 타입스크립트에서 배열과 객체를 인덱싱 하는 방법
타입스크립트에서 배열요소와 객체속성 접근할시, **인터페이스**를 사용한다.
<br/>
#### <기존 js 배열요소 접근>
```js
//.js
const arr = ['Thor', 'Hulk'];
const arr2 = {
  Thor: "토르",
  Hulk: "헐크",
}
arr2[arr[0]]; // '토르'
```
타입스크립트에서는 위와 같은 방법으로 접근시 에러가 발생한다.

```js
//.ts
const arr = ["Thor", "Hulk"];
const arr2 = {
  Thor: "토르",
  Hulk: "헐크",
};

arr2[arr[0]];  //Element implicitly has an 'any' type because expression of type 'string' can't be used to index type ...

//arr.map((val) => arr2[val]);
```

따라서 인터페이스로 해당 객체에 인덱싱할 타입을 정의해주어야 접근 가능하다.
```js
interface ObjIndex {
  [key: string]: string // 객체의 키 타입은 문자열이고, 이 인덱스로 특정 요소를 접근했을 때 해당 요소의 타입은 string 이라는 것을 명시.
}

const arr = ["Thor", "Hulk"];
const arr2: ObjIndex = {
  Thor: "토르",
  Hulk: "헐크",
};

arr2[arr[0]];  // Error가 발생하지 않는다.
```
<br/>

# 맵드 타입(Mapped Type)
맵드 타입이란 기존에 정의되어 있는 타입을 새로운 타입으로 변환해 주는 문법을 의미한다.  
자바스크립트 map() API 함수를 타입에 적용한 것과 같은 효과이다.

### 맵드타입의 기본 문법
```js
{ [ P in K ] : T }
{ [ P in K ] ? : T }
{ readonly [ P in K ] : T }
{ readonly [ P in K ] ? : T }
```
<br/>

### 맵드타입 실용 예제
사용자 정보를 조회하고 업데이트하는 로직을 구현한다고 가정할때,  
조회 API는 아래와 같을 것이다.
```js
interface UserProfile {
  username: string;
  email: string;
  photoUrl: string;
}

function fetchProfile(): UserProfile {
  // 사용자 정보를 받아오는 로직
}
```
여기서 사용자 정보를 수정해야 할 경우, 인터페이스 재정의가 필요하다.
```js
interface UpdateUserProfile {
  username?: string;
  email?: string;
  photoUrl?: string;
}

function updateProfile(params: UpdateUserProfile) {
  // 
}
```
위와 같이 반복 정의를 막기 위해, 맵드타입을 활용할 수 있다.
```js
type UserProfileUpdate = {
  [K in keyof UserProfile]?: UserProfile[K]
}

//[K in UserProfile] 부분은 마치 자바스크립트의 for in 문법과 유사하게 동작한다.  
//앞에서 정의한 UserProfile 타입의 3개의 문자열을 각각 순회하여 UserProfile[K] 타입으로 변환해준다.
```


[참고 링크]
* 유틸리티 타입(읽어보기) https://joshua1988.github.io/ts/usage/utility.html
