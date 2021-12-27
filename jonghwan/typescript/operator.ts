function LogMessage1(value: any){
    console.log(value);

}

LogMessage1('hello');
LogMessage1(100);//숫자라서 안됨


var seho3: string | number | boolean;

function logMessage2(value: string | number ){
    if(typeof value === 'number'){
        value.toLocaleString();
    }
    if(typeof value === 'string'){
        value.toString();
    }

    throw new TypeError('에러발생');
}
logMessage2('hello');
logMessage2(100);

interface Developer3{
    name:string;
    skill:string;
}

interface person11{
    name:string;
    age:number;
}

function askSomeone1(someon: Developer3 | person11){ //타입 양쪽둘다 만족해야함
    // someon.name;
    // someon.skill;
    // someon.age;

}
askSomeone1({name:'디벨로퍼',skill:'웹개발'});
askSomeone1({name:'디벨로퍼2',age:100});

function askSomeone2(someon: Developer3 & person11){ //타입 양쪽둘다 만족해야함
    someon.name;
    someon.skill;
    someon.age;

}
