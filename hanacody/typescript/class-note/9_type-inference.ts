//타입추론 기본1
var a = 10;

function getB(b = 10) {
    var c = 'hi';
    return b + c;
}

//타입추론 기본2
interface Dropdown<T> {
    value : T;
    title : string;
}

var shoppingItem : Dropdown<string> = {
    value : 'abc',
    title : 'hello'
}

//타입추론 기본3
interface Dropdown2<T> {
    value : T;
    title : string;
}

interface DetailedDropdown<T> extends Dropdown2<T> {
    description : string,
    tag : T;
}

var detailedItem : DetailedDropdown<string> = {
    title : 'abc',
    description : 'ab',
    value : 'aaaa',
    tag : 'aada'
}

var arr = [1,2,true, true]