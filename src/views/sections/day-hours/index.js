import DayHour from './day-hour';
import handleSliderChange from './slider';

const getIndexInSortedArrayfromHourTime = (time) => {
  const hour = time.split(':')[0];
  const amOrPm = time.split(' ')[1];
  const index = amOrPm === 'AM' ? Number(hour) : Number(hour) + 12;

  return index;
};

const renderSliderItems = (app) => {
  const dayHours = app.getDayHours();
  const hours = dayHours.getHours();
  const currentHourIndex = getIndexInSortedArrayfromHourTime(
    dayHours.getCurrent().getTime(),
  );
  let indexCounter = currentHourIndex;

  const dayHoursList = document.querySelector(
    '.hourly-forecast__forecast-list',
  );

  const firstFourHoursFromCurrentHour = hours.slice(
    currentHourIndex,
    currentHourIndex + 4,
  );

  firstFourHoursFromCurrentHour.forEach((hour) => {
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
  handleSliderChange();
};

export default renderDayHours;
