const menu = () => {
  const menu = document.querySelector('menu');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  document.addEventListener('click', (e) => {
    if (
      e.target.closest('.menu') ||
      (e.target.closest('menu') && e.target.tagName === 'A') ||
      (menu.classList.contains('active-menu') && !e.target.closest('menu'))
    ) {
      e.preventDefault();
      handleMenu();
    }
  });
};

export default menu;
