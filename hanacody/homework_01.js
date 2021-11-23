// 하루에 10개씩 수확  30일후 카운트 갯수
const fruit = [
    {
      name: '사과',
      count: 45,
      address: '수원'
    },
    {
      name: '포도',
      count: 60,
      address: '서울'
    },
    {
      name: '오렌지',
      count: 15,
      address: '대구'
    }
];

//의식적으로 Map을 써보자
const fruitTypeMap = new Map(Object.entries(fruit));
//console.log(fruitTypeMap.size);

const count_increment = 10;
const day_increment = (input) => { return input * 30; };
const fix_address = ['부산', '강원도', '제주도'];

fruitTypeMap.forEach((val, index) => {
    val._count = val.count + day_increment(count_increment);
    val._address = fix_address[index];
    //console.log(`${val.name} ${trans_count}개 ${fix_address[index]}에서 수확했습니다`);
    console.log(`${val.name} ${val._count}개 ${val._address}에서 수확했습니다`); //backtick 사용법
});
console.log(fruitTypeMap);
