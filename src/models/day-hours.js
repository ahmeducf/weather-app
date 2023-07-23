import { getHours, isSameHour } from 'date-fns';

const DayHour = (localtime, hour) => {
  let time = getHours(new Date(hour.time));
  time = `${time > 12 ? time - 12 : time}:00 ${time > 12 ? 'PM' : 'AM'}`;

  const { icon } = hour.condition;
  const { text } = hour.condition;

  const celsiusTemperature = Math.round(hour.temp_c);
  const fahrenheitTemperature = Math.round(hour.temp_f);

  const chanceOfRain = Math.round(hour.chance_of_rain);

  const isCurrent = () => isSameHour(new Date(hour.time), new Date(localtime));

  const getTime = () => time;
  const getConditionIcon = () => icon.replace('64x64', '128x128');
  const getConditionText = () => text;
  const getCelsiusTemperature = () => celsiusTemperature;
  const getFahrenheitTemperature = () => fahrenheitTemperature;
  const getChanceOfRain = () => chanceOfRain;

  return {
    getTime,
    getConditionIcon,
    getConditionText,
    getCelsiusTemperature,
    getFahrenheitTemperature,
    getChanceOfRain,
    isCurrent,
  };
};

const DayHours = (data) => {
  const hoursForecast = data.forecast.forecastday[0].hour;

  const hours = hoursForecast.map((hour) =>
    DayHour(data.location.localtime, hour),
  );

  const getCurrent = () => hours.find((hour) => hour.isCurrent());

  return {
    getCurrent,
    getHours: () => hours,
  };
};

export default DayHours;
