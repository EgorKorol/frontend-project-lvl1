import getRandomNumber from '../utils.js';
import game from '../index.js';

const rules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getCorrectAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 0;
  }
};

const task = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, 3)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = `${getCorrectAnswer(num1, num2, operator)}`;

  return [question, answer];
};

const playGame = () => game(task, rules);

export default playGame;
