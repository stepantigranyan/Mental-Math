import drawWrapper from "../wrapper/drawWrapper.js";

const timerMessage = ['Ready', 'Get Set', 'Go'];

const runInterval = (duration, delay, callback) => {
    return new Promise((resolve) => {
        const start = Date.now();
        const interval = setInterval(() => {
            callback();

            if(Date.now() - start >= duration) {
                clearInterval(interval);
                resolve();
            }
        }, delay)
    });
};

const drawProblemPage = (settings, navigate) => {
    const numbers = settings.getNumbers();
    const interval = settings.getInterval();

    let timerIndex = 0;

    const wrapper = drawWrapper();

    const numberContainer = document.createElement('span');
    numberContainer.classList.add('text-white', 'text-7xl');

    runInterval(3000, 1000, () => {
        numberContainer.innerText = `${timerMessage[timerIndex]}`;
        timerIndex++;
    }).then(() => {
        let index = 0;
        return runInterval((numbers.length + 1) * interval * 1000, interval * 1000, () => {
            numberContainer.classList.toggle('text-white');
            numberContainer.classList.toggle('text-amber-500');
            numberContainer.innerText = `${numbers[index]}`;
            index++;
        });
    }).then(() => {
        navigate();
    });

    wrapper.append(numberContainer);

    return wrapper;
};

export default drawProblemPage;