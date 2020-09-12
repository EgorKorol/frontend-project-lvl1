import readlineSync from 'readline-sync';

const LEVELS_COUNT = 3;

const runGame = (getRoundInfo, description) => {
  /**
   * Greetings
   */
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  /**
   * Rules
   */
  console.log(description);

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

export default runGame;
