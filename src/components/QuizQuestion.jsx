import React, { useEffect, useState } from 'react';

const QuizQuestion = (props) => {
    const { question, questionNo, updateSelectAnswer, questionId, isEnd } = props;


    const decodeString = (str) => {
        const textArea = document.createElement('textarea');
        textArea.innerHTML = str;
        return textArea.value;
    }

    return (
        <li key={question.id} className='text-dark-clr flex flex-col gap-2 items-start justify-start border-b-[1px] py-2 w-full border-dark-clr'>
            <p className='text-[1rem] font-semibold'>
                <span className='text-[14px] font-semibold space-x-1'>Q {questionNo + 1} :</span>
                {decodeString(question.question)}
            </p>
            <div className='flex justify-around w-full'>
                {
                    question.options.map((option, index) => (
                        <button
                            key={option}
                            className={`text-[10px] font-[500] border-dark-clr border-[1px] px-3 py-1 rounded-lg
                            ${option === question.selectAnswer ? "bg-select-clr" : ""}
                            ${option === question.correctAnswer && isEnd ? "bg-correct-clr" : ""}
                            ${option === question.selectAnswer && option !== question.correctAnswer && isEnd ? "bg-inCorrect-clr" : ""}
                            `}
                            onClick={() => updateSelectAnswer(questionId, option)}
                            disabled={isEnd}
                        >
                            {decodeString(option)}
                        </button>
                    ))
                }
            </div>
        </li>
    );
}

export default QuizQuestion;
