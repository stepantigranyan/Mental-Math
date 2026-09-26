import drawWrapper from '../wrapper/drawWrapper.js';
import drawPageTitle from '../title/drawPageTitle.js';
import drawNavButton from '../buttons/drawNavButton.js';

const drawAnswerPage = (onSubmit) => {
    let answer;
    const wrapper = drawWrapper();
    const title = drawPageTitle('Your answer');

    const inputContainer = document.createElement('div');

    const label = document.createElement('label');
    label.setAttribute('for', 'answer-input');

    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('id', 'answer-input');
    input.classList.add(
        'outline-none',
        'px-5',
        'py-2',
        'border',
        'border-white',
        'border-solid',
        'rounded-xl',
        'text-white',
    );

    const buttonContainer = document.createElement('div');

    const button = drawNavButton('submit-button', 'Submit');
    button.disabled = true;


    input.addEventListener('input', (event) => {
        answer = event.target.value;
        button.disabled = answer === '';

    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && answer !== '') {
            onSubmit(answer);
        }
    });

    button.addEventListener('click', () => {
        onSubmit(answer);
    });

    buttonContainer.append(button);

    label.append(input);
    inputContainer.append(label);

    wrapper.append(title);
    wrapper.append(inputContainer);
    wrapper.append(buttonContainer);

    return wrapper;
};

export default drawAnswerPage;
