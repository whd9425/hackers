// ============= 예제
interface Employee {
    name: string;
    extensionNumber: number;
    age: number | string; // 유니온타입(또는)
}

interface Pro extends Employee { // 상속
    position: string;
}

var ay: Pro = {
    name: '아영',
    extensionNumber: 1234,
    age: 100, // 또는 '백'
    position: '프로',
}

console.log(ay); // { name: '아영', extensionNumber: 1234, age: 100, position: '프로' }



// ============= 질문
/*

1.
var obj: StringRegexDictionary = {
    sth: /abc/, // 정규식 리터럴? 어떨때 사용되나요?
    cssFile: /\.css$/, // \:이스케이프 문자(문자열로 취급 안함)
    jsFile: /\.js$/, // 파일을 불러올때만 \를 쓰는지
}

2.
interface StringRegexDictionary {
    [key: string]: RegExp; // RegExp가 무슨뜻인가요?
}

*/