interface Developer {
    name : string;
    skill : string;
}

interface Person {
    name :string
}

var developer : Developer;
var person : Person;

//타입호환
developer = person;
person = developer;


var add = function(a : number){
    console.log(a)
}

var sum = function(a : number, b : number){
    a+b;
}

sum = add;
//add = sum;

interface Empty<T> {
    //...
}
var empty1 : Empty<string>;
var empty2 : Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data : T;
}

var notempty1 : NotEmpty<string>;
var notempty2 : NotEmpty<number>;

notempty1 = notempty2;
notempty2 = notempty1;