import getRandomNumber from '../utils.js';
import game from '../index.js';

const rules = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (start, step, length) => {
  let progression = [];

  for (let i = 0; i < length; i += 1) {
    progression = [...progression, start + step * i];
  }

  return progression;
};

const task = () => {
  const startNumber = getRandomNumber(1, 100);
  const skipIndex = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const progression = getProgression(startNumber, step, progressionLength);
  const answer = `${progression.splice(skipIndex, 1, '..')}`;
  const question = progression.join(' ');

  return [question, answer];
};

const playGame = () => game(task, rules);

export default playGame;
