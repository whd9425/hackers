import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Input, Menu, Row } from 'antd';

import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

interface Props {
  children?: React.ReactNode;
};

export interface FuncProps {
  setIsLoggedIn: (val: boolean) => void
}

const AppLayout = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
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
            ? <UserProfile setIsLoggedIn={setIsLoggedIn}/>
            : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://www.zerocho.com" target="_blank" rel="noreferrer noopener">Made by Ahnhyang</a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;
