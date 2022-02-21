import React, { useCallback, useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';

import { SIGN_UP_REQUEST } from '../reducers/user';
import AppLayout from '../components/AppLayout'; // 밑에 AppLayout으로 감싸주면 자동생성됨
import useInput from '../hooks/useInput';

const Signup = () => {
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    // ▼ 커스텀 훅 적용 전
    // const [id, setId] = useState('');
    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value);
    // }, []);
    // ▼ 커스텀 훅 적용 후 (컴포넌트useInput - [value, handler])
    const [email, onChangeEmail] = useInput('');
    const [nick, onChangeNick] = useInput('');
    const [password, onChangePassword] = useInput('');
    const dispatch = useDispatch();
    const { isSigningUp, me } = useSelector((state) => state.user);

    useEffect(() => {
        if (me) {
            alert('로그인했으니 메인페이지로 이동합니다.');
            Router.push('/');
        }
    }, [me && me.id]);

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        return dispatch({
            type: SIGN_UP_REQUEST,
            data: {
                email,
                password,
                nick,
            },
        });
    }, [email, password, passwordCheck, term]);

    // 비밀번호랑 비밀번호 확인이 일치하는지
    const onChangePasswordCheck = useCallback((e) => { // 이 부분이 달라서 커스텀 훅 적용 못함. true가 아니면 에러표시(passwordError)
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    }, [password]);

    // 약관동의 체크박스를 체크하지 않았을때
    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    }, []);

    return (
        <AppLayout>
            <Head>
                <title>회원가입 | NodeBird</title>
            </Head>
            <Form onFinish={onSubmit} style={{ padding: 10 }}>
                <div>
                    <label htmlFor="user-email">아이디</label>
                    <br />
                    <Input name="user-email" value={email} required onChange={onChangeEmail} />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br />
                    <Input name="user-nick" value={nick} required onChange={onChangeNick} />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br />
                    <Input
                        name="user-password-check"
                        type="password"
                        value={passwordCheck}
                        required
                        onChange={onChangePasswordCheck}
                    />
                    {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>제로초 말을 잘 들을 것을 동의합니다.</Checkbox>
                    {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button type="primary" htmlType="submit" loading={isSigningUp}>가입하기</Button> {/* 누르면 onFinish 이벤트 호출 */}
                </div>
            </Form>
        </AppLayout>
    );
};

export default Signup;