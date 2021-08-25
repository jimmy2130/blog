import React from 'react'
// reference: auth-context.js from advanced-react-patterns
const input = [
  {
    soundPath: '/butterfly.mp3',
    correctAns: '🐶🐶🐭🐱🐱🐭🐶🐭🐱🐶',
    explanation: '兒歌，蝴蝶，C大調',
  },
]

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

const PitchQuizContext = React.createContext()

function PitchQuizProvider(props) {
  const [answer, rawSetAnswer] = React.useState('')
  const [isCorrect, setIsCorrect] = React.useState(null)
  const submitted = isCorrect !== null
  const setAnswer = (id) => rawSetAnswer(answer + EMOJI[id])
  const deleteAnswer = () => rawSetAnswer(answer.slice(0, -2))
  const clearAnswer = () => rawSetAnswer('')
  const checkAnswer = () => setIsCorrect(answer === question.correctAns)

  const [questionIndex, setQuestionIndex] = React.useState(0)
  const question = input[questionIndex]

  const value = {
    answer,
    isCorrect,
    submitted,
    setAnswer,
    deleteAnswer,
    clearAnswer,
    checkAnswer,
    question,
  }
  return <PitchQuizContext.Provider value={value} {...props} />
}

function usePitchQuiz() {
  const context = React.useContext(PitchQuizContext)
  if(!context) {
    throw new Error('usePitchQuiz must be used within PitchQuizProvider')
  }
  return context
}

export {
  PitchQuizProvider,
  usePitchQuiz,
  EMOJI
}