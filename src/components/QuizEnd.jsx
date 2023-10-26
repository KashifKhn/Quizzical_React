import React from 'react'

const QuizEnd = (props) => {
    const { score, setScore, setStart, setIsEnd,  totalQuestions} = props
    function handleOnClick() {
        setStart(false)
        setIsEnd(false)
        setScore(0)
    }
  return (
    <div className='flex flex-col items-center justify-center w-[250px] gap-4'>
      <h4
      className='text-dark-clr font-semibold text-[1rem]'
      >You scored {score}/{totalQuestions} correct answers </h4>
      <button
      className='bg-dark-clr text-light-clr w-full px-4 py-2 rounded-md mt-4'
      onClick={handleOnClick}
      >Play Again</button>
    </div>
  )
}

export default QuizEnd
