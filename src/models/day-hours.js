import { getHours, isSameHour } from 'date-fns';

const DayHour = (hour) => {
  let time = getHours(new Date(hour.time));
  time = `${time > 12 ? time - 12 : time}:00 ${time > 12 ? 'PM' : 'AM'}`;

  const { icon } = hour.condition;
  const { text } = hour.condition;

  const celsiusTemperature = Math.round(hour.temp_c);
  const fahrenheitTemperature = Math.round(hour.temp_f);

  const chanceOfRain = Math.round(hour.chance_of_rain);

  const isCurrent = () => isSameHour(new Date(hour.time), new Date());

  const getTime = () => time;
  const getIcon = () => icon.replace('64x64', '128x128');
  const getText = () => text;
  const getCelsiusTemperature = () => celsiusTemperature;
  const getFahrenheitTemperature = () => fahrenheitTemperature;
  const getChanceOfRain = () => chanceOfRain;

  return {
    getTime,
    getIcon,
    getText,
    getCelsiusTemperature,
    getFahrenheitTemperature,
    getChanceOfRain,
    isCurrent,
  };
};

const DayHours = (hoursForecast) => {
  const hours = () => hoursForecast.map((hour) => DayHour(hour));

  const getCurrent = () => hours.find((hour) => hour.isCurrent());

  return {
    getCurrent,
    getHours: () => hours,
  };
};

export default DayHours;
