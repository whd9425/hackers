// var seho: string | number | boolean; // 이거나 (OR) 유니온 타입
// var capt: string & number & boolean; // 이면서 (AND) 인터섹션 타입 // 이렇게 될 수 없음


// function logMessage(value: any) { // any를 쓰게되면 빨간줄은 없어지지만 타입스크립트만의 장점이 없어지는것과 같음
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);
// logMessage(false);

var seho: string | number | boolean; // string 이거나 number 이거나 (OR)
function logMessage(value: string | number) { // 유니온타입 (하나 이상의 타입을 쓸 수 있음)
    if (typeof value === 'number') {
        value.toLocaleString();
    } // number가 맞다고 하면 number에 대한 api나 속성들을 사용할 수 있게 .누르면 관련된거 다 뜸
    if (typeof === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// function askSomeOne(someone: Developer | Person) { // name이라는 공통 속성만 적용됨(보장된 속성에 대해서만 적용됨)
    // someone.name;
    // someone.age;
    // someone.skill;
// }
// askSomeOne({ name: '디벨로퍼', skill: '웹 개발' }); // Developer
// askSomeOne({ name: '캡틴', age: 100 }); // Person


function askSomeOne(someone: Developer & Person) { // 인터섹션 타입
    someone.name;
    someone.age;
    someone.skill;
}
askSomeOne({ name: '디벨로퍼', skill: '웹 개발', age: 34 }); // Developer
// askSomeOne({ name: '캡틴', age: 100 }); // Person
