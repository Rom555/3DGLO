const date = new Date();
let weekday;
let time;
let newYear;
let timeRemaining;

const correctCase = function (number, cases) {
  let devidedNumber = number % 100;

  if (10 <= devidedNumber && devidedNumber <= 19) {
    return number + ' ' + cases[2];
  }

  devidedNumber = number % 10;

  switch (true) {
    case devidedNumber === 1:
      return number + ' ' + cases[0];
    case 2 <= devidedNumber && devidedNumber <= 4:
      return number + ' ' + cases[1];
    case (5 <= devidedNumber && devidedNumber <= 9) || devidedNumber === 0:
      return number + ' ' + cases[2];
  }
};

const getTimesOfDay = (date) => {
  let hours = date.getHours();

  switch (true) {
    case hours < 6 || 22 <= hours:
      return 'Доброй ночи';
    case 6 <= hours && hours < 12:
      return 'Доброго утра';
    case 12 <= hours && hours < 18:
      return 'Добрый день';
    case 18 <= hours && hours < 22:
      return 'Добрый вечер';
  }
};

weekday = date.toLocaleDateString('ru-RU', { weekday: 'long' });
weekday = weekday[0].toUpperCase() + weekday.substring(1);
time = date.toLocaleTimeString('en');
newYear = new Date('1 january ' + (date.getFullYear() + 1));
timeRemaining = Math.floor(
  (newYear.getTime() - date.getTime()) / 1000 / 60 / 60 / 24
);
timeRemainingString = correctCase(timeRemaining, ['день', 'дня', 'дней']);

document.body.insertAdjacentHTML('beforeend', getTimesOfDay(date) + '<br>');
document.body.insertAdjacentHTML('beforeend', 'Сегодня: ' + weekday + '<br>');
document.body.insertAdjacentHTML(
  'beforeend',
  'Текущее время: ' + time + '<br>'
);
document.body.insertAdjacentHTML(
  'beforeend',
  'До нового года осталось: ' + timeRemainingString + '<br>'
);
