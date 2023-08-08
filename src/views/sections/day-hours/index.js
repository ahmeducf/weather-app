import DayHour from './day-hour';
import handleSliderChange from './slider';

const renderSliderItems = (app) => {
  let isWideScreen = window.innerWidth > 720;

  const dayHoursList = document.querySelector(
    '.hourly-forecast__forecast-list',
  );

  const renderHours = () => {
    const dayHours = app.getDayHours();
    const hours = dayHours.getHours();

    const currentHourIndex = dayHours.getCurrent().getHourIndexInSortedArray();

    let startIndex = currentHourIndex;
    if (currentHourIndex > 20) {
      startIndex = currentHourIndex - (currentHourIndex % 4);
    }

    let indexCounter = startIndex;

    dayHoursList.innerHTML = '';
    let remainingHours = [];

    if (window.innerWidth > 720) {
      const firstFourHoursFromStartIndex = hours.slice(
        startIndex,
        startIndex + 4,
      );

      firstFourHoursFromStartIndex.forEach((hour) => {
        const hourComponent = DayHour(app, hour, indexCounter);
        indexCounter += 1;

        dayHoursList.appendChild(hourComponent);
      });

      remainingHours = hours.slice(currentHourIndex + 4);
    } else {
      const hourComponent = DayHour(app, hours[currentHourIndex], indexCounter);
      indexCounter += 1;

      dayHoursList.appendChild(hourComponent);
      remainingHours = hours.slice(currentHourIndex + 1);
    }

    remainingHours.forEach((hour) => {
      const hourComponent = DayHour(app, hour, indexCounter);
      hourComponent.classList.add('hidden');
      indexCounter += 1;

      dayHoursList.appendChild(hourComponent);
    });

    handleSliderChange(app);
  };

  renderHours();

  window.addEventListener('resize', () => {
    if (
      (window.innerWidth > 720 && !isWideScreen) ||
      (window.innerWidth <= 720 && isWideScreen)
    ) {
      isWideScreen = !isWideScreen;
      renderHours();
    }
  });
};

const renderDayHours = (app) => {
  renderSliderItems(app);
};

export default renderDayHours;
