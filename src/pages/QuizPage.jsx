import React, { useEffect, useState } from 'react'
import { fetchQuizQuestions } from '../api'
import QuizQuestion from '../components/QuizQuestion'

const QuizPage = (props) => {
    const { query, isEnd, setIsEnd, setScore } = props
    const [selectQuestion, setSelectQuestion] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true)
            try {
                const questions = await fetchQuizQuestions(
                    {
                        amount: query.amount,
                        difficulty: query.difficulty,
                        type: query.type,
                        category: query.category
                    }
                )
                console.log(questions);
                setSelectQuestion(
                    questions.map((question) => ({
                        questionId: question.id,
                        question: question.question,
                        options: question.options,
                        correctAnswer: question.answers,
                        selectAnswer: ""
                    }))
                )
            }
            catch (err) {
                setError(err)
            }
            finally {
                setLoading(false)
            }
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

    function allAnswerSelected() {
        let allSelected = true
        selectQuestion.forEach((question) => {
            if (question.selectAnswer === "") {
                allSelected = false
            }
        })
        return allSelected
    }

    function checkAnswer() {
        if (!allAnswerSelected()) return
        setIsEnd(true)
        selectQuestion.forEach((question) => {
            if (question.selectAnswer === question.correctAnswer) {
                setScore(oldScore => oldScore + 1)
            }
        })
    }

    const quizElements = selectQuestion.map((question, index) =>
        <QuizQuestion
            key={question.questionId}
            questionId={question.questionId}
            question={question}
            questionNo={index}
            selectAnswer={question.selectAnswer}
            updateSelectAnswer={updateSelectAnswer}
            isEnd={isEnd}
            setIsEnd={setIsEnd}
        />
    )

    if (loading) return <p className='text-lg'>Loading...</p>
    if (error) return <p className='text-lg'>{error.message} <br/>!Please Reload!</p>
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <ul className='list-roman max-sm:w-full mb-12  max-w-[550px] w-full flex flex-col text-left items-start justify-start gap-5'>
                {quizElements}
            </ul>
            {
                !isEnd && <button
                    type='button'
                    className='bg-dark-clr text-light-clr px-8 py-2 rounded-md mt-4'
                    onClick={checkAnswer}
                >
                    Submit
                </button>}
        </div>
    )
}
export default QuizPage
