import { isSameHour } from 'date-fns';

const Forecast = (data) => {
  const forecastTime = data.current.last_updated;
  const isDay = data.current.is_day;
  const conditionText = data.current.condition.text;
  const conditionIcon = data.current.condition.icon.replace('64x64', '128x128');

  const celsiusTemperature = Math.round(data.current.temp_c);
  const fahrenheitTemperature = Math.round(data.current.temp_f);
  const highCelsiusTemperature = Math.round(
    data.forecast.forecastday[0].day.maxtemp_c,
  );
  const highFahrenheitTemperature = Math.round(
    data.forecast.forecastday[0].day.maxtemp_f,
  );
  const lowCelsiusTemperature = Math.round(
    data.forecast.forecastday[0].day.mintemp_c,
  );
  const lowFahrenheitTemperature = Math.round(
    data.forecast.forecastday[0].day.mintemp_f,
  );

  const windKph = data.current.wind_kph;
  // eslint-disable-next-line prefer-destructuring
  const humidity = data.current.humidity;
  const pressureMb = data.current.pressure_mb;
  const visibilityKm = data.current.vis_km;
  const uvIndex = data.current.uv;
  const moonPhase = data.forecast.forecastday[0].astro.moon_phase;
  const sunriseTime = data.forecast.forecastday[0].astro.sunrise;
  const sunsetTime = data.forecast.forecastday[0].astro.sunset;
  const feelsLikeCelsiusTemperature = Math.round(data.current.feelslike_c);
  const feelsLikeFahrenheitTemperature = Math.round(data.current.feelslike_f);

  let dewPointCelsiusTemperature = null;
  let dewPointFahrenheitTemperature = null;
  data.forecast.forecastday[0].hour.forEach((hour) => {
    if (isSameHour(new Date(data.location.localtime), new Date(hour.time))) {
      dewPointCelsiusTemperature = Math.round(hour.dewpoint_c);
      dewPointFahrenheitTemperature = Math.round(hour.dewpoint_f);
    }
  });

  const getForecastTime = () => forecastTime;
  const isDayTime = () => isDay;
  const getConditionText = () => conditionText;
  const getConditionIcon = () => conditionIcon;
  const getCelsiusTemperature = () => celsiusTemperature;
  const getFahrenheitTemperature = () => fahrenheitTemperature;
  const getHighCelsiusTemperature = () => highCelsiusTemperature;
  const getHighFahrenheitTemperature = () => highFahrenheitTemperature;
  const getLowCelsiusTemperature = () => lowCelsiusTemperature;
  const getLowFahrenheitTemperature = () => lowFahrenheitTemperature;
  const getWindKph = () => windKph;
  const getHumidity = () => humidity;
  const getPressureMb = () => pressureMb;
  const getVisibilityKm = () => visibilityKm;
  const getUvIndex = () => uvIndex;
  const getMoonPhase = () => moonPhase;
  const getSunriseTime = () => sunriseTime;
  const getSunsetTime = () => sunsetTime;
  const getFeelsLikeCelsiusTemperature = () => feelsLikeCelsiusTemperature;
  const getFeelsLikeFahrenheitTemperature = () =>
    feelsLikeFahrenheitTemperature;
  const getDewPointCelsiusTemperature = () => dewPointCelsiusTemperature;
  const getDewPointFahrenheitTemperature = () => dewPointFahrenheitTemperature;

  return {
    getForecastTime,
    isDayTime,
    getConditionText,
    getConditionIcon,
    getCelsiusTemperature,
    getFahrenheitTemperature,
    getHighCelsiusTemperature,
    getHighFahrenheitTemperature,
    getLowCelsiusTemperature,
    getLowFahrenheitTemperature,
    getWindKph,
    getHumidity,
    getPressureMb,
    getVisibilityKm,
    getUvIndex,
    getMoonPhase,
    getSunriseTime,
    getSunsetTime,
    getFeelsLikeCelsiusTemperature,
    getFeelsLikeFahrenheitTemperature,
    getDewPointCelsiusTemperature,
    getDewPointFahrenheitTemperature,
  };
};

export default Forecast;
