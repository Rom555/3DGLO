const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');

  const handleMenu = (e) => {
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
