import DayHour from './day-hour';
import handleSliderChange from './slider';

const renderSliderItems = (app) => {
  const dayHours = app.getDayHours();
  const hours = dayHours.getHours();

  const currentHourIndex = dayHours.getCurrent().getHourIndexInSortedArray();

  let startIndex = currentHourIndex;
  if (currentHourIndex > 20) {
    startIndex = currentHourIndex - (currentHourIndex % 4);
  }

  let indexCounter = startIndex;

  const dayHoursList = document.querySelector(
    '.hourly-forecast__forecast-list',
  );

  const firstFourHoursFromStartIndex = hours.slice(startIndex, startIndex + 4);

  firstFourHoursFromStartIndex.forEach((hour) => {
    const hourComponent = DayHour(app, hour, indexCounter);
    indexCounter += 1;

    dayHoursList.appendChild(hourComponent);
  });

  const remainingHours = hours.slice(currentHourIndex + 4, hours.length);

  remainingHours.forEach((hour) => {
    const hourComponent = DayHour(app, hour, indexCounter);
    hourComponent.classList.add('hidden');
    indexCounter += 1;

    dayHoursList.appendChild(hourComponent);
  });
};

const renderDayHours = (app) => {
  renderSliderItems(app);
  handleSliderChange(app);
};

export default renderDayHours;
