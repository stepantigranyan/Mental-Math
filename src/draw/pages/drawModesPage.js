import { MODES, DIFFICULTIES } from '../../consts/index.js';


import drawWrapper from '../wrapper/drawWrapper.js';
import drawPageTitle from '../title/drawPageTitle.js';
import drawDiffButton from '../buttons/drawDiffButton.js';
import drawModeButton from '../buttons/drawModeButton.js';
import drawNavButton from '../buttons/drawNavButton.js';

// Draw Modes Page
const drawModesPage = (fnForButton) => {
    let newMode = null;
    let newDiff = null;

    let modeDisable = true;
    let diffDisable = true;

    const wrapper = drawWrapper();
    const title = drawPageTitle('Choose game mode');

    const difficultyContainer = document.createElement('div');
    difficultyContainer.classList.add('flex', 'justify-center', 'gap-x-5');

    const modesButtonContainer = document.createElement('div');
    modesButtonContainer.classList.add('flex', 'justify-center', 'gap-x-5');

    const buttonContainer = document.createElement('div');
    const button = drawNavButton('start-button', 'Start');
    button.disabled = true;

    DIFFICULTIES.forEach((diff) => {
        const diffButton = drawDiffButton(diff.id, diff.text);

        diffButton.addEventListener('click', (event) => {
            newDiff = DIFFICULTIES.find(diff => diff.id === event.currentTarget.dataset.id);
            diffDisable = false;
            button.disabled = button.disabled = modeDisable || diffDisable;
        });

        difficultyContainer.append(diffButton);
    });

    MODES.forEach(mode => {
        const modeButton = drawModeButton(mode.id, mode.text);

        modeButton.addEventListener('click', (event) => {
            newMode = MODES.find(mode => mode.id === event.currentTarget.dataset.id);
            modeDisable = false;
            button.disabled = modeDisable || diffDisable;
        });

        modesButtonContainer.append(modeButton);
    });

    button.addEventListener('click', () => {
        fnForButton(newMode.singleDigit, newMode.twoDigit, newDiff.interval);
    });

    buttonContainer.append(button);

    wrapper.append(title);
    wrapper.append(difficultyContainer);
    wrapper.append(modesButtonContainer);
    wrapper.append(buttonContainer);

    return wrapper;
};

export default drawModesPage;