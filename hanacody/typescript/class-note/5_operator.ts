// function logMessage(value : string) {
//   console.log(value);
// }
// function logMessage(value : number) {
//   console.log(value);
// }
// function logMessage(value : any) {
//   console.log(value);
// }
//유니온 타입 변수 선언
var seho : string | number | boolean;  
// # Union 타입 문법 - `any` 보다는 명시적임
// function logMessage(value : string | number) {
//   console.log(value);
// }

function logMessage(value : string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number')
}

// # Intersection 타입 문법
interface Developer {
  name : string;
  skill : string;
}

interface Person {
  name : string;
  age : number;
}

function askSomeone(someone : Developer | Person) {
  someone.name; 
  someone.age; 
  someone.skill
}

// function askSomeone(someone : Developer & Person) {
//   someone.name; 
//   someone.age; 
//   someone.skill
// }

askSomeone({name : '이지훈', skill : 'web', age : 34});

