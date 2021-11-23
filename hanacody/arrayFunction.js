//[javascript array method]
//forEach, map, filter, every/some, reduce/reduceRight, indexOf, sort, find, findIndex, includes

//0.배열기초
//for, for-in(key), for-of(value)

// let sampleObj = {
//     a : 1,
//     b : 'hello',
//     c : [1, 2]
// }

// for (let key in sampleObj) {
//     console.log(key);
//     console.log(sampleObj[key]);
// }

// let sampleArr = [1, 2, 3, 4, 5];
// for (let value of sampleArr) {
//     console.log(value);
// }

//1. forEach (배열순회 리턴이 없음)
// map, forEach 둘 다 배열을 순회하며 인자로 전달한 원소의 값을 가지고 함수 로직을 구현한다 
// 배열을 순회하며 해당배열을 조작할때 쓰임(원데이터를 커스터마이징)
// jquery each 와 동일

const data = [1,2,3,4,5,null,4,3,2,1];
let result = []; 

//data.forEach(x => {result.push(x+3)});
//data.forEach((value, index) => { result[index] = value + 3; });
//data.forEach((value, index) => { data[index] = value + 3; }); //물론 side effect 있음(원래데이터 수정)
data.forEach((value, index, array) => { 
    //if(value > 4) break;
    if(value != 4) result.push( value + 3 ); 
});
console.log('result', result);


//2. map (배열순회 리턴이 있음)
//새로운(수정된) 배열(원래 배열과 길이가 똑같은)을 return 받고자 한다면  == 기존배열은 건드리지 않음
const result2 = data.map(x => {
    //return x+3;
    if(x % 2) return '홀';
    return '짝';
});
console.log('result2', result2);



//3. filter <> reject(배열순회 리턴이 있음)
//메서드를 호출한 원래 배열을 변화시키지 않음
//조건을 만족하는 커스터마이징 배열(객체)를 리턴
const result3 = data.filter(val => { return val % 2 == 0 });
console.log('result3', result3);


//4. some(한개이상만족), every (다만족)
//배열을 순회하면 조건여부를 따짐
//return  true or false
//해당 배열들은 특이하게 순회도중 false 를 리턴(break) 할수 있음 == 전부순회하지 않는다
const result4 = data.every(val => { return val % 2 != 0 });
console.log('result4', result4); //false
const result5 = data.some(val => { return val % 2 != 0 });
console.log('result5', result5); //true
console.log('====================',"이렇게도 로그를 찍을수 있네?",'====================');


//5. reduce 
//가장좋은듯, 활용가치가 높음? 
//배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);

//1)basic
const result6 = data.reduce((acc, cur, index, array) => {
    //console.log(acc, cur, index);
    return acc + cur;
},0);
console.log('result6', result6); 
console.log(data);

//2)map
const result7 = data.reduce((acc, cur) => {
    acc.push(cur % 2 ? '홀수' : '짝수');
    return acc;
}, []);
console.log('result7', result7); 

//3)(filter + map)
//const result8 = data.filter(x => x % 2 != 0).map(x => x * 2);
const result8 = data.reduce((acc, cur) => {
    if (cur % 2) acc.push(cur*2);
    return acc;
}, []);
console.log('result8', result8); 


//3)(includes + map) //중복제거
    //3-1)Set
        //const result9 = [...new Set(data)]; //객체를 배열로 리턴(전개연산자)
    //3-2)indexOf
        // const result9 = data.filter((val, index) => {
        //     return data.indexOf(val) === index;
        // });
    //3-3)include+forEach
    const result9 = [];
    data.forEach(val => {
        if(!result9.includes(val)) result9.push(val);
    });
    //3-4)includes+reduce
        // const result9 = data.reduce((acc, cur) => {
        //     if(acc.includes(cur)) return acc;
        //     acc.push(cur);
        //     return acc;
        // }, []);
console.log('result9', result9); 

console.log('====================',"[찐 reduce 활용]",'====================');


const increment = (input) => { return input + 1; };
const decrement = (input) => { return input - 1; };
const double = (input) => { return input * 2; };
const halve = (input) => { return input / 2 };
// 1. 일반적일 수 있는 로직
const initial_value = 1;
const incremented_value = increment(initial_value);
const doubled_value = double(incremented_value);
const final_value = decrement(doubled_value);
console.log(final_value); // 3

// 2. reduce 를 활용한 함수형 프로그래밍
const calculator = [
  increment,
  double,
  decrement,
  decrement,
  decrement,
  halve,
  double,
];
const final_value2 = calculator.reduce((acc, cur) => {
  return cur(acc);
}, initial_value);
console.log(final_value2); // 1