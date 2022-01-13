interface Developer {
    name : string;
    skill : string;
}

interface Person {
    name : string;
    age : number;
}

//유니온타입의 함정(공통만 접급가능)
function introduce() : Developer | Person {
    return {name : 'Tony', age : 33, skill : 'php'}
}

var jihoon = introduce();
console.log(jihoon.name);

//타입단언활용
var skill = (jihoon as Developer).skill;

//타입가드
function idDeveloper(target : Developer | Person) : target is Developer {
    return (target as Developer).skill !== undefined;
}