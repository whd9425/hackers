# 타입스크립트 3주차

---

## Ⅰ. 저번주에 궁금했던 사항들

### 1. `?`, `!` 연산자

물음표는 옵셔널 체이닝(?)과 옵셔널 파라미터(?) 등으로 사용됩니다.

옵셔널 파라미터

```typescript
function test(a: string, b: string, c?: string): void {
    console.log('complete');
}

test('1','22');  // c? 에 물음표 없으면 Error
test('1','22', '333');
```

옵셔널 체이닝

```javascript
let user = {}; // 주소 정보가 없는 사용자

alert( user && user.address && user.address.street ); // undefined, 에러가 발생하지 않습니다.

// 옵셔널 체이닝 사용했을때
let user = {}; // 주소 정보가 없는 사용자

alert( user?.address?.street ); // undefined, 에러가 발생하지 않습니다.
```

느낌표는 non-null assertion 이라고 해서 강의 후반부에 나오는 타입 단언의 한 연산자로 사용됩니다.

특정 코드가 null이 아니다라는 것을 사용자가 타입스크립트 컴파일러에게 알리는 용도라고 보면 됩니다.

```typescript
let x: number;

console.log(x! + x!);
```

### 2. 리터럴(Literal), 상수(Constant)

#### 2.1 리터럴이란

리터럴은 데이터 그 자체를 뜻 한다. 
변수에 넣는 변하지 않는 데이터를 의미한다.

#### 2.2 상수(Constant)

코드적으로 말하자면, 상수는 변하지 않는 변수

### 3. RegExp

정규 표현식(正規表現式, 영어: regular expression, 간단히 regexp 또는 regex, rational expression) 또는 정규식(正規式)은 특정한 규칙을 가진 문자열의 집합을 표현하는 데 사용하는 형식 언어이다.

```javascript
const regex = /\d{3}-\d{4}-\d{4}/;
// (\d는 숫자를 의미하고, {} 안의 숫자는 갯수를 의미한다.)

regex.test('010-1111-2222') // true;
regex.test('01-11-22') // false;

const text = "안녕하세요 제 번호는 010-1111-2222 입니다. call me~!";
text.match(/\d{3}-\d{4}-\d{4}/); // 010-1111-2222
```

### 4. tsconfig.json

```JSON
{
    "compilerOptions": {
        /* https://aka.ms/tsconfig.json 를 방문하면 해당 파일에 대한 더 많은 정보를 얻을 수 있습니다. */

        // 옵션은 아래와 같은 형식으로 구성되어 있습니다.
        // "모듈 키": 모듈 값 /* 설명: 사용가능 옵션 (설명이 "~ 여부"인 경우 'true', 'false') */

        /* 기본 옵션 */
        // "incremental": true, /* 증분 컴파일 설정 여부 */
        "target": "es5", /* 사용할 특정 ECMAScript 버전 설정: 'ES3' (기본), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 혹은 'ESNEXT'. */
        "module": "commonjs", /* 모듈을 위한 코드 생성 설정: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
        // "lib": [], /* 컴파일에 포함될 라이브러리 파일 목록 */
        // "allowJs": true, /* 자바스크립트 파일 컴파일 허용 여부 */
        // "checkJs": true, /* .js 파일의 오류 검사 여부 */
        // "jsx": "preserve", /* JSX 코드 생성 설정: 'preserve', 'react-native', 혹은 'react'. */
        // "declaration": true, /* '.d.ts' 파일 생성 여부. */
        // "declarationMap": true, /* 각 '.d.ts' 파일의 소스맵 생성 여부. */
        // "sourceMap": true, /* '.map' 파일 생성 여부. */
        // "outFile": "./", /* 단일 파일로 합쳐서 출력합니다. */
        // "outDir": "./", /* 해당 디렉토리로 결과 구조를 보냅니다. */
        // "rootDir": "./", /* 입력 파일의 루트 디렉토리(rootDir) 설정으로 --outDir로 결과 디렉토리 구조를 조작할 때 사용됩니다. */
        // "composite": true, /* 프로젝트 컴파일 여부 */
        // "tsBuildInfoFile": "./", /* 증분 컴파일 정보를 저장할 파일 */
        // "removeComments": true, /* 주석 삭제 여부 */
        // "noEmit": true, /* 결과 파일 내보낼지 여부 */
        // "importHelpers": true, /* 'tslib'에서 헬퍼를 가져올 지 여부 */
        // "downlevelIteration": true, /* 타겟이 'ES5', 'ES3'일 때에도 'for-of', spread 그리고 destructuring 문법 모두 지원 */
        // "isolatedModules": true, /* 각 파일을 분리된 모듈로 트랜스파일 ('ts.transpileModule'과 비슷합니다). */

        /* 엄격한 타입-확인 옵션 */
        "strict": true, /* 모든 엄격한 타입-체킹 옵션 활성화 여부 */
        // "noImplicitAny": true, /* 'any' 타입으로 구현된 표현식 혹은 정의 에러처리 여부 */
        // "strictNullChecks": true, /* 엄격한 null 확인 여부 */
        // "strictFunctionTypes": true, /* 함수 타입에 대한 엄격한 확인 여부 */
        // "strictBindCallApply": true, /* 함수에 엄격한 'bind', 'call' 그리고 'apply' 메소드 사용 여부 */
        // "strictPropertyInitialization": true, /* 클래스의 값 초기화에 엄격한 확인 여부 */
        // "noImplicitThis": true, /* 'any' 타입으로 구현된 'this' 표현식 에러처리 여부 */
        // "alwaysStrict": true, /* strict mode로 분석하고 모든 소스 파일에 "use strict"를 추가할 지 여부 */

        /* 추가적인 확인 */
        // "noUnusedLocals": true, /* 사용되지 않은 지역 변수에 대한 에러보고 여부 */
        // "noUnusedParameters": true, /* 사용되지 않은 파라미터에 대한 에러보고 여부 */
        // "noImplicitReturns": true, /* 함수에서 코드의 모든 경로가 값을 반환하지 않을 시 에러보고 여부 */
        // "noFallthroughCasesInSwitch": true, /* switch문에서 fallthrough 케이스에 대한 에러보고 여부 */

        /* 모듈 해석 옵션 */
        // "moduleResolution": "node", /* 모듈 해석 방법 설정: 'node' (Node.js) 혹은 'classic' (TypeScript pre-1.6). */
        // "baseUrl": "./", /* non-absolute한 모듈 이름을 처리할 기준 디렉토리 */
        // "paths": {}, /* 'baseUrl'를 기준으로 불러올 모듈의 위치를 재지정하는 엔트리 시리즈 */
        // "rootDirs": [], /* 결합된 컨텐츠가 런타임에서의 프로젝트 구조를 나타내는 루트 폴더들의 목록 */
        // "typeRoots": [], /* 타입 정의를 포함할 폴더 목록, 설정 안 할 시 기본적으로 ./node_modules/@types로 설정 */
        // "types": [], /* 컴파일중 포함될 타입 정의 파일 목록 */
        // "allowSyntheticDefaultImports": true, /* default export이 아닌 모듈에서도 default import가 가능하게 할 지 여부, 해당 설정은 코드 추출에 영향은 주지 않고, 타입확인에만 영향을 줍니다. */
        "esModuleInterop": true, /* 모든 imports에 대한 namespace 생성을 통해 CommonJS와 ES Modules 간의 상호 운용성이 생기게할 지 여부, 'allowSyntheticDefaultImports'를 암시적으로 승인합니다. */
        // "preserveSymlinks": true, /* symlik의 실제 경로를 처리하지 않을 지 여부 */
        // "allowUmdGlobalAccess": true, /* UMD 전역을 모듈에서 접근할 수 있는 지 여부 */

        /* 소스 맵 옵션 */
        // "sourceRoot": "", /* 소스 위치 대신 디버거가 알아야 할 TypeScript 파일이 위치할 곳 */
        // "mapRoot": "", /* 생성된 위치 대신 디버거가 알아야 할 맵 파일이 위치할 곳 */
        // "inlineSourceMap": true, /* 분리된 파일을 가지고 있는 대신, 단일 파일을 소스 맵과 가지고 있을 지 여부 */
        // "inlineSources": true, /* 소스맵과 나란히 소스를 단일 파일로 내보낼 지 여부, '--inlineSourceMap' 혹은 '--sourceMap'가 설정되어 있어야 한다. */

        /* 실험적 옵션 */
        // "experimentalDecorators": true, /* ES7의 decorators에 대한 실험적 지원 여부 */
        // "emitDecoratorMetadata": true, /* decorator를 위한 타입 메타데이터를 내보내는 것에 대한 실험적 지원 여부 */

        /* 추가적 옵션 */
        "skipLibCheck": true, /* 정의 파일의 타입 확인을 건너 뛸 지 여부 */
        "forceConsistentCasingInFileNames": true /* 같은 파일에 대한 일관되지 않은 참조를 허용하지 않을 지 여부 */
    }
}
```

---

## Ⅱ. Access Modifier (접근제어자)

### readonly

`const`와의 차이점

`const`
변수 참조를 위한 것
변수에 다른 값을 할당/대입할 수 없음.

`readonly`
속성을 위한 것
속성을 앨리어싱을 통해 변경될 수 있음

```typescript
let foo: {
    readonly bar: number;
} = {
        bar: 123
    };

function iMutateFoo(foo: { bar: number }) {
    foo.bar = 45678;
}

iMutateFoo(foo); // foo 인자가 foo 파라미터에 의해 앨리어싱됨
console.log(foo.bar); // 456!dnpqroqkf1
```

---

## Ⅲ. Generic

제네릭을 사용하는 이유
제네릭을 유용하게 사용할 수 있는 경우로는 자료구조가 있다. 다음과 같이 스택 자료구조를 TypeScript로 구현한다고 가정하자.

```typescript
class Stack {
  private data: any[] = [];

  contructor() {}

  push(item: any): void {
    this.data.push(item);
  }

  pop(): any {
    return this.data.pop();
  }
}
```

여러가지 방법으로 구현할 수 있겠지만, 스택 같은 자료구조는 대개 범용적인 타입을 수용할 수 있도록 만들어진다. 따라서 TypeScript에서는 위와 같이 `any`를 이용하여 구현할 수 있는 것이 가장 쉬운 방법이다.

하지만 `any`를 이용하여 구현하면 저장하고 있는 자료의 타입이 모두 같지 않다는 문제점이 생긴다. 따라서 위의 스택에서 자료를 추출하는 경우 런타임에서 항상 타입 검사를 해줘야 한다는 것이다.

```typescript
const stack = new Stack();
stack.push(1);
stack.push('a');
stack.pop().substring(0) // 'a'
stack.pop().substring(0) // Throw TypeError

```

그렇다고 자료형을 보장하기 위해 항상 number 타입의 변수만 받을 수 있도록 하면, 범용성이 떨어지게 된다.

물론 상속으로도 이를 처리할 수 있다.

```typescript
class NumberStack extends Stack {
  constructor() {
    super();
  }

  push(item: number): void {
    super.push(item);
  }

  pop(): number {
    return super.pop();
  }
}
```

하지만 상속을 사용하는 경우에는 자료형을 하나 추가할 때마다 구태여 클래스를 추가하고 중복되는 코드를 양산해야하기 때문에 번거롭기는 마찬가지다.

이런 경우에 유용하게 사용할 수 있는 것이 제네릭이다.

> 제네릭의 문법

클래스
스택 자료구조를 제네릭으로 다시 구현하면 다음과 같은 형태를 띌 것이다.

```typescript
class Stack<T> {
  private data: T[] = [];

  constructor() {}

  push(item: T): void {
    this.data.push(item);
  }

  pop(): T {
    return this.data.pop();
  }
}
```

클래스 식별자 선언부에 `<T>`라는 못보던 문법이 추가된 것을 확인할 수 있다. 제네릭을 사용하겠다는 의미로 꺽쇠(Angle brackets)를 넣고 그 안에 타입으로 사용되는 식별자를 집어넣는다.

T는 Type의 약자로 다른 언어에서도 제네릭을 선언할 때 관용적으로 많이 사용된다. 이 부분에는 식별자로 사용할 수 있는 것이라면 무엇이든 들어갈 수 있다. 이를테면 $나 _도 가능하다는 의미다. 하지만 대개의 경우 T를 사용한다. 여기에서 T를 타입 변수(Type variables)라고 한다.

이렇게해서 클래스에서 제네릭을 사용하겠다고 선언한 경우 T는 해당 클래스에서 사용할 수 있는 특정한 타입이 된다.

사용법은 아래와 같다. 그저 생성자를 호출하여 객체를 만들 때 T로 사용될 타입을 지정해주기만 하면 된다.

```typescript
const numberStack = new Stack<number>();
const stringStack = new Stack<string>();
numberStack.push(1);
stringStack.push('a');
```

이제 각 스택은 항상 생성할 때 선언한 타입만을 저장하고 리턴한다. 이렇게 하면 컴파일러가 리턴하는 타입을 알 수 있게 되므로 에디터에서 자동 완성을 사용할 수 있게 되므로 생산성 향상에도 기여한다는 장점이 있다.

다만 타입은 컴파일 단계에서 검사하는 것이므로 런타임에서는 막을 수 없다. 이를테면,

```typescript
numberStack.push('' as any);
```

이런1 코드는 컴파일 단계의 타입 체크를 우회하므로 막을 수 없다.

함수
배열을 입력으로 받아 그 배열의 첫번째 요소를 출력하는(lodash.head() 같은) 함수를 구현해야 한다고 가정하자. 제네릭을 사용하지 않는 경우 이렇게 짜게 될 것이다.

```typescript
function first(arr: any[]): any {
  return arr[0];
}
```

위의 코드는 마찬가지로 어떤 타입의 배열이라도 받을 수 있기 때문에 리턴하게 되는 타입이 무엇인지 알 수 없다. 제네릭을 이용하면 다음과 같이 간단하게 구현할 수 있다.

```typescript
function first<T>(arr: T[]): T {
  return arr[0];
}
```

추가된 것은 클래스와 동일하게 함수 식별자 옆에 들어가는 <T>이다. 마찬가지로 이 함수 내에서 T는 특정한 타입으로 취급된다.

마찬가지로 사용할 때는 함수를 호출할 때 제네릭 문법으로 타입을 정해주기만 하면 된다.

```typescript
first<number>([1, 2, 3]); // 1
```

두 개 이상의 타입 변수
제네릭 함수나 클래스에서는 두 개 이상의 타입 변수도 사용할 수 있다. 다음과 같이 두 가지 변수를 받아 쌍으로 만들어 반환하는 함수를 구현해야 한다고 가정하자.

```typescript
function toPair(a: any, b: any): [ any, any ] {
  return [ a, b ];
}
```

입력되는 두 가지의 변수의 타입이 다르다고 가정할 경우 두 가지의 타입 변수가 필요하게 된다.

```typescript
function toPair<T, U>(a: T, b: U): [ T, U ] {
  return [ a, b ];
}
```

제네릭을 사용하면 위와 같은 형태로 구현할 수 있다. 꺽쇠 안에 T와 U 두 가지의 타입 변수가 보일 것이다. 아까 관용적으로 T를 사용한다고 말했는데, 그 뒤로는 알파벳 순서대로 사용하면 된다. 반복문에서 관용적으로 인덱스 변수로 i, j를 사용하는 것과 비슷하다.

함수 사용법은 아래와 같다.

```typescript
toPair<string, number>('1', 1); // [ '1', 1 ]
toPair<number, number>(1, 1); // [ 1, 1 ]
```

상속된 타입 변수
타입 변수는 기존에 사용하고 있는 타입을 상속할 수도 있다. 이 점을 이용하면 입력 받을 변수의 타입을 제한할 수 있다. 또한 에디터가 해당 타입의 메소드나 프로퍼티를 예측할 수 있으므로 자동 완성이 된다.

이것과 여러 개의 타입 변수를 사용해 응용하면 아래와 같은 코드를 짤 수 있다.

```typescript
function getFirst<T extends Stack<U>, U>(container: T): U {
  const item = container.pop();
  container.push(item);
  return item;
}
```

getFirst는 입력받은 스택의 첫번째 요소를 반환하는 함수다. 사용시에는 아래처럼 사용하면 된다. 만약 첫 번째 타입으로 스택, 혹은 스택을 상속한 타입이 아닌 다른 타입을 사용하면 에러가 발생한다.

```typescript
getFirst<Stack<number>, number)(numberStack);
getFirst<number, number>(1); // Type 'number' does not satisfy the constraint
```
