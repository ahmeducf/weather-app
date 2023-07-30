import Forecast from '../../models/forecast';
import data from '../__mocks__/data';

describe('Forecast', () => {
  const forecast = Forecast(data);

  it('should return the forecast time', () => {
    expect(forecast.getForecastTime()).toBe('2023-07-30 20:00');
  });

  it('should return if it is day time', () => {
    expect(forecast.isDayTime()).toBeFalsy();
  });

  it('should return the forecast condition text', () => {
    expect(forecast.getConditionText()).toBe('Clear');
  });

  it('should return the forecast condition icon', () => {
    expect(forecast.getConditionIcon()).toBe(
      '//cdn.weatherapi.com/weather/128x128/night/113.png',
    );
  });

  it('should return the forecast celsius temperature', () => {
    expect(forecast.getCelsiusTemperature()).toBe(31);
  });

  it('should return the forecast fahrenheit temperature', () => {
    expect(forecast.getFahrenheitTemperature()).toBe(88);
  });

  it('should return the forecast high celsius temperature', () => {
    expect(forecast.getHighCelsiusTemperature()).toBe(41);
  });

  it('should return the forecast high fahrenheit temperature', () => {
    expect(forecast.getHighFahrenheitTemperature()).toBe(106);
  });

  it('should return the forecast low celsius temperature', () => {
    expect(forecast.getLowCelsiusTemperature()).toBe(25);
  });

  it('should return the forecast low fahrenheit temperature', () => {
    expect(forecast.getLowFahrenheitTemperature()).toBe(77);
  });

  it('should return the forecast wind kph', () => {
    expect(forecast.getWindKph()).toBeCloseTo(28.8);
  });

  it('should return the forecast humidity', () => {
    expect(forecast.getHumidity()).toBe(39);
  });

  it('should return the forecast pressure mb', () => {
    expect(forecast.getPressureMb()).toBe(1006);
  });

  it('should return the forecast visibility km', () => {
    expect(forecast.getVisibilityKm()).toBe(10);
  });

  it('should return the forecast uv index', () => {
    expect(forecast.getUvIndex()).toBe(1);
  });

  it('should return the forecast moon phase', () => {
    expect(forecast.getMoonPhase()).toBe('Waxing Gibbous');
  });

  it('should return the forecast sunrise time', () => {
    expect(forecast.getSunriseTime()).toBe('05:13 AM');
  });

  it('should return the forecast sunset time', () => {
    expect(forecast.getSunsetTime()).toBe('06:50 PM');
  });

  it('should return the forecast feels like celsius temperature', () => {
    expect(forecast.getFeelsLikeCelsiusTemperature()).toBe(31);
  });

  it('should return the forecast feels like fahrenheit temperature', () => {
    expect(forecast.getFeelsLikeFahrenheitTemperature()).toBe(89);
  });

  it('should return the forecast dew point celsius temperature', () => {
    expect(forecast.getDewPointCelsiusTemperature()).toBe(15);
  });

  it('should return the forecast dew point fahrenheit temperature', () => {
    expect(forecast.getDewPointFahrenheitTemperature()).toBe(60);
  });
});
