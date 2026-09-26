import { LEVELS, SPEEDS, BUTTON_STYLES } from '../../consts/index.js';

import drawWrapper from '../wrapper/drawWrapper.js';
import drawPageTitle from '../title/drawPageTitle.js';
import drawRadioButton from '../buttons/drawRadioButton.js';
import drawNavButton from '../buttons/drawNavButton.js';

// Draw Levels Page
const drawLevelsPage = (onStart) => {
    let newLevel = null;
    let newSpeed = null;

    let levelDisable = true;
    let speedDisable = true;

    const wrapper = drawWrapper();
    const title = drawPageTitle('Choose game level');

    const speedContainer = document.createElement('div');
    speedContainer.classList.add('flex', 'justify-center', 'gap-x-5');

    const levelsButtonContainer = document.createElement('div');
    levelsButtonContainer.classList.add('flex', 'justify-center', 'gap-x-5');

    const buttonContainer = document.createElement('div');
    const button = drawNavButton('start-button', 'Start');
    button.disabled = true;

    SPEEDS.forEach((speed) => {
        const speedButton = drawRadioButton(
            speed.id,
            speed.text,
            'speed',
            BUTTON_STYLES.SPEED_BUTTON,
        );

        speedButton.addEventListener('click', (event) => {
            newSpeed = SPEEDS.find(
                (speed) => speed.id === event.currentTarget.dataset.id,
            );
            speedDisable = false;
            button.disabled = levelDisable || speedDisable;
        });

        speedContainer.append(speedButton);
    });

    LEVELS.forEach((level) => {
        const levelButton = drawRadioButton(
            level.id,
            level.text,
            'level',
            BUTTON_STYLES.LEVEL_BUTTON,
        );

        levelButton.addEventListener('click', (event) => {
            newLevel = LEVELS.find(
                (level) => level.id === event.currentTarget.dataset.id,
            );
            levelDisable = false;
            button.disabled = levelDisable || speedDisable;
        });

        levelsButtonContainer.append(levelButton);
    });

    button.addEventListener('click', () => {
        onStart(newLevel.singleDigit, newLevel.twoDigit, newSpeed.interval);
    });

    buttonContainer.append(button);

    wrapper.append(title);
    wrapper.append(speedContainer);
    wrapper.append(levelsButtonContainer);
    wrapper.append(buttonContainer);

    return wrapper;
};

export default drawLevelsPage;
