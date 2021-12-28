// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//     return a + b;
// }
// sum(10, 20);

// 함수의 반환값에 타입을 정의하는 방식
function add(): number {
  return 10; // 주석처리 할 시 반환을 안해서 에러남
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 20, 30, 40, 50); // 2개의 인수가 필요한데 5개를 가져왔습니다. <= 라고 오류뜸

// js는 오류 뜨지 않고 10, 20만 더하고 30, 40, 50은 무시함(차이점)
// 매개변수 = 파라미터

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {
  //무조건 정해진 갯수를 넣지 않아도 될때는 파라미터 옆에 ?물음표 를 붙여주면 오류 뜨지 않는다.
}
log("hello world"); //?가 없으면 오류 뜸 (2개 넣어야되는데 1개 넣어서)
log("hello ts", "123");