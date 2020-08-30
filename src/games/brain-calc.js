export const operators = ['+', '-', '*'];

export const showRules = () => {
  console.log('What is the result of the expression?');
};

export const getCorrectAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 0;
  }
};
