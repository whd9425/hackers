import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout'; // 밑에 AppLayout으로 감싸주면 자동생성됨

const Signup = () => {
    return (
        <>
            <Head>
                <title>회원가입 | NodeBird</title>
            </Head>
            <AppLayout>회원가입 페이지</AppLayout>
        </>
    );
};

export default Signup;