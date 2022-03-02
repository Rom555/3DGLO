const calculator = (price) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = calcBlock.querySelector('.calc-type');
  const calcSquare = calcBlock.querySelector('.calc-square');
  const calcCount = calcBlock.querySelector('.calc-count');
  const calcDay = calcBlock.querySelector('.calc-day');
  const total = calcBlock.querySelector('#total');

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = +calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (!calcTypeValue || !calcSquareValue) {
      total.textContent = 0;
      return;
    }

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    totalValue =
      price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;

    total.textContent = totalValue;
  };

  calcBlock.addEventListener('input', (e) => {
    if (e.target === calcType) {
      countCalc();
    }
    if (
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay
    ) {
      e.target.value = e.target.value.replace(/\D+/, '');
      countCalc();
    }
  });
};

export default calculator;
