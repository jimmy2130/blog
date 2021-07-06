import GlobalStyles from '../src/components/GlobalStyles'
import Head from 'next/head'
import styled from 'styled-components'

export default function App({ Component, pageProps }) {
  return (
    <Wrapper>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700&family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
`