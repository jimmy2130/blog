import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../src/components/Layout'
import useSound from 'use-sound'


const PlayButton = () => {
  const [play] = useSound('/test5.mp3', {
    volume: 0.2,
    sprite: {
      question: [0, 4000],
      g4: [4500, 1000],
      a4: [6000, 1000],
      b4: [7500, 1000],
      c5: [9000, 1000],
      d5: [10500, 1000],
    }
  })
  return (
    <>
      <button onClick={() => play({id: 'question'})}>Question</button>
      <button onClick={() => play({id: 'g4'})}>g4</button>
      <button onClick={() => play({id: 'a4'})}>a4</button>
      <button onClick={() => play({id: 'b4'})}>b4</button>
      <button onClick={() => play({id: 'c5'})}>c5</button>
      <button onClick={() => play({id: 'd5'})}>d5</button>
    </>
  )
}

function Test() {

  return (
    <Layout>
      <Head>
        <title>Playground</title>
      </Head>
      <Main>
        <PlayButton/>
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
  border: 1px solid;
  height: 800px;
`



export default Test
