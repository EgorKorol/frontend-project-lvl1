#!/usr/bin/env node

import {
  greeting,
  getRandomNumber,
  askQuestion,
  getAnswer,
  showErrorMessages,
} from '../src/games/common.js';
import { showRules, operators } from '../src/games/brain-calc.js';

const game = () => {
  const name = greeting();

  showRules();

  let correctAnswers = 0;

  const round = () => {
    if (correctAnswers === 3) {
      return;
    }

    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);
    const operator = operators[getRandomNumber(0, 3)];

    // eslint-disable-next-line no-eval
    const correctAnswer = eval(num1 + operator + num2);

    askQuestion(`${num1} ${operator} ${num2}`);
    const answer = getAnswer();

    if (answer === String(correctAnswer)) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      if (correctAnswers !== 0) {
        correctAnswers = 0;
      }

      showErrorMessages(answer, correctAnswer, name);
    }

    round();
  };

  round();

  console.log(`Congratulations, ${name}`);
};

game();
