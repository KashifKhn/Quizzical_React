import React, { useEffect, useState } from 'react'
import { fetchQuizQuestions } from '../api'
import QuizQuestion from '../components/QuizQuestion'

const QuizPage = (props) => {
    const { options } = props
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])
    const [score, setScore] = useState(0)
    const [isComplete, setIsComplete] = useState(false)
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        const fetchApi = async () => {
            const questions = await fetchQuizQuestions({ amount: options.amount, difficulty: options.difficulty, type: options.type, category: options.category })
            setQuestions(questions)
            setAnswers(questions.map((question) => question.correct_answer))
        }
        fetchApi()
    }, [])

    const quizElements = questions.map((question, index) =>
        <QuizQuestion key={question.id} question={question} index={index} />
    )

    return (
        <ul className='list-roman max-sm:w-full  max-w-[550px] w-full flex flex-col text-left items-start justify-start gap-5'>
            {quizElements}
            <button
                type='submit'
                className='bg-dark-clr text-light-clr w-full px-4 py-2 rounded-md mt-4'

            >
                {isComplete ? "Play Again" : "Submit"}</button>
        </ul>
    )
}
export default QuizPage
