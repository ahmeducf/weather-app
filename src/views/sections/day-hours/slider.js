/* eslint-disable no-shadow */
const handleSliderChange = (app) => {
  const isWideScreen = window.innerWidth > 720;
  const isMobileScreen = window.innerWidth <= 720;
  const dayHours = app.getDayHours();
  const currentHourIndex = dayHours.getCurrent().getHourIndexInSortedArray();

  const prevButton = document.querySelector('.slider-container .prev');
  const nextButton = document.querySelector('.slider-container .next');
  const shownHours = document.querySelectorAll(
    '.slider-container .slide:not(.hidden)',
  );
  prevButton.classList.add('disabled');
  prevButton.classList.remove('hidden');
  nextButton.classList.remove('disabled');
  nextButton.setAttribute('aria-disabled', 'false');
  nextButton.classList.remove('hidden');

  if (isWideScreen && currentHourIndex > 20) {
    prevButton.classList.add('hidden');
    nextButton.classList.add('hidden');
  } else if (isMobileScreen && currentHourIndex === 23) {
    prevButton.classList.add('hidden');
    nextButton.classList.add('hidden');
  }

  const lastShownHour = shownHours[shownHours.length - 1];

  lastShownHour.style.borderRight = 'none';
  window.addEventListener('resize', () => {
    const shownHours = document.querySelectorAll(
      '.slider-container .slide:not(.hidden)',
    );
    const prevButton = document.querySelector('.slider-container .prev');
    const nextButton = document.querySelector('.slider-container .next');

    const lastShownHour = shownHours[shownHours.length - 1];

    lastShownHour.style.borderRight = 'none';

    if (window.innerWidth > 720 && currentHourIndex > 20) {
      prevButton.classList.add('hidden');
      nextButton.classList.add('hidden');
    } else if (window.innerWidth <= 720 && currentHourIndex > 20) {
      prevButton.classList.remove('hidden');
      nextButton.classList.remove('hidden');
    }
  });

  const showNextHours = () => {
    const shownHours = document.querySelectorAll(
      '.slider-container .slide:not(.hidden)',
    );
    const prevButton = document.querySelector('.slider-container .prev');
    const nextButton = document.querySelector('.slider-container .next');

    const lastShownHour = shownHours[shownHours.length - 1];
    const nextHour = lastShownHour.nextElementSibling;

    if (nextHour) {
      nextHour.classList.remove('hidden');
      nextHour.style.borderRight = 'none';
      lastShownHour.style.borderRight = '1px solid #dedede';

      shownHours[0].classList.add('hidden');

      if (!nextHour.nextElementSibling) {
        nextButton.classList.add('disabled');
        nextButton.setAttribute('aria-disabled', 'true');
      }

      prevButton.classList.remove('disabled');
      prevButton.setAttribute('aria-disabled', 'false');
    }
  };

  const showPrevHours = () => {
    const prevButton = document.querySelector('.slider-container .prev');
    const nextButton = document.querySelector('.slider-container .next');
    const shownHours = document.querySelectorAll(
      '.slider-container .slide:not(.hidden)',
    );
    const firstShownHour = shownHours[0];
    const prevHour = firstShownHour.previousElementSibling;
    if (prevHour) {
      prevHour.classList.remove('hidden');

      shownHours[shownHours.length - 1].classList.add('hidden');
      shownHours[shownHours.length - 1].style.borderRight = '1px solid #dedede';
      if (shownHours.length > 1) {
        shownHours[shownHours.length - 2].style.borderRight = 'none';
      }

      if (!prevHour.previousElementSibling) {
        prevButton.classList.add('disabled');
        prevButton.setAttribute('aria-disabled', 'true');
      }

      nextButton.classList.remove('disabled');
      nextButton.setAttribute('aria-disabled', 'false');
    }
  };

  const newNextButton = nextButton.cloneNode(true);
  const newPrevButton = prevButton.cloneNode(true);

  nextButton.parentNode.replaceChild(newNextButton, nextButton);
  prevButton.parentNode.replaceChild(newPrevButton, prevButton);

  newNextButton.addEventListener('click', showNextHours);
  newPrevButton.addEventListener('click', showPrevHours);
};

export default handleSliderChange;
