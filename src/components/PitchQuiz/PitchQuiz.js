import React from 'react'
import styled from 'styled-components'
import useSound from 'use-sound'
import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import Spacer from '../Spacer'
import {QUERIES} from '../../constants'

const EMOJI = {
  'c4': '🐶',
  'c#4': '🐓',
  'd4': '🐭',
  'd#4': '🦃',
  'e4': '🐱',
  'f4': '🦊',
  'f#4': '🦩',
  'g4': '🐻',
  'g#4': '🦜',
  'a4': '🦁',
  'a#4': '🦆',
  'b4': '🐵',
  'c5': '🐷',
}

const KEY = ['c4', 'c#4', 'd4', 'd#4','e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5']

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

const AnswerDisplay = ({ answer }) => {
  return (
    <AnswerDisplayWrapper>{answer}</AnswerDisplayWrapper>
  )
}

const AnswerDisplayWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  height: 120px;
  padding: 16px 8px;
  text-align: center;
  font-size: calc(30 / 16 * 1rem);
  letter-spacing: 0.6em;
  background: var(--color-gray-200);
  border-radius: 4px;
  overflow: auto;

  @media ${QUERIES.phoneAndDown} {
    padding: 4px 8px;
    letter-spacing: 0.1em;
  }
`

const KeyboardButton = ({ id, playScale, setAnswer }) => {
  const handleClick = () => {
    setAnswer(id)
    playScale({id: id})
  }
  return (
    <UnstyledButton onClick={handleClick}>
      <ButtonContent
        style={{
          '--background': id.includes('#') ? 'var(--color-gray-500)' : 'var(--color-gray-300)',
          '--hover-background': id.includes('#') ? 'var(--color-gray-600)' : 'var(--color-gray-400)',
        }}
      >{EMOJI[id]}</ButtonContent>
    </UnstyledButton>
  )
}

const ButtonContent = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 76px;
  border-radius: 4px;
  background: var(--background);
  font-size: calc(48 / 16 * 1rem);
  &:hover {
    background: var(--hover-background);
  }
  @media ${QUERIES.phoneAndDown} {
    width: 48px;
    height: 48px;
    font-size: calc(32 / 16 * 1rem);
  }
`

const DeleteButton = ({ deleteAnswer }) => {
  return (
    <UnstyledButton onClick={deleteAnswer}>
      <ButtonContent>
        <ButtonView>
          <Icon id="arrowLeft" color="var(--color-gray-1000)" size={24} strokeWidth={2}/>
        </ButtonView>
      </ButtonContent>
    </UnstyledButton>
  )
}

const ClearButton = ({ clearAnswer }) => {
  return (
    <UnstyledButton onClick={clearAnswer}>
      <ButtonContent>
        <ButtonView>
          <Icon id="delete" color="var(--color-gray-1000)" size={24} strokeWidth={2}/>
        </ButtonView>
      </ButtonContent>
    </UnstyledButton>
  )
}

const ButtonView = styled.span`
  padding: 16px;
  border-radius: 50%;
  background: var(--color-gray-200);
  &:hover {
    background: var(--color-gray-300);
  }
  @media ${QUERIES.phoneAndDown} {
    padding: 8px;
  }
`

const Keyboard = ({ setAnswer, deleteAnswer, clearAnswer }) => {
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
    <KeyboardButtonWrapper>
    {
      KEY.map(key => {
        return <KeyboardButton key={key} id={key} playScale={playScale} setAnswer={setAnswer}/>
      })
    }
    <DeleteButton deleteAnswer={deleteAnswer}/>
    <ClearButton clearAnswer={clearAnswer}/>
    </KeyboardButtonWrapper>
  )  
}

const KeyboardButtonWrapper = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: start;

  @media ${QUERIES.phoneAndDown} {
    gap: 10px;
  }
`


const PitchQuiz = () => {
  const [answer, rawSetAnswer] = React.useState('')
  const setAnswer = (id) => rawSetAnswer(answer + EMOJI[id])
  const deleteAnswer = () => rawSetAnswer(answer.slice(0, -2))
  const clearAnswer = () => rawSetAnswer('')

  return (
    <PitchQuizWrapper>
      <Spacer size={12}/>
      <PlayButtonWrapper>
        <PlayButton/>
      </PlayButtonWrapper>
      <Spacer size={20}/>
      <QuestionWrapper>
        <AnswerDisplay answer={answer}></AnswerDisplay>
        <Spacer size={20}/>
        <KeyboardWrapper>
          <Keyboard
            setAnswer={setAnswer}
            deleteAnswer={deleteAnswer}
            clearAnswer={clearAnswer}
          /> 
        </KeyboardWrapper>
      </QuestionWrapper>   
    </PitchQuizWrapper>
  )
}

const PitchQuizWrapper = styled.div`
  padding: 16px;
  border: 6px double var(--color-gray-300);
  border-radius: 16px;
`

const PlayButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const QuestionWrapper = styled.div`
  width: min-content;
  margin-left: auto;
  margin-right: auto;
`

const KeyboardWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default PitchQuiz
