import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const getAnswer = () => readlineSync.question('Your answer: ');

export const showErrorMessages = (answer, correctAnswer, name) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${name}!`);
};
