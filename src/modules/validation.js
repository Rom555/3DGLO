const validation = () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const textInput = form.querySelector('input[type=text]');
    const messageInput = form.querySelector(
      'input[placeholder="Ваше сообщение"]'
    );
    const emailInput = form.querySelector('input[type=email]');
    const telInput = form.querySelector('input[type=tel]');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isError = false;

      if (
        /[^а-я\-\s]/gi.test(textInput.value) ||
        textInput.value.trim() === ''
      ) {
        isError = true;
      }

      if (messageInput && /[^а-я\-\s]/gi.test(messageInput.value)) {
        isError = true;
      }

      if (
        /[^a-z\d\@\-\_\.\!\~\*\']/gi.test(emailInput.value) ||
        emailInput.value.trim() === ''
      ) {
        isError = true;
      }

      if (/[^\d\(\)\-]/g.test(telInput.value) || telInput.value.trim() === '') {
        isError = true;
      }

      if (!isError) {
        alert('Данные отправлены');
      }
    });
  });
};

export default validation;
