// 인터페이스
interface User {
  age : number;
  name : string;
}

// 변수에 사용하는 경우
const seho : User = { 
  age : 33,
  name : '세호'
};

// 함수의 인자에 사용하는 경우
function getUser(user : User) {
  console.log(user);
}
getUser(seho);

// 함수의 스펙(구조)에 사용하는 경우
interface SumFunction {
  (a : number, b : number) : number;
}
let sum : SumFunction;
sum = function (a, b) {
  return a + b;
};

// 배열의 인덱싱에 사용하는 경우
interface StringArray {
  [index : number] : string;
}
let arr : StringArray = ['a', 'b', 'c'];
arr[0] = 'hi';
//arr[1] = 10;

//딕셔너리 패턴
interface StringRegexDictionary {
  [key : string] : RegExp
}

var obj : StringRegexDictionary = {
  //sth : /abc/,
  cssFile : /\.css$/,
  jsFile : /\.js$/,
  phpFile : /\.php$/,
}

Object.keys(obj).forEach(val => {
  console.log(val)
});



interface Person {
  name : string;
  age : number; 
}

// 인터페이스 상속
interface Developer extends Person {
  language : string;
}

const captain : Developer = { 
  name: 'capt', 
  age: 100, 
  language: 'ts' 
};
