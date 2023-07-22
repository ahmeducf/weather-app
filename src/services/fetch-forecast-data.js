const API_KEY = 'c33d409e23f845748e431828231507';
const BASE_URL = 'https://api.weatherapi.com/v1/forecast.json';
const DAYS = 1;
const AQI = 'yes';
const ALERTS = 'no';

async function fetchForecastData(query) {
  const requestUrl = `${BASE_URL}?key=${API_KEY}&q=${query}&days=${DAYS}&aqi=${AQI}&alerts=${ALERTS}`;

  const response = await fetch(requestUrl, { mode: 'cors' });
  if (!response.ok) {
    throw new Error(
      `Request failed with status code ${response.status}: ${response.statusText}`,
    );
  }

  const data = await response.json();
  if (data.error) {
    throw new Error(data.error.message);
  }

  return data;
}

export default fetchForecastData;
