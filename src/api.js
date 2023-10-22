// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple

const BASE_URL = 'https://opentdb.com/api.php?';
export const fetchQuizQuestions = async (query) => {
    let response;
    if (query.type === "" && query.category === "" && query.difficulty === "") {
        response = await fetch(`${BASE_URL}amount=${query.amount}`);
    }
    else if (query.type === "" && query.category === "") {
        response = await fetch(`${BASE_URL}amount=${query.amount}&difficulty=${query.difficulty}`);
    }
    else if (query.type === "" && query.difficulty === "") {
        response = await fetch(`${BASE_URL}amount=${query.amount}&category=${query.category}`);
    }
    else if (query.category === "" && query.difficulty === "") {
        response = await fetch(`${BASE_URL}amount=${query.amount}&type=${query.type}`);
    }
    else if (query.type === "") {
        response = await fetch(`${BASE_URL}amount=${query.amount}&category=${query.category}&difficulty=${query.difficulty}`);
    }
    else if (query.category === "") {
        response = await fetch(`${BASE_URL}amount=${query.amount}&type=${query.type}&difficulty=${query.difficulty}`);
    }
    else if (query.difficulty === "") {
        response = await fetch(`${BASE_URL}amount=${query.amount}&type=${query.type}&category=${query.category}`);
    }
    else {
        response = await fetch(`${BASE_URL}amount=${query.amount}&type=${query.type}&category=${query.category}&difficulty=${query.difficulty}`);
    }

    const data = await response.json();
    return data.results.map((item) => ({
        id: `${new Date().getMilliseconds() + Math.random() % 100}`,
        question: item.question,
        answers: item.correct_answer,
        wrongAnswersList: item.incorrect_answers,
        options: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5),
    }));
}


export const fetchCategories = async () => {
    const response = await fetch('https://opentdb.com/api_category.php');
    const data = await response.json();
    return data.trivia_categories;
}

