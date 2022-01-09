class OfficeSupplies { // 사무용품
  name: string;
  needs: number;
  price: number;

  constructor(name: string, needs: number, price: number) {
    this.name = name;
    this.needs = needs;
    this.price = price;
  }
}

const keyboard = new OfficeSupplies('키보드', 4, 20000);
const mouse = new OfficeSupplies('마우스', 8, 10000);
const ruler = new OfficeSupplies('자', 20, 1000);

function generateObj<T>(obj: T): T {
  return obj;
}

function totalPrice(name: string, needs: number, price: number) {
  console.log(`${name}의 총 가격은 ${needs * price}원 입니다.`);
}

let objName = generateObj<string>(keyboard.name);
let objNeeds = generateObj<number>(keyboard.needs);
let objPrice = generateObj<number>(keyboard.price);

totalPrice(objName, objNeeds, objPrice);