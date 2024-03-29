
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head';
import { AppProps, NextWebVitalsMetric } from 'next/app';
import wrapper from '../store/configureStore';


const App = ({Component}: AppProps) => {
    
    return(
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>NodeBird</title>
            </Head>
            <Component />
        </div>
    )
    
}

//  App.propTypes ={
//      component: PropTypes.elementType.isRequired,

//  }

//export default App;

export default wrapper.withRedux(App);