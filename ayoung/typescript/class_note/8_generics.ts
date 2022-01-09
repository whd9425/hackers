// function logText(text) {
//     console.log(text);
//     return text;
// }

// 타입을 명시해주지 않았기 때문에 다 받음
// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true

// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }
// logText<string>('하이');

// 동일한 코드를 타입을 다르게 받기 위해서 또 씀
// function logText(text: string) {
//     console.log(text);
//     // text.split('').reverse().join(''); //문자열
//     return text;
// }

// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }

// logText('하이');
// logNumber(10);

// 유니온 타입으로 지정했을때의 문제점
// function logText(text: string | number) {
//     console.log(text);
//   return text;
// }

// const a = logText('a'); // 문자를 넣었어도 const a = string | number
// a.split('') // string | number에 안되고 number에만 할 수 있음
// logText(10);



// 제네릭 : 타입을 미리 정해놓지 않고 비워놓은 상태에서 호출하는 시점에 정의하는것
function logText<T>(text: T): T {
    console.log(text);
  return text;
}

const str = logText<string>('abc')
str.split('')
const login = logText<boolean>(true);

// logText('a')
// logText(10)


// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown{
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = { value: 'abc', selected: false };

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = { value: 'abc', selected: false };

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(function (text) {
//     console.log(text);
//   });
//   return text;
// }
// logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
// function logTextLength<T>(text: T): T {
//   text.length; // text가 문자인지 모르기 때문에 오류남. 위에 extends LengthType 적어줘야함
//   return text;
// }

function logTextLength<T extends LengthType>(text: T): T {
  text.length; // 오류남. 위에 extends LengthType 적어줘야함
  return text;
}
// logTextLength(10); //오류
logTextLength({ length: 10 });
// logTextLength('a');
// 'a'.length

// 제네릭 타입 제한 2 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// 셋 중 하나만 받기 (키 값 하나만 받기)
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name');