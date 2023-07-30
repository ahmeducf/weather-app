import fetchAutoCompleteFactory from '../../services/fetch-auto-complete/fetch-auto-complete.factory';
import autoCompleteResult from '../__mocks__/auto-complete-result';

let fetchAutoComplete;
let fakeFetch;

beforeEach(() => {
  fakeFetch = jest.fn();
  fetchAutoComplete = async (query) =>
    fetchAutoCompleteFactory(fakeFetch, query);
});

describe('fetchAutoComplete', () => {
  it('should return the auto complete result', async () => {
    fakeFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(autoCompleteResult),
    });

    const result = await fetchAutoComplete('miami');
    expect(fakeFetch).toHaveBeenCalledTimes(1);
    expect(fakeFetch).toHaveBeenCalledWith(
      'https://api.weatherapi.com/v1/search.json?key=c33d409e23f845748e431828231507&q=miami',
      { mode: 'cors' },
    );
    expect(result).toEqual(autoCompleteResult);
  });

  it('should throw an error if the response is not ok', async () => {
    fakeFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    });

    await expect(fetchAutoComplete('miami')).rejects.toThrow(
      'Request failed with status code 404: Not Found',
    );
  });

  it('should throw an error if the response has an error', async () => {
    fakeFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ error: { message: 'API key not valid' } }),
    });

    await expect(fetchAutoComplete('miami')).rejects.toThrow(
      /^API key not valid$/,
    );
  });
});
