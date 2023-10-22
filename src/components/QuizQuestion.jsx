import React, { useState } from 'react'
import OptButton from './OptButton'


const QuizQuestion = ({ question, index }) => {

    function decodeString(str) {
        const textArea = document.createElement('textarea')
        textArea.innerHTML = str
        return textArea.value
    }
    return (
        <li key={question.id} className='text-dark-clr flex flex-col gap-2 items-start justify-start border-b-[1px] py-2 w-full border-dark-clr'>
            <p className='text-[1rem] font-semibold'> <span className='text-[14px] font-semibold space-x-1'  >Q {index + 1} : </span > {decodeString(question.question)}</p>
            <div className='flex justify-around w-full'>
                {
                    question.options.map(option => <OptButton key={option} id={option} option={option} />)
                }
            </div>
        </li>
    )
}

export default QuizQuestion
