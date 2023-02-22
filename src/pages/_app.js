
import '@/styles/globals.scss'
import Head from 'next/head'
import Script from 'next/script'

import { store } from '../../store/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
// import toast from "../Toast"
import "react-toastify/dist/ReactToastify.css";
import NextNProgress from "nextjs-progressbar";
import Router from 'next/router';

import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
NProgress.configure({ easing: 'ease', speed: 200, showSpinner: false })

export default function App({ Component, pageProps }) {

  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());
  
  return <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
 
  <Provider store={store}>
    <Component {...pageProps} />
    <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
     
      /> 
  </Provider>
  </> 
}
