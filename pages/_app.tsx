import { AppProps } from 'next/app'

import '../tailwind.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp