import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Layout from '../src/components/Layout'
import PitchQuiz from '../src/components/PitchQuiz'

function Test() {
  return (
    <Layout>
      <Head>
        <title>Playground</title>
      </Head>
      <Main>
        <PitchQuiz/>
      </Main>
    </Layout>
  )
}

const Main = styled.main`
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  // padding-bottom: 512px;
  // border: 1px solid;
`



export default Test
