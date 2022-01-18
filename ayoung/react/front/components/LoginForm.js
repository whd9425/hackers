import React, { useCallback, useState } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

// return 안에 인라인스타일 주면 리렌더링 되어 속도저하되기 때문에 따로 빼서 씀. `백틱사용
const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLoggedIn(true); // 더미데이터(가상의 state)
    }, [id, password]);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor='user-id'>아이디</label>
                <br/>
                <Input name='user-id' value={id} onChange={onChangeId} required /> {/* 컴포넌트에 props로 넘겨주는 함수는 useCallback으로 감싸주기. 그래야 최적화가 됌 */}
            </div>
            <div>
                <label htmlFor='user-password'>비밀번호</label>
                <br/>
                <Input name='user-password' value={password} onChange={onChangePassword} required />
            </div>
            <ButtonWrapper>
                <Button type='primary' htmlType='submit' loading={false}>로그인</Button>
                <Link href='/signup'><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    )
}

export default LoginForm;