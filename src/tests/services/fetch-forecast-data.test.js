import fetchForecastDataFactory from '../../services/fetch-forecast-data/fetch-forecast-data.factory';
import data from '../__mocks__/data';

let fetchForecastData;
let fetchForecastDataFactoryMock;
let fetchMock;

beforeEach(() => {
  fetchMock = jest.fn();
  fetchForecastDataFactoryMock = jest.fn(fetchForecastDataFactory);
  fetchForecastData = async (query) =>
    fetchForecastDataFactoryMock(fetchMock, query);
});

describe('fetchForecastData', () => {
  it('should call fetchForecastDataFactory with fetch and query', async () => {
    fetchForecastDataFactoryMock.mockReturnValueOnce(data);
    await fetchForecastData('query');
    expect(fetchForecastDataFactoryMock).toHaveBeenCalledWith(
      fetchMock,
      'query',
    );
  });

  it('should return data', async () => {
    fetchForecastDataFactoryMock.mockReturnValueOnce(data);
    const result = await fetchForecastData('query');
    expect(result).toEqual(data);
  });

  it('should call fetch with requestUrl', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(data),
    });

    await fetchForecastData('cairo');

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.weatherapi.com/v1/forecast.json?key=c33d409e23f845748e431828231507&q=cairo&days=1&aqi=yes&alerts=no',
      { mode: 'cors' },
    );
  });

  it('should throw an error if the response is not ok', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    });

    await expect(fetchForecastData('cairo')).rejects.toThrow(
      'Request failed with status code 404: Not Found',
    );
  });

  it('should throw an error if the response has an error', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ error: { message: 'API key not valid' } }),
    });

    await expect(fetchForecastData('cairo')).rejects.toThrow(
      /^API key not valid$/,
    );
  });
});
