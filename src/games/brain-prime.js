export const answers = {
  yes: 'yes',
  no: 'no',
};

export const showRules = () => {
  console.log(`Answer "${answers.yes}" if given number is prime. Otherwise answer "${answers.no}".`);
};

export const getCorrectAnswer = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};
