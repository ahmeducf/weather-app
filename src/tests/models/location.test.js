import Location from '../../models/location';
import data from '../__mocks__/data';

describe('Location', () => {
  const location = Location(data.location);

  it('should throw error if no data is provided', () => {
    expect(() => Location()).toThrow('Location must be initialized with data');
  });

  it('should return correct local time', () => {
    expect(location.getLocalTime()).toBe('8:06 PM GMT+3');
  });

  it('should return correct name', () => {
    expect(location.getName()).toBe('Cairo, Egypt');
  });
});
