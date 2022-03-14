const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div');
  const loadContent = `
  <svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 60 60" enable-background="new 0 0 0 0" xml:space="preserve" width="60" height="30">
    <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
      <animate
        attributeName="opacity"
        dur="1s"
        values="0;1;0"
        repeatCount="indefinite"
        begin="0.1"/>    
    </circle>
    <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
      <animate
        attributeName="opacity"
        dur="1s"
        values="0;1;0"
        repeatCount="indefinite" 
        begin="0.2"/>       
    </circle>
    <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
      <animate
        attributeName="opacity"
        dur="1s"
        values="0;1;0"
        repeatCount="indefinite" 
        begin="0.3"/>     
    </circle>
  </svg>`;
  const errorText = 'Ошибка!';
  const validateErrorText = 'Неправильно заполнены поля!';
  const successText = 'Спасибо! Наш менеджер с Вами свяжется.';

  let timeout;

  const validate = (list) => {
    let success = true;

    list.forEach((input) => {
      switch (true) {
        case input.name === 'user_phone':
          if (/[^\d\(\)\-\+]/gi.test(input.value) || !input.value)
            success = false;
          break;
        case input.name === 'user_email':
          if (!input.value) success = false;
          break;
        case input.name === 'user_name':
          if (/[^а-я\s]/gi.test(input.value) || !input.value) success = false;
          break;
        case input.name === 'user_message':
          if (/[^а-я\s\d\.\,\?\!\;\:]/gi.test(input.value)) success = false;
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

    clearTimeout(timeout);

    statusBlock.style.color = '#fff';

    form.append(statusBlock);

    if (!validate(formElements)) {
      statusBlock.textContent = validateErrorText;
      return;
    }

    statusBlock.innerHTML = loadContent;

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

        timeout = setTimeout(() => (statusBlock.textContent = ''), 5000);
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
