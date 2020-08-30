export const showRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

export const getCorrectAnswer = (num1, num2) => (num1 ? getCorrectAnswer(num2 % num1, num1) : num2);
