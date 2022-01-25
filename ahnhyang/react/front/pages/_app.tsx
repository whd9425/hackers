import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import wrapper from '../store/configureStore';

const NodeBird = ({ Component }: AppProps) => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};


// wrapper.withRedux로 페이지를 감싸면 redux가 결합된 라이프사이클을 사용할 수 있다.
export default wrapper.withRedux(NodeBird);
