import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const Global = createGlobalStyle`
    .ant-row { // gutter 문제 해결(자동으로 margin 생기는거 없애줌)
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

const AppLayout = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn); // isLoggedIn이 변경되면 알아서 AppLayout이 리렌더링됨


    return (
        <div>
            <Menu mode="horizontal">
                <Global />
                <Menu.Item key="home">
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item key="search">
                    <Input.Search enterButton style={{ verticalAlign: "middle" }}/>
                </Menu.Item>
                <Menu.Item key="signup">
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {/* 예전처럼 props로 받아올 필요없이 */}
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://github.com/iyovory" target="_blank" rel="noreferrer noopener">Made by ZeroCho</a>
                </Col>
            </Row>
            
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;