import drawWrapper from '../wrapper/drawWrapper.js';
import drawPageTitle from '../title/drawPageTitle.js';
import drawNavButton from '../buttons/drawNavButton.js';

// Draw Landing Page
const drawLandingPage = (onStart) => {
    const wrapper = drawWrapper();
    const title = drawPageTitle('Mental Math');

    const buttonContainer = document.createElement('div');

    const button = drawNavButton('get-started-button', 'Get Started');

    buttonContainer.append(button);

    button.addEventListener('click', onStart);

    wrapper.append(title);
    wrapper.append(buttonContainer);

    return wrapper;
};

export default drawLandingPage;
