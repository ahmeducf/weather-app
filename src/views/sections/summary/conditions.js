const renderSummaryConditions = (app) => {
  const locationHeader = document.querySelector(
    '.current-conditions__header__info .location',
  );
  const timeSpan = document.querySelector(
    '.current-conditions__header__info .timestamp',
  );
  const temperatureSpan = document.querySelector(
    '.current-conditions__info .temperature .temp',
  );
  const conditionTextDiv = document.querySelector(
    '.current-conditions__info .description',
  );
  const conditionIconDiv = document.querySelector(
    '.current-conditions__info .icon',
  );
  const conditionIconImg = conditionIconDiv.firstChild;

  const highTemperatureSpan = document.querySelector(
    '.current-conditions__info .high-low .temp.high',
  );
  const lowTemperatureSpan = document.querySelector(
    '.current-conditions__info .high-low .temp.low',
  );

  const location = app.getLocation();
  const forecast = app.getForecast();

  locationHeader.textContent = location.getName();
  timeSpan.textContent = location.getLocalTime();

  temperatureSpan.textContent = app.isCelsius()
    ? `${forecast.getCelsiusTemperature()}°`
    : `${forecast.getFahrenheitTemperature()}°`;

  conditionTextDiv.textContent = forecast.getConditionText();
  conditionIconDiv.setAttribute('title', forecast.getConditionText());
  conditionIconImg.src = forecast.getConditionIcon();
  conditionIconImg.alt = forecast.getConditionText();

  highTemperatureSpan.textContent = app.isCelsius()
    ? `${forecast.getHighCelsiusTemperature()}°`
    : `${forecast.getHighFahrenheitTemperature()}°`;

  lowTemperatureSpan.textContent = app.isCelsius()
    ? `${forecast.getLowCelsiusTemperature()}°`
    : `${forecast.getLowFahrenheitTemperature()}°`;
};

export default renderSummaryConditions;
