import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const ANSWERS = {
  yes: 'yes',
  no: 'no',
};

const description = `Answer "${ANSWERS.yes}" if given number is prime. Otherwise answer "${ANSWERS.no}".`;

const isPrime = (num) => {
  for (let i = 2; i < Math.floor(Math.sqrt(num)); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

const getCorrectAnswer = (num) => (isPrime(num) ? ANSWERS.yes : ANSWERS.no);

const generateRoundData = () => {
  const question = getRandomNumber(1, 100);
  const answer = `${getCorrectAnswer(question)}`;

  return [question, answer];
};

const playGame = () => runGame(generateRoundData, description);

export default playGame;
