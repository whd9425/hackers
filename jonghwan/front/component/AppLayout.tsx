import Link from 'next/Link';
import React, { useEffect , useState , useRef } from "react";
import {Menu , Input , Row , Col} from 'antd';
import UserProfile from '../component/UserProfile';
import LoginForm from '../component/LoginForm';
import styled from 'styled-components';

interface typeTest{
    children?: React.ReactNode  //React.ReactNode 리엑트node  ProTpes.node 와 마찬가지로 모든타입을 허용

}
export interface Propss {
    setIsLoggedIn: (val: boolean) => void
}

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({children}: typeTest) =>{
    const [isLoggedIn , setIsLoggedIn] = useState(false)
    
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />  
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                 {isLoggedIn ? <UserProfile  setIsLoggedIn={setIsLoggedIn}/> : <LoginForm  setIsLoggedIn={setIsLoggedIn}/>}     
                </Col>
                <Col xs={24} md={12}>
                  {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://www.naver.com" target="_blank" rel="noreferrer noopener">네이버가기</a>
                </Col>
            </Row>
            
        </div>
    )

}

//  AppLayout.propTypes ={
//      children: PropTypes.node.isRequired,
//  }  typescript 떄 안써도 되는 이유 찾아보기

//TypeScript를 사용하지 않으려면 패키지 루트에서 tsconfig.json 파일을 제거하세요(그리고 페이지 디렉터리에 있는 모든 TypeScript 파일).

export default AppLayout;