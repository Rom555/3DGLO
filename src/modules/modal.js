const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');
  const modalContent = modal.querySelector('.popup-content');

  const modalContentAnimation = () => {
    let count = -10;
    let animationId;
    modalContent.style.top = '0';

    const moveModalContent = () => {
      count++;

      animationId = requestAnimationFrame(moveModalContent);

      if (count > 10) {
        cancelAnimationFrame(animationId);
      } else {
        modalContent.style.top = count + '%';
      }
    };

    animationId = requestAnimationFrame(moveModalContent);
  };

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

      if (window.screen.width >= 768) modalContentAnimation();
    })
  );
};

export default modal;
