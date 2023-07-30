import APP from '../../models/index';
import data from '../__mocks__/data';

describe('APP', () => {
  const app = APP(data);

  it('should throw error if no data is provided', () => {
    expect(() => APP()).toThrow('APP must be initialized with data');
  });

  it('should return an object', () => {
    expect(app).toBeInstanceOf(Object);
  });

  it('should return an object with a method called getLocation', () => {
    expect(app.getLocation).toBeInstanceOf(Function);
  });

  it('should return an object with a method called getForecast', () => {
    expect(app.getForecast).toBeInstanceOf(Function);
  });

  it('should return an object with a method called getDayParts', () => {
    expect(app.getDayParts).toBeInstanceOf(Function);
  });

  it('should return an object with a method called getDayHours', () => {
    expect(app.getDayHours).toBeInstanceOf(Function);
  });

  it('should return an object with a method called getAirQuality', () => {
    expect(app.getAirQuality).toBeInstanceOf(Function);
  });

  it('should return an object with a method called isCelsius', () => {
    expect(app.isCelsius).toBeInstanceOf(Function);
  });

  it('should return an object with a method called setTemperatureFormat', () => {
    expect(app.setTemperatureFormat).toBeInstanceOf(Function);
  });

  it('should return an object with a method called setTemperatureFormat', () => {
    expect(app.setTemperatureFormat).toBeInstanceOf(Function);
  });
});
