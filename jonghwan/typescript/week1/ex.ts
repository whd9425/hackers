/*interfac / type */

interface GenericInterface {  //인터페이스가 안에 타입을 넣는건 가능 반대는x
    [x: string]: number;
    }
type NormalType = { x: number };
const normalType: NormalType = { x: 1 };
const genericInterface: GenericInterface = normalType; 



    
/*테스트 파일*/ 
    
class SingleTypeChecker {
    constructor() { }
    typeCheck(value: string): void {
    	console.log(`${typeof value} : ${value}`);
    }
}
const singleTypeChecker = new SingleTypeChecker();
singleTypeChecker.typeCheck("test"); // string : test


class UnionTypeChecker extends SingleTypeChecker {
    constructor() { super(); }//상속할게 없어도 super넣어야 타입에러 x
    
    //typeCheck(value: number): void; 없어도 밑에 any 속성에서 if로 필터        
    //typeCheck(value: string): void;
    //typeCheck2(value: number | string | boolean): void { //유니온을 사용하여 
    typeCheck2(value: any): void {
    	if (typeof value === "number") { //타입에 따라 기능을 바꿀수있다
        	console.log("숫자 : ", value);
        } else if (typeof value === "string") { 
        	console.log("문자열 : ", value);
        } else {
        	console.log("기타 : ", value);
        }
    }
}

const unionTypeChecker = new UnionTypeChecker();

unionTypeChecker.typeCheck2(123); // 숫자 : 123
unionTypeChecker.typeCheck2("happy"); // 문자열 : happy
unionTypeChecker.typeCheck2(false);  //기타 : false
unionTypeChecker.typeCheck2("happy1234");//문자열 : happy1234



interface StringArray {
[index: number]: string; // number로 보내면 string을 반환한다
}

let myArray: StringArray;
myArray = ['BOB', 'FRED'];

let myStr = myArray[1];
console.log(myStr);


interface person{
    name: string;
    age: number;
    readonly test5: number; //처음생성될때만 수정가능 이후에 수정불가능
    test3?: number; //해당타입이 있거나 없거나
    sayHi: () => string; //내부적으로 함수를 method 형태로 만들어 사용할 수도 있다.
    
}

const test: person ={
    name:"홍길동",
    age: 20, 
    sayHi: ():string => "hello",
    test5: 5
}
console.log(test.sayHi());