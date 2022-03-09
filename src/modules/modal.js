import { animate } from './helper.js';

const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');
  const modalContent = modal.querySelector('.popup-content');
  const modalForm = modal.querySelector('form');

  modal.addEventListener('click', (e) => {
    if (
      !e.target.closest('.popup-content') ||
      e.target.classList.contains('popup-close')
    ) {
      modal.style.display = 'none';
    }
  });

  buttons.forEach((btn) =>
    btn.addEventListener('click', () => {
      modal.style.display = 'block';

      if (window.screen.width >= 768)
        animate({
          duration: 500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modal.style.width = progress * 100 + '%';
            modalContent.style.top = (progress - 0.5) * 20 + '%';
            modalContent.style.opacity = progress;
            modalForm.style.top = 500 * (1 - progress) + 'px';
          },
        });
    })
  );

  modalForm.style.position = 'relative';
};

export default modal;
