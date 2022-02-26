const validation = () => {
  const forms = document.querySelectorAll('form');

  const valueChange = (input, reg, callback) => {
    let value = input.value;

    value = value.replace(reg, '');

    value = value.replace(/^[\-\s]+/, '');
    value = value.replace(/[\-\s]+$/, '');
    value = value.replace(/\-{2,}/g, '-');
    value = value.replace(/\s{2,}/g, ' ');

    if (callback) {
      value = callback(value);
    }

    input.value = value;
  };

  const capitalize = (str) => {
    if (str) {
      str = str.replace(/([а-я])([а-я]*)/g, (str, $1, $2) => {
        return $1.toUpperCase() + $2.toLowerCase();
      });
    }

    return str;
  };

  forms.forEach((form) => {
    const textInput = form.querySelector('input[type=text]');
    const messageInput = form.querySelector(
      'input[placeholder="Ваше сообщение"]'
    );
    const emailInput = form.querySelector('input[type=email]');
    const telInput = form.querySelector('input[type=tel]');

    textInput.addEventListener('blur', () => {
      valueChange(textInput, /[^а-я\-\s]/gi, capitalize);
    });

    if (messageInput) {
      messageInput.addEventListener('blur', () => {
        valueChange(messageInput, /[^а-я\-\s]/gi);
      });
    }

    emailInput.addEventListener('blur', () => {
      valueChange(emailInput, /[^a-z\d\@\-\_\.\!\~\*\']/gi);
    });

    telInput.addEventListener('blur', () => {
      valueChange(telInput, /[^\d\(\)\-]/g);
    });
  });
};

export default validation;
