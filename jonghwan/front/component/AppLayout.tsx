
const AppLayout = ({children}) =>{
    return (
        <div>
            <div>공통메뉴</div>
            {children}
        </div>
    )

}

//  AppLayout.propTypes ={
//      children: PropTypes.node.isRequired,
//  }  typescript 떄 안써도 되는 이유 찾아보기

//TypeScript를 사용하지 않으려면 패키지 루트에서 tsconfig.json 파일을 제거하세요(그리고 페이지 디렉터리에 있는 모든 TypeScript 파일).

export default AppLayout;