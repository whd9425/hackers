import { Avatar, Card, Button } from 'antd';
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { FuncProps } from './AppLayout';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">짹짹<br />0</div>,
        <div key="following">팔로잉<br />0</div>,
        <div key="follower">팔로워<br />0</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>AH</Avatar>}
        title='AhnHyang'
      />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
