const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');
  const modalContent = modal.querySelector('.popup-content');
  const closeBtn = modal.querySelector('.popup-close');

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

  buttons.forEach((btn) =>
    btn.addEventListener('click', () => {
      modal.style.display = 'block';

      if (window.screen.width >= 768) modalContentAnimation();
    })
  );

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
};

export default modal;
