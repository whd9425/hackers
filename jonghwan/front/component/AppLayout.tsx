import Link from 'next/Link';
import React, { useEffect , useState , useRef } from "react";
import {Menu , Input , Row , Col} from 'antd';
import UserProfile from '../component/UserProfile';
import LoginForm from '../component/LoginForm';
import styled,{createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';

interface typeTest{
    children?: React.ReactNode  //React.ReactNode 리엑트node  ProTpes.node 와 마찬가지로 모든타입을 허용

}
export interface Propss {
    setIsLoggedIn: (val: boolean) => void
}

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col:first-child {
      padding-left: 0 !important;
  }
  
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;



const AppLayout = ({children}: typeTest) =>{
    const { isLoggedIn } = useSelector(state => state.user);
    
    return (
        <div>
      <Global />
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn
            ? <UserProfile />
            : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://www.zerocho.com" target="_blank" rel="noreferrer noopener">Made by ZeroCho</a>
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