const renderTodayDetails = (app) => {
  const locationSpan = document.querySelector(
    '.today-details__header__info .location',
  );
  const temperatureSpan = document.querySelector(
    '.today-details__info .feels-like .temperature .temp',
  );

  const sunriseTimeSpan = document.querySelector(
    '.today-details__info .sunrise-sunset .sunrise .time',
  );
  const sunsetTimeSpan = document.querySelector(
    '.today-details__info .sunrise-sunset .sunset .time',
  );

  const forecast = app.getForecast();

  locationSpan.textContent = app.getLocation().getName();
  temperatureSpan.textContent = app.isCelsius()
    ? `${forecast.getFeelsLikeCelsiusTemperature()}°`
    : `${forecast.getFeelsLikeFahrenheitTemperature()}°`;
  sunriseTimeSpan.textContent = forecast.getSunriseTime();
  sunsetTimeSpan.textContent = forecast.getSunsetTime();

  const forecastInfoItems = document.querySelectorAll('.info-list__list-item');
  forecastInfoItems.forEach((item) => {
    const infoTitle = item.dataset.info;
    const valueSpan = item.querySelector('.value');

    switch (infoTitle) {
      case 'high-low': {
        const highTempSpan = valueSpan.querySelector('.high.temp');
        const lowTempSpan = valueSpan.querySelector('.low.temp');
        highTempSpan.textContent = app.isCelsius()
          ? `${forecast.getHighCelsiusTemperature()}°`
          : `${forecast.getHighFahrenheitTemperature()}°`;
        lowTempSpan.textContent = app.isCelsius()
          ? `${forecast.getLowCelsiusTemperature()}°`
          : `${forecast.getLowFahrenheitTemperature()}°`;
        break;
      }
      case 'humidity': {
        valueSpan.textContent = `${forecast.getHumidity()}%`;
        break;
      }
      case 'pressure': {
        valueSpan.textContent = `${forecast.getPressureMb()} mb`;
        break;
      }
      case 'visibility': {
        valueSpan.textContent = `${forecast.getVisibilityKm()} km`;
        break;
      }
      case 'wind': {
        valueSpan.textContent = `${forecast.getWindKph()} km/h`;
        break;
      }
      case 'dew-point': {
        valueSpan.textContent = app.isCelsius()
          ? `${forecast.getDewPointCelsiusTemperature()}°`
          : `${forecast.getDewPointFahrenheitTemperature()}°`;
        break;
      }
      case 'uv-index': {
        valueSpan.textContent = forecast.getUvIndex();
        break;
      }
      case 'moon-phase': {
        valueSpan.textContent = forecast.getMoonPhase();
        break;
      }
      default:
        break;
    }
  });
};

export default renderTodayDetails;
