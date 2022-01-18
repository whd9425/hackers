import {Form , Input ,Button} from 'antd';
import React, { useEffect , useState , useCallback , useMemo } from "react";
import Link from 'next/Link';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import {Propss} from '../component/AppLayout'


const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper =styled(Form)`padding:10px`;

const LoginForm = ({setIsLoggedIn}: Propss) =>{
    const [id,onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

   
    const style = useMemo(() => ({marginTop:10}),[])
 
    const onSubmitForm = useCallback(() => {
        console.log(id,password)
        setIsLoggedIn(true)

    }, [id,password])

    return(
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br/>
                <Input name="user-id" value={id} onChange={onChangeId} required/>
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br/>
                <Input name="user_password" type="password" value={password} onChange={onChangePassword} required/>
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    )

}

export default LoginForm