import Location from './location';
import Forecast from './forecast';
import DayParts from './day-parts';
import DayHours from './day-hours';
import AirQuality from './air-quality';
import { CELSIUS } from '../app/constants';

const APP = (data) => {
  if (!data || !data.location || !data.current || !data.forecast) {
    throw new Error('APP must be initialized with data');
  }

  const location = Location(data.location);
  const forecast = Forecast(data);
  const airQuality = AirQuality(data.current.air_quality);
  const dayParts = DayParts(data);
  const dayHours = DayHours(data);
  const TemperatureFormat = CELSIUS;

  const getLocation = () => location;
  const getForecast = () => forecast;
  const getDayParts = () => dayParts;
  const getDayHours = () => dayHours;
  const getAirQuality = () => airQuality;
  const isCelsius = () => TemperatureFormat === CELSIUS;

  return {
    getLocation,
    getForecast,
    getDayParts,
    getDayHours,
    getAirQuality,
    isCelsius,
  };
};

export default APP;
