function logText<t>(text : t) : t {
    console.log(text);
    return text
}

const tex = logText<string>('하이');
const login = logText<boolean>(true);

interface Dropdown<T> {
    value : T;
    selected : boolean;
}


const obj : Dropdown<string> = {value : 'abc', selected : false};

// //제네릭의 타입제한
// function logTextLength<T>(text : T[]) : T[]{
//     console.log(text.length);
//     return text;
// }

//logTextLength<string>('hi');

interface LengthType {
    length : number;
}

function logTextLength<T extends LengthType>(text : T) : T {
    text.length;
    return text;
}

logTextLength('a');
logTextLength(10);

interface shoppingItem {
    name : string;
    price : number;
    stock : number;
}
function getShoppingItemOption<T extends keyof shoppingItem>(itemOption : T) : T {
    return itemOption
}

getShoppingItemOption('name');
getShoppingItemOption("stock");