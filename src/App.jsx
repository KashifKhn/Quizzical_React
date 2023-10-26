import React from 'react'
import { useState } from 'react'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'
import QuizEnd from './components/QuizEnd'

const App = () => {
  const [start, setStart] = useState(false)
  const [isEnd, setIsEnd] = useState(false)
  const [score, setScore] = useState(0)
  const [query, setQuery] = useState({
    category: '',
    difficulty: '',
    type: '',
    amount: '10'
  })

  const handleStart = () => setStart(true);

  const handleOptionsChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value })
  }

  return (
    <main className='flex flex-col items-center justify-center px-4 py-2 text-center w-full min-h-screen main pd'>
      {!start && !isEnd &&
        <HomePage
          handleStart={handleStart}
          query={query}
          handleOptionsChange={handleOptionsChange}
        />}
      {start &&
        <QuizPage
          query={query}
          isEnd={isEnd}
          setIsEnd={setIsEnd}
          setScore={setScore}
          totalQuestions={query.amount}
        />
      }
      {
        isEnd &&
        <QuizEnd
          score={score}
          setScore={setScore}
          setStart={setStart}
          setIsEnd={setIsEnd}
          totalQuestions={query.amount}
        />
      }
    </main>
  )
}

export default App
