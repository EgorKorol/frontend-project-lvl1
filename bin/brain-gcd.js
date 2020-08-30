#!/usr/bin/env node

import {
  greeting,
  getRandomNumber,
  askQuestion,
  getAnswer,
  showErrorMessages,
} from '../src/games/common.js';
import { showRules, getCorrectAnswer } from '../src/games/brain-gcd.js';

const game = () => {
  const name = greeting();

  showRules();

  let correctAnswers = 0;

  const round = () => {
    if (correctAnswers === 3) {
      return;
    }

    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);

    const correctAnswer = getCorrectAnswer(num1, num2);

    askQuestion(`${num1} ${num2}`);
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
