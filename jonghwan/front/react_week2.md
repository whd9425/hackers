## Hooks종류 


useState (동적 상태 관리)<br/>
useEffect (side effect 수행 -기존 class에서 라이프사이클mount/unmount/update)<br/>
useContext (컴포넌트를 중첩하지 않고도 전역 값 쉽게 관리)<br/>
useReducer (복잡한 컴포넌트들의 state를 관리 -분리)<br/>
useCallback (특정 함수 재사용)<br/>
useMemo (연산한 값 재사용)<br/>
useRef (DOM선택, 컴포넌트 안에서 조회/수정할 수 있는 변수 관리)<br/>

useImperativeHandle( ref를 사용하는 부모 측에서 커스터마이징된 메서드를 사용할 수 있게 해준다.(forwardRef같이 사용))<br/>
useLayoutEffect(이 함수의 시그니처는 useEffect와 동일하긴 한데, 모든 DOM 변경 후에 동기적으로 발생 이것은 DOM에서 레이아웃을 읽고 동기적으로 리렌더링하는 경우에 사용)<br/>
useDebugValue(React 개발자도구에서 사용자 Hook 레이블을 표시하는 데에 사용)<br/><br/>

react 공식문서 참조<br/>
https://ko.reactjs.org/docs/hooks-intro.html<br/>
