import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const ANSWERS = {
  yes: 'yes',
  no: 'no',
};

const description = `Answer "${ANSWERS.yes}" if the number is even, otherwise answer "${ANSWERS.no}".`;

const isEven = (number) => (number % 2 === 0);

const getCorrectAnswer = (num) => (isEven(num) ? ANSWERS.yes : ANSWERS.no);

const generateRoundData = () => {
  const question = getRandomNumber(0, 100);
  const answer = getCorrectAnswer(question);

  return [question, answer];
};

const playGame = () => runGame(generateRoundData, description);

export default playGame;
