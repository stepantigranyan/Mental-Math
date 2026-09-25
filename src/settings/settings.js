// Get Random Integer Number
const randomIntNumberFromInterval = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return Math.random() > 0.5 ? randomNumber : randomNumber * (-1);
};

// Shuffle
const shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
}

// Settings
class Settings {
    #numbers;
    #interval;
    #personAnswer;

    constructor(singleDigit, twoDigit, interval) {
        this.#interval = interval;
        this.#numbers = this._initNumbers(singleDigit, twoDigit);
        this.#personAnswer = NaN;
    }

    _initNumbers(singleDigit, twoDigit) {
        const count = singleDigit + twoDigit;
        const numbers = Array(count);

        let index = 0;

        for(let i = 0; i < singleDigit; i++) {
            numbers[index++] = randomIntNumberFromInterval(1, 9);
        }

        for(let j = 0; j < twoDigit; j++) {
            numbers[index++] = randomIntNumberFromInterval(10, 99);
        }

        return shuffle(numbers);
    }

    getInterval() {
        return this.#interval;
    }

    getNumbers() {
        return this.#numbers.map((number) => number);
    }

    getPersonAnswer() {
        return this.#personAnswer;
    }

    setPersonAnswer(number) {
        this.#personAnswer = number;
    }
}

export default Settings;