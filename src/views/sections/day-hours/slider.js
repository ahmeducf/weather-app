/* eslint-disable no-shadow */
const handleSliderChange = () => {
  const prevButton = document.querySelector('.slider-container .prev');
  const nextButton = document.querySelector('.slider-container .next');
  const shownHours = document.querySelectorAll(
    '.slider-container .slide:not(.hidden)',
  );

  const lastShownHour = shownHours[shownHours.length - 1];
  const nextHour = lastShownHour.nextElementSibling;
  if (!nextHour) {
    nextButton.classList.add('disabled');
  }

  lastShownHour.style.borderRight = 'none';

  const showNextHours = () => {
    const shownHours = document.querySelectorAll(
      '.slider-container .slide:not(.hidden)',
    );
    const lastShownHour = shownHours[shownHours.length - 1];
    const nextHour = lastShownHour.nextElementSibling;

    if (nextHour) {
      nextHour.classList.remove('hidden');
      nextHour.style.borderRight = 'none';
      lastShownHour.style.borderRight = '1px solid #dedede';

      shownHours[0].classList.add('hidden');

      if (!nextHour.nextElementSibling) {
        nextButton.classList.add('disabled');
      }

      prevButton.classList.remove('disabled');
    }
  };

  const showPrevHours = () => {
    const shownHours = document.querySelectorAll(
      '.slider-container .slide:not(.hidden)',
    );
    const firstShownHour = shownHours[0];
    const prevHour = firstShownHour.previousElementSibling;
    if (prevHour) {
      prevHour.classList.remove('hidden');

      shownHours[shownHours.length - 1].classList.add('hidden');
      shownHours[shownHours.length - 1].style.borderRight = '1px solid #dedede';
      shownHours[shownHours.length - 2].style.borderRight = 'none';

      if (!prevHour.previousElementSibling) {
        prevButton.classList.add('disabled');
      }

      nextButton.classList.remove('disabled');
    }
  };

  nextButton.addEventListener('click', showNextHours);
  prevButton.addEventListener('click', showPrevHours);
};

export default handleSliderChange;
