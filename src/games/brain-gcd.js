import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => (num1 ? findGcd(num2 % num1, num1) : num2);

const generateRoundData = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const answer = findGcd(num1, num2).toString();

  return [question, answer];
};

const playGame = () => runGame(generateRoundData, description);

export default playGame;
