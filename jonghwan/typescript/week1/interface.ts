interface User{
    age: number;
    name: string;
}

//변수에 인터페이스 활용
var seho1: User ={
    age:33,
    name:'세호'
}

//함수에 인터페이스 활용
function getUser1(user: User){
    console.log(user);
}

const capt1 ={ 
    name: '캡틴',
    age:100    

}

getUser1(capt1)

// 함수의 스펙(구조)에 인터페이스를 활용

interface SumFunction{
    (a: number,b:number): number

}

var sum1: SumFunction;
sum1 = function(a: number,b: number):number {
    return a+b;

}

interface StringArry{
    [index:number]: string;
}

var arr1: StringArry =['a','b','c'];
//arr[0] = 10;


//딕셔너리 패턴
interface StringRegex{
    [key: string] : RegExp;
}

var obj1:StringRegex ={
    //sth: /abc/,
    cssFile: /\.css$/,
}



Object.keys(obj1).forEach(function(value){//강의 후반부에 배움


})

//인터페이스 확장

interface Person1{
    name: string;
    age:number;
}

interface Developer1 extends Person1{
    language: string;
}

var capt2: Developer1 ={
    language: 'ts',
    age: 100,
    name: '캡틴'
}