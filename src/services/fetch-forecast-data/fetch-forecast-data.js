import fetchForecastDataFactory from './fetch-forecast-data.factory';

const fetchForecastData = async (query) =>
  fetchForecastDataFactory(fetch, query);

export default fetchForecastData;
