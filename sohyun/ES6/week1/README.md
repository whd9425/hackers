# week1

```js
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
```

### 일반적인 방법
```js
const day = 10;
const month = 30;
const changeAddress = (val) => {
  if(val === '수원') return '부산';
  else if(val === '서울') return '강원도';
  else if(val === '대구') return '제주도';
  else return val;
};

fruit.forEach((val) => {
  const sum = (day * month) + val.count;
  console.log(`${val.name} ${sum}개 ${changeAddress(val.address)}에서 수확했습니다.`);
});
```


### Symbol

```js
const day = Symbol.for('10');
const month = Symbol.for('30');
const changeAddress = (val) => {
  if(val === '수원') return '부산';
  else if(val === '서울') return '강원도';
  else if(val === '대구') return '제주도';
  else return val;
};

fruit.forEach((val) => {
    const sum = Number(Symbol.keyFor(day)) * Number(Symbol.keyFor(month)) + val.count;
    console.log(`${val.name} ${sum}개 ${changeAddress(val.address)}에서 수확했습니다.`);
});
```

### Set 
```js
const date = new Set();
date.add(10);
date.add(30);

const changeAddress = (val) => {
  if(val === '수원') return '부산';
  else if(val === '서울') return '강원도';
  else if(val === '대구') return '제주도';
  else return val;
};

fruit.forEach((val) => {
  const sum = (Array.from(date).reduce((a, b) => a * b)) + val.count;
  console.log(`${val.name} ${sum}개 ${changeAddress(val.address)}에서 수확했습니다.`);
});
```

### Map
```js
const date = new Map();
date.set('day', 10);
date.set('month', 30);

const changeAddress = (val) => {
  if(val === '수원') return '부산';
  else if(val === '서울') return '강원도';
  else if(val === '대구') return '제주도';
  else return val;
};

fruit.forEach((val) => {
  const sum = (date.get('day') * date.get('month')) + val.count;
  console.log(`${val.name} ${sum}개 ${changeAddress(val.address)}에서 수확했습니다.`);
});
```