const scroll = () => {
  const menuLinks = document.querySelectorAll('menu>ul>li>a');
  const mainLink = document.querySelector('main>a');
  const links = [...menuLinks, mainLink];

  links.forEach((link) => {
    const target = link.attributes.href.value;

    link.addEventListener('click', (e) => {
      e.preventDefault();

      document.querySelector(target).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
};

export default scroll;
