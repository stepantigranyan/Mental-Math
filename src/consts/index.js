export const LEVELS = [
    {
        id: 'easy-level',
        text: 'Easy Level',
        singleDigit: 5,
        twoDigit: 0,
    },
    {
        id: 'medium-level',
        text: 'Medium Level',
        singleDigit: 3,
        twoDigit: 2,
    },
    {
        id: 'hard-level',
        text: 'Hard Level',
        singleDigit: 0,
        twoDigit: 5,
    },
];

export const SPEEDS = [
    { id: 'slow', interval: 1500, text: 'Slow Speed' },
    { id: 'medium', interval: 1000, text: 'Medium Speed' },
    { id: 'fast', interval: 500, text: 'Fast Speed' },
];

export const PAGES = {
    LANDING_PAGE: 'landing-page',
    LEVELS_PAGE: 'levels-page',
    PROBLEM_PAGE: 'problems-page',
    ANSWER_PAGE: 'answer-page',
    RESULT_PAGE: 'result-page',
};

export const BUTTON_STYLES = {
    LEVEL_BUTTON: {
        textSize: 'text-md',
        backgroundColorHover: 'hover:bg-amber-700',
        textColorHover: 'hover:text-white',
        backgroundColorChecked: 'has-checked:bg-amber-700',
        textColorChecked: 'has-checked:text-white',
    },

    SPEED_BUTTON: {
        textSize: 'text-sm',
        backgroundColorHover: 'hover:bg-purple-700',
        textColorHover: 'hover:text-white',
        backgroundColorChecked: 'has-checked:bg-purple-700',
        textColorChecked: 'has-checked:text-white',
    },
};
