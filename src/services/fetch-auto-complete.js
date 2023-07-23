// I know this is not a good practice to store API key in the frontend code,
// but I don't have a backend to hide it,
// and this is just a demo project and the key is public and free.
const API_KEY = 'c33d409e23f845748e431828231507';
const BASE_URL = 'https://api.weatherapi.com/v1/search.json';

async function fetchAutoComplete(query) {
  const requestUrl = `${BASE_URL}?key=${API_KEY}&q=${query}`;

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

export default fetchAutoComplete;
