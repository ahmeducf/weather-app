import { isWithinInterval, setHours } from 'date-fns';

const DayPart = (localtime, dayPartHours, name) => {
  const { length } = dayPartHours;
  const medianIndex = Math.floor(length / 2);

  const averageCelsiusTemperature = Math.round(
    dayPartHours[medianIndex].temp_c,
  );

  const averageFahrenheitTemperature = Math.round(
    dayPartHours[medianIndex].temp_f,
  );

  const averageChanceOfRain = Math.round(
    dayPartHours[medianIndex].chance_of_rain,
  );

  const { text, icon } = dayPartHours[medianIndex].condition;

  const getName = () => name;
  const getIcon = () => icon.replace('64x64', '128x128');
  const getText = () => text;
  const getMedianCelsiusTemperature = () => averageCelsiusTemperature;
  const getMedianFahrenheitTemperature = () => averageFahrenheitTemperature;
  const getMedianChanceOfRain = () => averageChanceOfRain;

  const isCurrent = () => {
    const now = new Date(localtime);
    const start = setHours(
      now,
      dayPartHours[0].time.split(' ')[1].split(':')[0],
    );
    const end = setHours(
      now,
      dayPartHours[dayPartHours.length - 1].time.split(' ')[1].split(':')[0],
    );

    return isWithinInterval(now, { start, end });
  };

  return {
    getName,
    getIcon,
    getText,
    getMedianCelsiusTemperature,
    getMedianFahrenheitTemperature,
    getMedianChanceOfRain,
    isCurrent,
  };
};

const DayParts = (data) => {
  const hoursForecast = data.forecast.forecastday[0].hour;
  const { localtime } = data.location;

  const morningHours = [];
  const afternoonHours = [];
  const eveningHours = [];
  const overnightHours = [];

  hoursForecast.forEach((hour) => {
    if (
      isWithinInterval(new Date(hour.time), {
        start: setHours(new Date(hour.time), 5),
        end: setHours(new Date(hour.time), 11),
      })
    ) {
      morningHours.push(hour);
    } else if (
      isWithinInterval(new Date(hour.time), {
        start: setHours(new Date(hour.time), 12),
        end: setHours(new Date(hour.time), 16),
      })
    ) {
      afternoonHours.push(hour);
    } else if (
      isWithinInterval(new Date(hour.time), {
        start: setHours(new Date(hour.time), 17),
        end: setHours(new Date(hour.time), 23),
      })
    ) {
      eveningHours.push(hour);
    } else {
      overnightHours.push(hour);
    }
  });

  const getMorning = () => DayPart(localtime, morningHours, 'Morning');
  const getAfternoon = () => DayPart(localtime, afternoonHours, 'Afternoon');
  const getEvening = () => DayPart(localtime, eveningHours, 'Evening');
  const getOvernight = () => DayPart(localtime, overnightHours, 'Overnight');

  const getCurrent = () => {
    const current = [getMorning(), getAfternoon(), getEvening(), getOvernight()]
      .filter((dayPart) => dayPart.isCurrent())
      .pop();

    return current;
  };

  return {
    getMorning,
    getAfternoon,
    getEvening,
    getOvernight,
    getCurrent,
  };
};

export default DayParts;
