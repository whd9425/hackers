import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
                    <Input.Search enterButton style={{ verticalAlign: 'middle' }}/>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}> {/* gutter: 컬럼 사이의 간격(=padding) */}
                {/* xs: 모바일(가로100% = 24등분) => sm: 태블릿 => md: 작은 데스크탑 => lg,xl  ...*/}
                <Col xs={24} md={6}> {/* 25% */}
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />} {/* 더미데이터 */}
                </Col>
                <Col xs={24} md={12}> {/* 50% */}
                    {children} {/* 다른 페이지에서 AppLayout 안쪽 부분이 children */}
                </Col>
                <Col xs={24} md={6}> {/* 25% */}
                    <a href='https://github.com/AYoung-Cho-99' target="_blank" rel='noreferrer noopener'>Made by ZeroCho</a> {/* _blank쓰면 보안위협이 있어 rel~ 적어줌 */}
                </Col>
            </Row>
            
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;