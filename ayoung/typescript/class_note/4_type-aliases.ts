// interface Person {
//   name: string;
//   age: number;
// }

type Person = { // type은 확장(extends)이 되지않음. 그러니 interface 사용
  name: string;
  age: number;
};

var seho: Person = {
    name: '세호',
    age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean; };
function getTodo(todo: Todo) {

}