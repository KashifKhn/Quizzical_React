import React from 'react'

const HomePage = (props) => {
  const { handleStart, options, handleOptionsChange } = props


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
          <option value="9">General Knowledge</option>
          <option value="10">Sport</option>
          <option value="11">History</option>
          <option value="12">Science</option>
          <option value="13">Geography</option>
          <option value="14">Music</option>
          <option value="15">Film</option>
        </select>
        <label htmlFor='difficulty' className='text-[1rem] font-semibold py-2 text-dark-clr'>Difficulty:</label>
        <select className='bg-stone-100 px-4 py-2 rounded-md border-2 border-dark-clr w-full'
          name="difficulty"
          id="difficulty"
          value={options.difficulty}
          onChange={handleOptionsChange}
        >
          <option value="">Any</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <label htmlFor='type' className='text-[1rem] font-semibold py-2 text-dark-clr'>Type:</label>
        <select className='bg-stone-100 px-4 py-2 rounded-md border-2 border-dark-clr w-full'
          name="type"
          id="type"
          value={options.type}
          onChange={handleOptionsChange}
        >
          <option value="">Any</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
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
      </form>
      <button
        type='submit'
        className='bg-dark-clr text-light-clr w-full px-4 py-2 rounded-md mt-4'
        onClick={handleStart}

      >
        Submit</button>
    </div>
  )
}

export default HomePage
