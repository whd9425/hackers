// JS 문자열 선언
// const str = 'hello';

// TS 문자열 선언
const str: string = "hello";

// JS 배열 선언
// const arr = [1,2,3];

// TS 배열 선언
const arr: Array<number> = [1, 2, 3];
const items: number[] = [1, 2, 3];

const heroes: Array<string> = ["Capt", "Thor", 10]; //숫자라서 에러 (ESLint, TSLint가 설치되어있어야하는 이유)

// ===========================================================

// TS 튜플(배열의 특정 순서(인덱스)에서 타입을 정하는것)
const address: [string, number] = ["gangnam", ["pangyo"]]; // 첫번째에는 문자를 넣고 두번째에는 숫자를 넣겠다. 그래서 오류

// TS 객체
const obj: object = {};
// const person: object = {
//     name: 'capt',
//     age: 100
// };
const person: { name: string; age: number } = {
  name: "캡틴",
  age: 22,
};

// TS 진위값
let show: boolean = true;
