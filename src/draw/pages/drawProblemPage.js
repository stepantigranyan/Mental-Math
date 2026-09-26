import drawWrapper from '../wrapper/drawWrapper.js';

const timerMessage = ['Ready', 'Get Set', 'Go'];


const sleep = (duration) => {
    return new Promise((resolve) => setTimeout(resolve, duration));
};

const countDown = (container) => {
    let i = 1;
    container.innerText = timerMessage[0];

    return setInterval(() => {
        container.innerText = timerMessage[i++];
    }, 1000);
};

const drawNumbers = (container, numbers, delay) => {
    let i = 0;

    return setInterval(() => {
        container.classList.toggle('text-white');
        container.classList.toggle('text-amber-500');
        container.innerText = numbers[i++];
    }, delay);
};

const runInterval = async (container, numbers, delay, navigate) => {
    let inetvalId;

    inetvalId = countDown(container);
    await sleep(2000);
    clearInterval(inetvalId);

    inetvalId = drawNumbers(container, numbers, delay, navigate);
    await sleep(numbers.length * delay);
    clearInterval(inetvalId);

    navigate();
}

const drawProblemPage = (settings, navigate) => {
    const numbers = settings.getNumbers();
    const interval = settings.getInterval();

    const wrapper = drawWrapper();

    const numberContainer = document.createElement('span');
    numberContainer.classList.add('text-white', 'text-7xl');

    runInterval(numberContainer, numbers, interval, navigate);

    wrapper.append(numberContainer);

    return wrapper;
};

export default drawProblemPage;
