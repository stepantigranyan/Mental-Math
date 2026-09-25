import drawWrapper from '../wrapper/drawWrapper.js';
import drawPageTitle from '../title/drawPageTitle.js';
import drawNavButton from '../buttons/drawNavButton.js';

import navigation from '../../navigation/navigation.js';

const landingPage = document.getElementById('landing-page');

// Draw Landing Page
const drawLandingPage = () => {
    const wrapper = drawWrapper();
    const title = drawPageTitle('Mental Math');

    const buttonContainer = document.createElement('div');

    const button = drawNavButton('get-started-button', 'Get Started');

    buttonContainer.append(button);

    button.addEventListener('click', navigation.toModesPage);

    wrapper.append(title);
    wrapper.append(buttonContainer);

    landingPage.append(wrapper)
};

export default drawLandingPage;