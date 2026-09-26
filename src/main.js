import { PAGES } from './consts/index.js';

import Settings from './settings/settings.js';

import drawLandingPage from './draw/pages/drawLandingPage.js';
import drawLevelsPage from './draw/pages/drawLevelsPage.js';
import drawProblemPage from './draw/pages/drawProblemPage.js';
import drawAnswerPage from './draw/pages/drawAnswerPage.js';
import drawResultPage from './draw/pages/drawResultPage.js';

const mainPage = document.getElementById('main');

// State
let settings = null;

// Handle Functions
const getStarted = () => {
    navigation(PAGES.LEVELS_PAGE);
};

const startGame = (singleDigit, twoDigit, interval) => {
    settings = new Settings(singleDigit, twoDigit, interval);
    navigation(PAGES.PROBLEM_PAGE);
};

const autoNavigateToAnswerPage = () => {
    navigation(PAGES.ANSWER_PAGE);
};

const compareAnswer = (personAnswer) => {
    settings.setPersonAnswer(+personAnswer);
    navigation(PAGES.RESULT_PAGE);
};

const restartGame = () => {
    settings = null;
    navigation(PAGES.LEVELS_PAGE);
};

// Navigation
function navigation(page) {
    mainPage.innerHTML = '';

    switch (page) {
        case PAGES.LEVELS_PAGE:
            const levelsPage = drawLevelsPage(startGame);
            mainPage.append(levelsPage);
            return;
        case PAGES.PROBLEM_PAGE:
            const problemPage = drawProblemPage(
                settings,
                autoNavigateToAnswerPage,
            );
            mainPage.append(problemPage);
            return;
        case PAGES.ANSWER_PAGE:
            const answerPage = drawAnswerPage(compareAnswer);
            mainPage.append(answerPage);
            document.getElementById('answer-input').focus();
            return;
        case PAGES.RESULT_PAGE:
            const personAnswer = settings.getPersonsAnswer();
            const correctAnswer = settings.getCorrectAnswer();
            const restartPage = drawResultPage(
                personAnswer,
                correctAnswer,
                restartGame,
            );
            mainPage.append(restartPage);
            return;
        default:
            const landingPage = drawLandingPage(getStarted);
            mainPage.append(landingPage);
            return;
    }
}

// Start
const start = () => {
    navigation();
};

start();
