// Pages
const landingPage = document.getElementById('landing-page');
const modesPage = document.getElementById('modes-page');
const mainPage = document.getElementById('main-page');
const answerPage = document.getElementById('answer-page');
const restartPage = document.getElementById('restart-page');

// Navigation
class Navigation {
    toLandingPage(event) {
        restartPage.classList.add('hidden');
        landingPage.classList.remove('hidden');
        event.currentTarget.removeEventListener('click', this.toLandingPage);
    }

    toModesPage(event) {
        landingPage.classList.add('hidden');
        modesPage.classList.remove('hidden');
        event.currentTarget.removeEventListener('click', this.toModesPage);

    }

    toMainPage(event) {
        modesPage.classList.add('hidden');
        mainPage.classList.remove('hidden');
        event.currentTarget.removeEventListener('click', this.toMainPage);

    }

    toAnswerPage(event) {
        mainPage.classList.add('hidden');
        answerPage.classList.remove('hidden');
                event.currentTarget.removeEventListener('click', this.toAnswerPage);

    }

    toRestartPage(event) {
        answerPage.classList.add('hidden');
        restartPage.classList.remove('hidden');
        event.currentTarget.removeEventListener('click', this.toRestartPage);

    }
}

export default new Navigation();