interface User {
    age: number;
    name: string;
}

//변수에 인터페이스 활용
var seho: User = {
    age: 33,
    name: '세호'
}

//함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}
const capt = {
    age: 15,
    name: '캡틴'
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10;

// 딕셔너리 패턴(인덱스와 유사)
interface StringRegexDictionary {
    [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}
// obj['cssFile'] = 'a' 에러

Object.keys(obj).forEach(function (value) {
    
})

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person { //확장(=상속) 받음(Person의 name,age 가져옴)
    language: string;
}

var captain: Developer = {
  // language: string; 이것만쓰면 오류남. 확장받은것까지 다 써줘야함
    language: 'ts',
    name: '캡틴',
    age: 100
};