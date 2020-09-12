import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';

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
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateRoundData = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, operators.length)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = getCorrectAnswer(num1, num2, operator).toString();

  return [question, answer];
};

const playGame = () => runGame(generateRoundData, description);

export default playGame;
