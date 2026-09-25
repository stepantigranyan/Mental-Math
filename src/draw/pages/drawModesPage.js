import { MODES } from '../../consts/index.js';
import Settings from '../../settings/settings.js';

import drawWrapper from '../wrapper/drawWrapper.js';
import drawPageTitle from '../title/drawPageTitle.js';
import drawModeButton from '../buttons/drawModeButton.js';
import drawNavButton from '../buttons/drawNavButton.js';

import navigation from '../../navigation/navigation.js';

const modesPage = document.getElementById('modes-page');

// Draw Modes Page
const drawModesPage = () => {
    const wrapper = drawWrapper();
    const title = drawPageTitle('Choose game mode');

    const modesButtonContainer = document.createElement('div');
    modesButtonContainer.classList.add('flex', 'justify-center', 'gap-x-5');

    const buttonContainer = document.createElement('div');
    const button = drawNavButton('start-button', 'Started');

    MODES.forEach(mode => {
        const modeButton = drawModeButton(mode.id, mode.text);

        modeButton.addEventListener('click', () => {
            console.log(new Settings(mode));
        })

        modesButtonContainer.append(modeButton);
    })

    button.addEventListener('click', navigation.toMainPage);

    buttonContainer.append(button);

    wrapper.append(title);
    wrapper.append(modesButtonContainer);
    wrapper.append(buttonContainer);

    modesPage.append(wrapper);
};

export default drawModesPage;