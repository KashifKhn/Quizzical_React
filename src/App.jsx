import React from 'react'
import { useState } from 'react'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'

const App = () => {
  const [start, setStart] = useState(true)
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
     { !start &&
      <HomePage
        handleStart={handleStart}
        query={query}
        handleOptionsChange={handleOptionsChange}
      />}
      { start &&
        <QuizPage
          query={query}
        />
      }
    </main>
  )
}

export default App
