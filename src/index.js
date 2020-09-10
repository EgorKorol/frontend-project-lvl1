import readlineSync from 'readline-sync';
import { LEVELS_COUNT } from './constants.js';

const game = (getRoundInfo, rules) => {
  /**
   * Greetings
   */
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  /**
   * Rules
   */
  console.log(rules);

  /**
   * Round mechanic
   */
  const inner = (counter) => {
    if (counter > LEVELS_COUNT) {
      /**
       * Win
       */
      console.log(`Congratulations, ${name}`);

      return;
    }

    const [question, correctAnswer] = getRoundInfo();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);

      return;
    }

    console.log('Correct!');

    inner(counter + 1);
  };

  inner(1);
};

export default game;
