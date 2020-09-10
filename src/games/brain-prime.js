import getRandomNumber from '../utils.js';
import game from '../index.js';
import { ANSWERS } from '../constants.js';

const rules = `Answer "${ANSWERS.yes}" if given number is prime. Otherwise answer "${ANSWERS.no}".`;

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

const getCorrectAnswer = (num) => (isPrime(num) ? ANSWERS.yes : ANSWERS.no);

const task = () => {
  const question = getRandomNumber(1, 100);
  const answer = `${getCorrectAnswer(question)}`;

  return [question, answer];
};

const playGame = () => game(task, rules);

export default playGame;
