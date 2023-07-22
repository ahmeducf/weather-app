import { isWithinInterval, setHours } from 'date-fns';

const DayPart = (dayPartHours, name) => {
  const { icon } = dayPartHours[0].condition;
  const { text } = dayPartHours[0].condition;

  const averageCelsiusTemperature = Math.round(
    dayPartHours.reduce((total, hour) => total + hour.temp_c, 0) /
      dayPartHours.length,
  );
  const averageFahrenheitTemperature = Math.round(
    dayPartHours.reduce((total, hour) => total + hour.temp_f, 0) /
      dayPartHours.length,
  );

  const averageChanceOfRain = Math.round(
    dayPartHours.reduce((total, hour) => total + hour.chance_of_rain, 0) /
      dayPartHours.length,
  );

  const getName = () => name;
  const getIcon = () => icon;
  const getText = () => text;
  const getAverageCelsiusTemperature = () => averageCelsiusTemperature;
  const getAverageFahrenheitTemperature = () => averageFahrenheitTemperature;
  const getAverageChanceOfRain = () => averageChanceOfRain;

  const isCurrent = () => {
    const now = new Date();
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
    getAverageCelsiusTemperature,
    getAverageFahrenheitTemperature,
    getAverageChanceOfRain,
    isCurrent,
  };
};

const DayParts = (hoursForecast) => {
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
        end: setHours(new Date(hour.time), 20),
      })
    ) {
      eveningHours.push(hour);
    } else {
      overnightHours.push(hour);
    }
  });

  const getMorning = () => DayPart(morningHours, 'Morning');
  const getAfternoon = () => DayPart(afternoonHours, 'Afternoon');
  const getEvening = () => DayPart(eveningHours, 'Evening');
  const getOvernight = () => DayPart(overnightHours, 'Overnight');

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
