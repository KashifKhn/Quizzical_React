// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple

import { nanoid } from 'nanoid'

const BASE_URL = 'https://opentdb.com/api.php?';

export const fetchQuizQuestions = async (query) => {
    const queryParams = [];
    if (query.type !== "")
        queryParams.push(`type=${query.type}`);

    if (query.category !== "")
        queryParams.push(`category=${query.category}`);

    if (query.difficulty !== "")
        queryParams.push(`difficulty=${query.difficulty}`);

    if (query.amount)
        queryParams.push(`amount=${query.amount}`);

    const url = `${BASE_URL}${queryParams.join('&')}`;
    const response = await fetch(url);
    if (!response.ok)
        throw {
            message: "Failed to fetch data from server of questions",
            status: res.status,
            statusText: res.statusText
        }

    const data = await response.json();
    return data.results.map((item) => ({
        id: nanoid(),
        question: item.question,
        answers: item.correct_answer,
        wrongAnswersList: item.incorrect_answers,
        options: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5),
    }));

}


export const fetchCategories = async () => {
    const response = await fetch('https://opentdb.com/api_category.php');
    if (!response.ok)
        throw {
            message: "Failed to fetch data from server of categories",
            status: res.status,
            statusText: res.statusText
        }

    const data = await response.json();
    return data.trivia_categories;
}

