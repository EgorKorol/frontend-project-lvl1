import getRandomNumber from '../utils.js';
import game from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getCorrectAnswer = (num1, num2) => (num1 ? getCorrectAnswer(num2 % num1, num1) : num2);

const task = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const answer = `${getCorrectAnswer(num1, num2)}`;

  return [question, answer];
};

const playGame = () => game(task, rules);

export default playGame;
