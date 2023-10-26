import React, { useEffect, useState } from 'react'
import { fetchQuizQuestions } from '../api'
import QuizQuestion from '../components/QuizQuestion'

const QuizPage = (props) => {
    const { query } = props
    const [questions, setQuestions] = useState([])
    const [selectQuestion, setSelectQuestion] = useState([])
    const [score, setScore] = useState(0)

    useEffect(() => {
        const fetchApi = async () => {
            const questions = await fetchQuizQuestions(
                {
                    amount: query.amount,
                    difficulty: query.difficulty,
                    type: query.type,
                    category: query.category
                }
            )
            setQuestions(questions)
            setSelectQuestion(
                questions.map((question) => ({
                    questionId: question.id,
                    question: question.question,
                    options: question.options,
                    correctAnswer: question.correctAnswer,
                    selectAnswer: ""
                }))
            )
        }
        fetchApi()
    }, [])

    function updateSelectAnswer(questionId, selectAnswer) {
        const newSelectQuestion = selectQuestion.map((question) => {
            if (question.questionId === questionId) {
                return { ...question, selectAnswer }
            }
            return question
        })
        setSelectQuestion(newSelectQuestion)
    }
    console.log(selectQuestion)
    const quizElements = selectQuestion.map((question, index) =>
        <QuizQuestion
            key={question.questionId}
            questionId={question.questionId}
            question={question}
            questionNo={index}
            selectAnswer={question.selectAnswer}
            updateSelectAnswer={updateSelectAnswer}
        />
    )

    if (questions.length === 0) return <div className='text-[1rem] text-dark-clr font-semibold'>Loading...</div>
    return (
        <div className="flex flex-col items-center justify-center">
            <ul className='list-roman max-sm:w-full  max-w-[550px] w-full flex flex-col text-left items-start justify-start gap-5'>
                {quizElements}
            </ul>
            <button
                type='submit'
                className='bg-dark-clr text-light-clr w-full px-4 py-2 rounded-md mt-4'
            >
                {"Submit"}
            </button>
        </div>
    )
}
export default QuizPage
