import React, { useEffect, useState } from 'react'
import { fetchCategories } from '../api'


const HomePage = (props) => {
  const { handleStart,query, handleOptionsChange } = props
  const [categories, setCategories] = useState([])


  function handleSubmit(e) {
    e.preventDefault()
  }

  useEffect(() => {
    const fetchApi = async () => {
      const categories = await fetchCategories()
      setCategories(categories)
    }
    fetchApi()
  }, [])
  console.log(categories)

  const categoriesElement = categories.map((category) => (
    <option value={category.id} key={category.id}>{category.name}</option>
  ))


  return (
    <div className='flex flex-col items-center justify-center w-[250px]'>
      <h1 className='text-[2rem] font-bold text-dark-clr p-1 mb-4' >Quizzical</h1>
      <form onSubmit={handleSubmit} className='flex flex-col items-start justify-start w-full'>
        <label htmlFor='category' className='text-[1rem] font-semibold py-2 text-dark-clr'>Category:</label>
        <select
          className='bg-stone-100 px-4 py-2 rounded-md border-2 border-dark-clr w-full'
          name="category"
          id="category"
          value={query.category}
          onChange={handleOptionsChange}
        >
          <option value="">Any</option>
          {categoriesElement}
        </select>
        <label htmlFor='difficulty' className='text-[1rem] font-semibold py-2 text-dark-clr'>Difficulty:</label>
        <select className='bg-stone-100 px-4 py-2 rounded-md border-2 border-dark-clr w-full'
          name="difficulty"
          id="difficulty"
          value={query.difficulty}
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
          value={query.type}
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
          value={query.amount}
          onChange={handleOptionsChange}
        >
          <option value="5">05</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
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
