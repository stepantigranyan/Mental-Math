import drawWrapper from "../wrapper/drawWrapper.js";
import drawPageTitle from "../title/drawPageTitle.js";
import drawNavButton from "../buttons/drawNavButton.js";

const drawResultPage = (personAnswer, correctAnswer, fn) => {
    const wrapper = drawWrapper();
    const title = drawPageTitle(personAnswer === correctAnswer ? 'You win' : 'You lose');

    const answersContainer = document.createElement('div');
    answersContainer.classList.add('flex', 'justify-center', 'gap-x-5');

    const correctAnswerSpan = document.createElement("span");
    correctAnswerSpan.classList.add('text-white', 'text-shadow-lg', 'text-shadow-black');
    correctAnswerSpan.innerText = `Correct answer: ${correctAnswer}`;

    const personsAnswerSpan = document.createElement("span");
    personsAnswerSpan.classList.add(personAnswer === correctAnswer ? 'text-green-600' : 'text-red-600', 'text-shadow-lg', 'text-shadow-black');
    personsAnswerSpan.innerText = `Your answer: ${personAnswer}`;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('flex', 'justify-center');

    const button = drawNavButton('restart-button', 'Restart');

    button.addEventListener('click', fn);

    buttonContainer.append(button);

    answersContainer.append(correctAnswerSpan);
    answersContainer.append(personsAnswerSpan);

    wrapper.append(title);
    wrapper.append(answersContainer);
    wrapper.append(buttonContainer);

    return wrapper;
}

export default drawResultPage;