#!/usr/bin/env node

import readlineSync from 'readline-sync';

const answers = {
  yes: 'yes',
  no: 'no',
};

const greeting = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

const showRules = () => {
  console.log(`Answer "${answers.yes}" if the number is even, otherwise answer "${answers.no}".`);
};

const getRandomNumber = () => Math.floor(Math.random() * 100);

const askQuestion = (number) => {
  console.log(`Question: ${number}`);
};

const getAnswer = () => readlineSync.question('Your answer: ');

const game = () => {
  const name = greeting();

  showRules();

  let correctAnswers = 0;

  const round = () => {
    if (correctAnswers === 3) {
      return;
    }

    const randomNumber = getRandomNumber();
    const correctAnswer = randomNumber % 2 === 0 ? answers.yes : answers.no;

    askQuestion(randomNumber);
    const answer = getAnswer();

    if (answer === correctAnswer) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      if (correctAnswers !== 0) {
        correctAnswers = 0;
      }

      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
    }

    round();
  };

  round();

  console.log(`Congratulations, ${name}`);
};

game();
