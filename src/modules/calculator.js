const calculator = () => {
  const calc = document.querySelector('.calc-block');
  const inputsNumber = calc.querySelectorAll('input.calc-item');

  inputsNumber.forEach((input) => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D+/, '');
    });
  });
};

export default calculator;
