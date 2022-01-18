import AppLayout from '../component/AppLayout'
import Head from 'next/head'
import { Form ,Input , Checkbox , Button} from 'antd'
import React, { useEffect , useState , useCallback , useMemo } from "react";
import useInput from '../hooks/useInput';
import styled from 'styled-components' ;


const ErrorMessage = styled.div`
    color:red
`;



const Singup = () =>{

    const [id,onChangeId] = useInput('');
    const [nickname,onChangeNick] = useInput('');
    const [password,onChangePassword] = useInput('');

    const [passwordCheck , setPasswordCheck] = useState('');
    const [passwordError , setPasswordError] = useState(false);
    const [term,setTerm] = useState('');
    const [termError,setTermError] = useState(false);

    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false)
    },[])

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    },[password])


    const onSubmit = useCallback( () => {
        

        if(password !== passwordCheck ){
            return setPasswordError(true);
 
        }

        if(!term ){
            return setTermError(true);
        }

    },[password,passwordCheck,term])

    return(
        <>
            <Head>
                <title>회원가입| NodeBird</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">아이디</label><br/>
                    <Input name="user-id" value={id} required onChange={onChangeId}/>
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label><br/>
                    <Input name="user-nick" value={nickname} required onChange={onChangeNick}/>
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label><br/>
                    <Input name="user-password" type="password" value={password} required onChange={onChangePassword}/>
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호 체크</label><br/>
                    <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
                    제로초 말을 잘 들을 것을 동의합니다.
                    </Checkbox>
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <div style={{marginTop:"10px"}}>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </>
    )

}

export default Singup