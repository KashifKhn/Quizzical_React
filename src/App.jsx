import React from 'react'
import { useState } from 'react'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'

const App = () => {
  const [start, setStart] = useState(true)
  const [options, setOptions] = useState({
    category: '',
    difficulty: '',
    type: '',
    amount: '10'
  })

  const handleStart = () => setStart(true);

  const handleOptionsChange = (e) => {
    console.log(e.target.name , " = ",e.target.value)
    setOptions({ ...options, [e.target.name]: e.target.value })
  }

  return (
    <main className='flex flex-col items-center justify-center px-4 py-2 text-center w-full min-h-screen main pd'>
     { !start &&
      <HomePage
        handleStart={handleStart}
        options={options}
        handleOptionsChange={handleOptionsChange}
      />}
      { start &&
        <QuizPage
          options={options}
        />
      }
    </main>
  )
}

export default App
