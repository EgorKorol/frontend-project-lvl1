#!/usr/bin/env node

import {
  greeting,
  getRandomNumber,
  askQuestion,
  getAnswer,
  showErrorMessages,
} from '../src/games/common.js';
import showRules from '../src/games/brain-progression.js';

const game = () => {
  const name = greeting();

  showRules();

  let correctAnswers = 0;

  const round = () => {
    if (correctAnswers === 3) {
      return;
    }

    const startNumber = getRandomNumber(1, 100);
    const skipIndex = getRandomNumber(1, 10);
    const step = getRandomNumber(1, 10);
    let correctAnswer = null;

    const array = [`${startNumber}`];

    for (let i = 1; i < 10; i += 1) {
      if (i === skipIndex) {
        array.push('..');
        correctAnswer = String(startNumber + i * step);
      } else {
        array.push(String(startNumber + i * step));
      }
    }

    askQuestion(array.join(' '));
    const answer = getAnswer();

    if (answer === correctAnswer) {
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
