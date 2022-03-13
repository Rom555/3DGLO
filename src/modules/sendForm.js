const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div');
  const loadText = 'Отправка...';
  const errorText = 'Ошибка!';
  const validateErrorText = 'Неправильно заполнены поля!';
  const successText = 'Спасибо! Наш менеджер с Вами свяжется.';

  const validate = (list) => {
    let success = true;

    list.forEach((input) => {
      switch (true) {
        case input.name === 'user_phone':
          success = !/[^\d\(\)\-]/gi.test(input.value);
          break;
        case input.name === 'user_name':
          success = !/[^а-я\s]/gi.test(input.value);
          break;
        case input.name === 'user_message':
          success = !/[^а-я\s\d\.\,\?\!\;\:]/gi.test(input.value);
          break;
      }
    });

    return success;
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.style.color = '#fff';

    form.append(statusBlock);

    if (!validate(formElements)) {
      statusBlock.textContent = validateErrorText;
      return;
    }

    statusBlock.textContent = loadText;

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value;
      }
    });

    sendData(formBody)
      .then((data) => {
        statusBlock.textContent = successText;

        formElements.forEach((input) => {
          input.value = '';
        });
      })
      .catch((error) => {
        statusBlock.textContent = errorText;
      });
  };

  try {
    if (!form) throw new Error(`Форма ${formId} не найдена`);

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
