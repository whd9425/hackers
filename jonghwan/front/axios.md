# Axios

``
비동기 통신을 위해 만들어진 라이브러리 
기존 우리가 javascript에서 쓰고있는 AJAX,Fetch와  비슷한 기능이다.

비동기 방식이란  


페이지 리로드의 경우 전체 리소스를 다시 불러와야하는데 <br/>
이미지, 스크립트 , 기타 코드등을 모두 재요청할 경우 불필요한 리소스 낭비가 발생하게 되지만<br/>
비동기식 방식을 이용할 경우 페이지 리로드없이 필요한 부분만 불러와 사용할 수 있도록 해주는 방식을 비동기 방식이라고 한다.

``

### axios 사용법

```js

yarn add axios

npm i axios


//자신이 진행중인 프로젝트 상위에 import 시켜주기
import axios from 'axios'

```

```js

import axios from 'axios';

axios.get('https://localgost:3000/sewon/user')
  .then((Response)=>{console.log(Response.data)})
  .catch((Error)=>{console.log(Error)})

```








