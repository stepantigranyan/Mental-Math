// Get Random Integer Number
const generateNumber = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return Math.random() > 0.5 ? randomNumber : randomNumber * -1;
};

// Shuffle
const shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
};

// Settings
class Settings {
    _numbers;
    _interval;
    _personAnswer;

    constructor(singleDigit, twoDigit, interval) {
        this._interval = interval;
        this._numbers = this._initNumbers(singleDigit, twoDigit);
        this._personAnswer = NaN;
    }

    _initNumbers(singleDigit, twoDigit) {
        const count = singleDigit + twoDigit;
        const numbers = Array(count);

        let index = 0;

        for (let i = 0; i < singleDigit; i++) {
            numbers[index++] = generateNumber(1, 9);
        }

        for (let j = 0; j < twoDigit; j++) {
            numbers[index++] = generateNumber(10, 99);
        }

        return shuffle(numbers);
    }

    getInterval() {
        return this._interval;
    }

    getNumbers() {
        return this._numbers.map((number) => number);
    }

    getCorrectAnswer() {
        return this._numbers.reduce((acc, current) => acc + current, 0);
    }

    getPersonsAnswer() {
        return this._personAnswer;
    }

    setPersonAnswer(number) {
        this._personAnswer = number;
    }
}

export default Settings;
