function Person(name, age){
    this.name = name;
    this.age = age;
}

var capt = new Person('캡틴', 100);

class Person {
    constructor(name, age){
        console.log('클래스 생성');
        this.name = name;
        this.age = age;
    }
}

var jihoon = new Person('지훈', 42);
console.log(jihoon);


