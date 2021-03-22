import React from 'react'
import Head from 'next/Head'
import Layout from '../components/Layout'
import withData from '../lib/apollo'

const MyApp = ({ Component, pageProps }) =>  (
  <>
    <Head>
      <link
        crossOrigin="anonymous"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        rel="stylesheet"
      />
    </Head>
    <Layout>
      <Component {...pageProps}  />
    </Layout>
  </>
)

export default withData(MyApp)