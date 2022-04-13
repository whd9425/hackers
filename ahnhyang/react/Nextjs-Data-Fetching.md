# Next.js 실행 흐름

```
1. 사용자가 사이트 첫페이지 접속을 요청. (GET Request)
2. Next Server가 요청에 맞는 Page를 찾는다.
3. _app.js의 getInitialProps가 있다면 실행한다.
4. Page Component의 getStaticProps나 getServerSideProps가 있다면 실행해 pageProps들을 받아온다.
5. 모든 props들을 구성하고, _app.js의 > page Component 순서로 렌더링.
6. Next 서버에서 사용자에게 렌더링될 HTML을 전송. (SSR 방식)
7. 브라우저에서 추가적인 자바스크립트 번들을 다운로드 받아 실행.
8. 사용자가 현재 페이지에서 다른 페이지로 이동시 Next.js는 서버가 아닌 브라우저에서 처리하여 이동하게 한다. (CSR 방식)
```

*_document.js 파일은 사용자가 <html>과 <body>태그를 커스텀하기 위한 파일이며, 필수 파일이 아니다.  
사용자가 커스텀하지 않는다면 프로젝트 > .next > server > pages > _document.js 파일을 사용한다.  

<br/>

## Pre-rendering

<br/>

Next.js는 페이지 이동시 CSR방식으로 필요한 데이터만 추가적으로 받아와 페이지 전환이 빠르다.  
또한, SSR방식으로 미리 Pre-rendering된 HTML 정보도 가지고 있다.  
(순수 React의 경우 js를 다운로드 하지 않으면 빈페이지만 보이게 된다.)

- **<순수 React.js App의 경우 - Pre-render X >**
<img src="https://media.vlpt.us/images/tunggary/post/6d9eeb1e-19a1-4a71-91ba-191dfc4fa3ed/no-pre-rendering.png" alt="Plain React app"/>

<br/>

- **<Next.js 사용할 경우 - Pre-render O >**
<img src="https://media.vlpt.us/images/tunggary/post/78d75e49-1136-45a1-b94c-3a8da17b5e18/pre-rendering.png" alt="Next app"/>

<br/>

### **Hydration**
Server로부터 받은 렌더링된 정적페이지와 번들링된 js파일을  
클라이언트에서 정적페이지의 html 코드와 React인 js 코드를 서로 매칭시켜 페이지가 인터렉티브하게 동작할 상태가 되는 과정

<br/>

## Next.js에서 Pre-rendering 사용하기




(https://velog.io/@jeff0720/Next.js-%EA%B0%9C%EB%85%90-%EC%9D%B4%ED%95%B4-%EB%B6%80%ED%84%B0-%EC%8B%A4%EC%8A%B5%EA%B9%8C%EC%A7%80-%ED%95%B4%EB%B3%B4%EB%8A%94-SSR-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95)
