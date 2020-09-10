import getRandomNumber from '../utils.js';
import game from '../index.js';
import { ANSWERS } from '../constants.js';

const rules = `Answer "${ANSWERS.yes}" if the number is even, otherwise answer "${ANSWERS.no}".`;

const isEven = (number) => (number % 2 === 0);

const getCorrectAnswer = (num) => (isEven(num) ? ANSWERS.yes : ANSWERS.no);

const task = () => {
  const question = getRandomNumber(0, 100);
  const answer = getCorrectAnswer(question);

  return [question, answer];
};

const playGame = () => game(task, rules);

export default playGame;
