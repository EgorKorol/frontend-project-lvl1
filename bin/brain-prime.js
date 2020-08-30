#!/usr/bin/env node

import {
  greeting,
  getRandomNumber,
  askQuestion,
  getAnswer,
  showErrorMessages,
} from '../src/games/common.js';
import { showRules, getCorrectAnswer, answers } from '../src/games/brain-prime.js';

const game = () => {
  const name = greeting();

  showRules();

  let correctAnswers = 0;

  const round = () => {
    if (correctAnswers === 3) {
      return;
    }

    const num = getRandomNumber(1, 100);
    const correctAnswer = getCorrectAnswer(num) ? answers.yes : answers.no;

    askQuestion(num);
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
