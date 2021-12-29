//함수 인자에 type 적용
type SumParameter = number;

function sum(a : SumParameter, b : SumParameter) {
  return a + b;
}

//함수에 type 적용
type Person = {
  name : string;
  age : number;
};

function getPerson() : Person {
  // ...
}

// 
type Hero = {
  skill : string;
}

const capt : Hero = { 
   skill : 'throwing a shield' 
}