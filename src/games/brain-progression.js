import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (start, step, length) => Array
  .from({ length }, (el, index) => start + step * index);

const generateRoundData = () => {
  const startNumber = getRandomNumber(1, 100);
  const skipIndex = getRandomNumber(1, progressionLength);
  const step = getRandomNumber(1, progressionLength);
  const progression = getProgression(startNumber, step, progressionLength);
  const answer = progression.splice(skipIndex, 1, '..').toString();
  const question = progression.join(' ');

  return [question, answer];
};

const playGame = () => runGame(generateRoundData, description);

export default playGame;
