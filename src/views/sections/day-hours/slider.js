/* eslint-disable no-shadow */
const handleSliderChange = (app) => {
  const dayHours = app.getDayHours();
  const currentHourIndex = dayHours.getCurrent().getHourIndexInSortedArray();

  const prevButton = document.querySelector('.slider-container .prev');
  const nextButton = document.querySelector('.slider-container .next');
  const shownHours = document.querySelectorAll(
    '.slider-container .slide:not(.hidden)',
  );

  if (currentHourIndex > 20) {
    prevButton.classList.add('hidden');
    nextButton.classList.add('hidden');
  }

  const lastShownHour = shownHours[shownHours.length - 1];
  const nextHour = lastShownHour.nextElementSibling;
  if (!nextHour) {
    nextButton.classList.add('disabled');
    nextButton.setAttribute('aria-disabled', 'true');
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
        nextButton.setAttribute('aria-disabled', 'true');
      }

      prevButton.classList.remove('disabled');
      prevButton.setAttribute('aria-disabled', 'false');
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
        prevButton.setAttribute('aria-disabled', 'true');
      }

      nextButton.classList.remove('disabled');
      nextButton.setAttribute('aria-disabled', 'false');
    }
  };

  nextButton.addEventListener('click', showNextHours);
  prevButton.addEventListener('click', showPrevHours);
};

export default handleSliderChange;
