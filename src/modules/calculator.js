const calculator = (price) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = calcBlock.querySelector('.calc-type');
  const calcSquare = calcBlock.querySelector('.calc-square');
  const calcCount = calcBlock.querySelector('.calc-count');
  const calcDay = calcBlock.querySelector('.calc-day');
  const total = calcBlock.querySelector('#total');

  let interval;
  let count;

  const changetTotal = (num) => {
    count = 0;
    let step = num / (price / 10);

    interval = setInterval(() => {
      total.textContent = count;
      count += step;
      if (count > num) clearInterval(interval);
    }, 30);
  };

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = +calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (interval) clearInterval(interval);

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

    changetTotal(totalValue);
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
      if (/\D+/g.test(e.target.value)) {
        e.target.value = e.target.value.replace(/\D+/g, '');
        return;
      }
      countCalc();
    }
  });
};

export default calculator;
