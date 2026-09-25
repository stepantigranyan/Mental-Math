export const MODES = [
    {
        id: 'ease-mode', 
        text: 'Easy Mode',
        singleDigit: 5,
        twoDigit: 0
    },
    { 
        id: 'medium-mode', 
        text: 'Medium Mode', 
        singleDigit: 3,
        twoDigit: 2
    },
    { 
        id: 'hard-mode', 
        text: 'Hard Mode', 
        singleDigit: 0,
        twoDigit: 5
    }
];

export const DIFFICULTIES = [
    { id: 'slow', interval: 1.5, text: 'Slow Speed' },
    { id: 'medium', interval: 1, text: 'Medium Speed' },
    { id: 'fast', interval: 0.5, text: 'Fast Speed' },
];

export const PAGES = {
    LANDING_PAGE: 'landing-page',
    MODES_PAGE: 'modes-page',
    PROBLEM_PAGE: 'problems-page',
    ANSWER_PAGE: 'answer-page',
    RESULT_PAGE: 'result-page',
};
