
import '@/styles/globals.scss'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  
  return <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
  </Head>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js">
  </Script>
  <Component {...pageProps} />
  </> 
}
