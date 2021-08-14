import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../src/components/Layout'
import useSound from 'use-sound'
import UnstyledButton from '../src/components/UnstyledButton'
import Icon from '../src/components/Icon'

const PlayButton = () => {
  const [isPlaying, setIsPlaying] = React.useState(false)  
  const [play, { stop }] = useSound('/butterfly.mp3', {
    volume: 0.5,
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),
  })
  const handleClick = () => {
    if(!isPlaying) {
      setIsPlaying(true)
      play()
    }
    else {
      setIsPlaying(false)
      stop()
    }
  }
  return (
    <UnstyledButton onClick={handleClick}>
    {
      isPlaying ? (
        <Icon id="pause" color="var(--color-gray-1000)" size={48}></Icon>
      ) : (
        <Icon id="play" color="var(--color-gray-1000)" size={48}></Icon>
      )
    }
    </UnstyledButton>
  )
}

const AnswerInput = ({ answer}) => {
  return (
    <div>{answer}</div>
  )
}

const KeyboardButton = ({ id, playScale, setAnswer }) => {
  const handleClick = () => {
    setAnswer()
    playScale({id: id})
  }
  return (
    <UnstyledButton onClick={handleClick}>
      <KeyboardButtonWrapper>🐶</KeyboardButtonWrapper>
    </UnstyledButton>
  )
}

const KeyboardButtonWrapper = styled.span`
  display: block;
  padding: 0px 14px;
  border: 2px solid var(--color-gray-1000);
  border-radius: 4px;
  background: var(--color-gray-300);
  font-size: calc(48 / 16 * 1rem);
`


const PitchQuiz = () => {
  const [answer, rawSetAnswer] = React.useState('')
  const setAnswer = () => rawSetAnswer(answer + '🐶')
  const [playScale] = useSound('/scale.mp3', {
    volume: 0.2,
    sprite: {
      'c4': [0, 600],
      'c#4': [1000, 600],
      'd4': [2000, 600],
      'd#4': [3000, 600],
      'e4': [4000, 600],
      'f4': [5000, 600],
      'f#4': [6000, 600],
      'g4': [7000, 600],
      'g#4': [8000, 600],
      'a4': [9000, 600],
      'a#4': [10000, 600],
      'b4': [11000, 600],
      'c5': [12000, 600],
    }
  })

  return (
    <>
      <PlayButton/>
      <AnswerInput answer={answer}></AnswerInput>
{/*      <button onClick={() => playScale({id: 'c4'})}>c4</button>
      <button onClick={() => playScale({id: 'c#4'})}>c#4</button>
      <button onClick={() => playScale({id: 'd4'})}>d4</button>
      <button onClick={() => playScale({id: 'd#4'})}>d#4</button>
      <button onClick={() => playScale({id: 'e4'})}>e4</button>*/}
      <KeyboardButton id="c4" playScale={playScale} setAnswer={setAnswer}/>
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
  border: 1px solid;
  height: 800px;
`



export default Test
