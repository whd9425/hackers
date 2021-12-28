interface Todo {
  id: number;
  title: string;
  done: boolean;
}

let todoItems: Todo[]; // { id: number; title: string; done: boolean; }

// api
function fetchTodoItems(): Todo[] {
  //서버에 있는걸 가져온다는 뜻의 단어 fetch
  const todos = [
    { id: 1, title: "안녕", done: false },
    { id: 2, title: "타입", done: false },
    { id: 3, title: "스크립트", done: false },
  ];
  return todos;
}

// crud methods (crud: methods creat,read,update,delete 데이터조작 = 회원정보 관리 등)
function fetchTodos(): object[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void { //index는 배열의 index이기 때문에 number
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): object[] {
  return todoItems.filter(item => item.done);
  // return todoItems.filter(function (item) {
  //   if (item.done) {
  //     return item;
  //   }
  // });
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 = {
    id: 4,
    title: '아이템 4',
    done: false,
  }
  addTodo(item1);
  addTodo({
    id: 5,
    title: '아이템 5',
    done: false,  
  });
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
