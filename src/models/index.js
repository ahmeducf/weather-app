import Location from './location';
import Forecast from './forecast';
import DayParts from './day-parts';
import DayHours from './day-hours';
import AirQuality from './air-quality';

const APP = (data) => {
  if (!data || !data.location || !data.current || !data.forecast) {
    throw new Error('APP must be initialized with data');
  }

  const location = Location(data.location);
  const forecast = Forecast(data);
  const airQuality = AirQuality(data.current.air_quality);
  const dayParts = DayParts(data.forecast.forecastday.hour);
  const dayHours = DayHours(data.forecast.forecastday.hour);

  const getLocation = () => location;
  const getForecast = () => forecast;
  const getDayParts = () => dayParts;
  const getDayHours = () => dayHours;
  const getAirQuality = () => airQuality;

  return {
    getLocation,
    getForecast,
    getDayParts,
    getDayHours,
    getAirQuality,
  };
};

export default APP;
