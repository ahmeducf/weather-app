import { MORNING, AFTERNOON, EVENING, OVERNIGHT } from '../../constants';

const renderDayParts = (app) => {
  const locationSpan = document.querySelector(
    '.today-forecast__header__info .location',
  );

  locationSpan.textContent = app.getLocation().getName();

  const dayPartsListItems = document.querySelectorAll(
    '.today-forecast__forecast-list .forecast-list__list-item',
  );

  const dayParts = app.getDayParts();
  const currentDayPart = dayParts.getCurrent().getName().toLowerCase();
  const morningPart = dayParts.getMorning();
  const afternoonPart = dayParts.getAfternoon();
  const eveningPart = dayParts.getEvening();
  const overnightPart = dayParts.getOvernight();

  dayPartsListItems.forEach((listItem) => {
    const timeDiv = listItem.querySelector('.time');
    const temperatureDiv = listItem.querySelector('.temperature');
    const iconDiv = listItem.querySelector('.icon');
    const iconImg = listItem.querySelector('.icon img');
    const chanceOfRainDiv = listItem.querySelector(
      '.chance-of-rain .percentage',
    );
    const dayPart = listItem.dataset.part;

    if (dayPart === MORNING) {
      timeDiv.textContent = morningPart.getName();

      temperatureDiv.textContent = app.isCelsius()
        ? `${morningPart.getMedianCelsiusTemperature()}°C`
        : `${morningPart.getMedianFahrenheitTemperature()}°F`;

      iconDiv.setAttribute('title', morningPart.getText());
      iconImg.setAttribute('src', morningPart.getIcon());
      iconImg.setAttribute('alt', morningPart.getText());

      chanceOfRainDiv.textContent = `${morningPart.getMedianChanceOfRain()}%`;

      if (currentDayPart === MORNING) {
        listItem.classList.add('current');
      }
    } else if (dayPart === AFTERNOON) {
      timeDiv.textContent = afternoonPart.getName();

      temperatureDiv.textContent = app.isCelsius()
        ? `${afternoonPart.getMedianCelsiusTemperature()}°C`
        : `${afternoonPart.getMedianFahrenheitTemperature()}°F`;

      iconDiv.setAttribute('title', afternoonPart.getText());
      iconImg.setAttribute('src', afternoonPart.getIcon());
      iconImg.setAttribute('alt', afternoonPart.getText());

      chanceOfRainDiv.textContent = `${afternoonPart.getMedianChanceOfRain()}%`;

      if (currentDayPart === AFTERNOON) {
        listItem.classList.add('current');
      }
    } else if (dayPart === EVENING) {
      timeDiv.textContent = eveningPart.getName();

      temperatureDiv.textContent = app.isCelsius()
        ? `${eveningPart.getMedianCelsiusTemperature()}°C`
        : `${eveningPart.getMedianFahrenheitTemperature()}°F`;

      iconDiv.setAttribute('title', eveningPart.getText());
      iconImg.setAttribute('src', eveningPart.getIcon());
      iconImg.setAttribute('alt', eveningPart.getText());

      chanceOfRainDiv.textContent = `${eveningPart.getMedianChanceOfRain()}%`;

      if (currentDayPart === EVENING) {
        listItem.classList.add('current');
      }
    } else {
      timeDiv.textContent = overnightPart.getName();

      temperatureDiv.textContent = app.isCelsius()
        ? `${overnightPart.getMedianCelsiusTemperature()}°C`
        : `${overnightPart.getMedianFahrenheitTemperature()}°F`;

      iconDiv.setAttribute('title', overnightPart.getText());
      iconImg.setAttribute('src', overnightPart.getIcon());
      iconImg.setAttribute('alt', overnightPart.getText());

      chanceOfRainDiv.textContent = `${overnightPart.getMedianChanceOfRain()}%`;

      if (currentDayPart === OVERNIGHT) {
        listItem.classList.add('current');
      }
    }
  });
};

export default renderDayParts;
