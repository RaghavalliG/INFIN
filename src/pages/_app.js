
import '@/styles/globals.scss'
import Head from 'next/head'
import Script from 'next/script'

import { store } from '../../store/store';
import { Provider } from 'react-redux';


export default function App({ Component, pageProps }) {
  
  return <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  </> 
}
