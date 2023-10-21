import React from 'react'
import { useState } from 'react'

const HomePage = (props) => {
  const {handleStart, options, handleOptionsChange } = props


  function handleSubmit(e) {
    e.preventDefault()
    console.log('submitted')
  }

  return (
    <div className='flex flex-col items-center justify-center w-[250px]'>
      <h1 className='text-[2rem] font-bold text-dark-clr p-1 mb-4' >Quizzical</h1>
      <form onSubmit={handleSubmit} className='flex flex-col items-start justify-start w-full'>
        <label htmlFor='category' className='text-[1rem] font-semibold py-2 text-dark-clr'>Category:</label>
        <select
          className='bg-stone-100 px-4 py-2 rounded-md border-2 border-dark-clr w-full'
          name="category"
          id="category"
          value={options.category}
          onChange={handleOptionsChange}
        >
          <option value="">Any</option>
          <option value="General Knowledge">General Knowledge</option>
          <option value="Sport">Sport</option>
          <option value="History">History</option>
          <option value="Science">Science</option>
          <option value="Geography">Geography</option>
          <option value="Music">Music</option>
          <option value="Film">Film</option>
        </select>
        <label htmlFor='difficulty' className='text-[1rem] font-semibold py-2 text-dark-clr'>Difficulty:</label>
        <select className='bg-stone-100 px-4 py-2 rounded-md border-2 border-dark-clr w-full'
          name="difficulty"
          id="difficulty"
          value={options.difficulty}
          onChange={handleOptionsChange}
        >
          <option value="">Any</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <label htmlFor='type' className='text-[1rem] font-semibold py-2 text-dark-clr'>Type:</label>
        <select className='bg-stone-100 px-4 py-2 rounded-md border-2 border-dark-clr w-full'
          name="type"
          id="type"
          value={options.type}
          onChange={handleOptionsChange}
        >
          <option value="">Any</option>
          <option value="Multiple Choice">Multiple Choice</option>
          <option value="True / False">True / False</option>
        </select>
        <label htmlFor='amount' className='text-[1rem] font-semibold py-2 text-dark-clr'>Questions:</label>
        <select className='bg-stone-100 px-4 py-2 rounded-md border-2 border-dark-clr w-full'
          name="amount"
          id="amount"
          value={options.amount}
          onChange={handleOptionsChange}
        >
          <option value="5">05</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">40</option>
        </select>
        <button
          type='submit'
          className='bg-dark-clr text-light-clr w-full px-4 py-2 rounded-md mt-4'
          onClick={handleStart}

        >
          Submit</button>
      </form>
    </div>
  )
}

export default HomePage
