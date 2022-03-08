# axios and fetch

![imgs01](https://user-images.githubusercontent.com/79066848/156950138-02d6253a-2617-4e58-80ec-a17c38d3d52f.png)



## fetch

fetch는 ES6부터 JavaScript의 내장 라이브러리로 들어왔습니다.<br/>
promise기반으로 만들어졌기에 Axios와 마찬가지로 데이터를 다루는데 어렵지 않으며, 내장 라이브러리라는 장점으로 인해 상당히 편리하죠. 코드 또한 간단합니다.

```js

//fetch
const url ='http://localhost3000/test`
const option ={
   method:'POST',
   header:{
     'Accept':'application/json',
     'Content-Type':'application/json';charset=UTP-8'
  },
  body:JSON.stringify({
  	name:'jonghwan',
    	age:20
  })

  fetch(url,options)
  	.then(response => console.log(response))

```

#### fetch 장단점

#### 장점
내장 라이브러리이기에 별도의 import를 해줄 필요가 없다.<br/>
promise 기반으로 다루기가 쉽다.<br/>
내장 라이브러리이기에 사용하는 프레임워크가 안정적이지 않을 때 사용하기 좋다.<br/><br/>

#### 단점
크로스 브라우징 문제 발생 익스플로러를 지원하지 않는다. (브라우저 호환성이 상대적으로 떨어진다.)<br/>
기능이 부족하다.



## Axios

Axios는 Promise based HTTP client for the browser and node.js<br/>
즉, node.js와 브라우저를 위한 HTTP통신 라이브러리입니다.<br/>
비동기로 HTTP 통신을 가능하게 해주며 return을 promise 객체로 해주기 때문에 response 데이터를 다루기도 쉽습니다.<br/>


```js

axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'jonghwan',
    lastName: 'park'
  }
});


```

#### 장점
response timeout 처리 방법이 있다. (fetch에는 존재하지 않는 기능)<br/>
promise 기반으로 다루기가 쉽다<br/>
크로스 브라우징에 신경을 많이썼기에 브라우저 호환성이 뛰어나다.<br/>

#### 단점

모듈 설치를 해줘야한다. ??



### Axios / fetch  차이

````

         Axios                                            fetch

XSRF Protection 보안 기능 제공                없음.

자동 JSOM 데이터 변환 지원                     JSON 데이터 핸들링 위해 추가 절차 필요.
                                              Fetch interface 의 json() 이용하는 로직 추가하여 가능

Request 취소 와 Request Timeout 설정 가능      없음.
                                              AbortController 이용하여 구현 가능

HTTP Requests 의 Intercept 가능               Intercept Requests 기본적으로 제공되지 않음.
                                              Global Fetch Method를 Overwrite 하여 나의 인터셉터 정의 가능

Download Progress 지원                        Upload Progress 지원안함.
                                              Response Object의 Body Property 통해 제공되는 ReadableStream 인스턴스 이용 가능
                                              
````

#### 개인적인생각

일단 웹 프론트 프레임워크(react js,vue js 등)을 다룰때에는 Axios를 사용하는 것이 더 좋다고 생각한다<br/>
Axios는 크로스 브라우징에 신경을 많이 쓴 모듈인게 눈에 보이며, 기능또한 우수하기 때문이다. <br/>
전체적으로 봤을 때 fetch의 상위 호환이라고 생각을 한다.<br/>


