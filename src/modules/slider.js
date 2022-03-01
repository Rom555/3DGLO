const slider = (
  sliderClass,
  slidesClass,
  dotWrapperClass,
  slideActiveClass = 'portfolio-item-active',
  dotClass = 'dot',
  dotActive = 'dot-active'
) => {
  if (!sliderClass || !slidesClass || !dotWrapperClass) return;

  const sliderBlock = document.querySelector('.' + sliderClass);
  const slides = document.querySelectorAll('.' + slidesClass);
  const dotList = document.querySelector('.' + dotWrapperClass);
  const timeInterval = 3000;

  if (!sliderBlock || !slides || !dotList) return;

  let dots = [];
  let currentSlide = 0;
  let interval;

  const createDots = () => {
    slides.forEach((slide, index) => {
      let dot = document.createElement('li');
      dot.classList = dotClass + (index === 0 ? ' ' + dotActive : '');
      dotList.append(dot);
      dots.push(dot);
    });
  };

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, slideActiveClass);
    prevSlide(dots, currentSlide, dotActive);

    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, slideActiveClass);
    nextSlide(dots, currentSlide, dotActive);
  };

  const startSlide = (timer = 2000) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches(`.${dotClass}, .portfolio-btn`)) {
      return;
    }

    prevSlide(slides, currentSlide, slideActiveClass);
    prevSlide(dots, currentSlide, dotActive);

    if (e.target.matches('#arrow-right')) {
      currentSlide++;
    } else if (e.target.matches('#arrow-left')) {
      currentSlide--;
    } else if (e.target.classList.contains(dotClass)) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, slideActiveClass);
    nextSlide(dots, currentSlide, dotActive);
  });

  sliderBlock.addEventListener(
    'mouseenter',
    (e) => {
      if (e.target.matches(`.${dotClass}, .portfolio-btn`)) {
        stopSlide();
      }
    },
    true
  );

  sliderBlock.addEventListener(
    'mouseleave',
    (e) => {
      if (e.target.matches(`.${dotClass}, .portfolio-btn`)) {
        startSlide(timeInterval);
      }
    },
    true
  );

  createDots();
  startSlide(timeInterval);
};

export default slider;
