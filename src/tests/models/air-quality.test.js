import AirQuality from '../../models/air-quality';
import data from '../__mocks__/data';

describe('AirQuality', () => {
  const airQuality = AirQuality(data.current.air_quality);

  it('should throw error if no data is provided', () => {
    expect(() => AirQuality()).toThrow(
      'AirQuality must be initialized with data',
    );
  });

  it('should return air quality index', () => {
    expect(airQuality.getAirQualityIndex()).toBe(199);
  });

  it('should return air quality index text', () => {
    expect(airQuality.getAirQualityIndexText()).toBe('Unhealthy');
  });

  it('should return air quality index description', () => {
    expect(airQuality.getAirQualityIndexDescription()).toBe(
      'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects',
    );
  });

  it('should return co pollutant', () => {
    expect(airQuality.getCO().getPollutant()).toBe(199);
  });

  it('should return co pollutant text', () => {
    expect(airQuality.getCO().getPollutantText()).toBe('Unhealthy');
  });

  it('should return no2 pollutant', () => {
    expect(airQuality.getNO2().getPollutant()).toBe(5);
  });

  it('should return no2 pollutant text', () => {
    expect(airQuality.getNO2().getPollutantText()).toBe('Good');
  });

  it('should return o3 pollutant', () => {
    expect(airQuality.getO3().getPollutant()).toBe(103);
  });

  it('should return o3 pollutant text', () => {
    expect(airQuality.getO3().getPollutantText()).toBe(
      'Unhealthy for Sensitive Groups',
    );
  });

  it('should return so2 pollutant', () => {
    expect(airQuality.getSO2().getPollutant()).toBe(16);
  });

  it('should return so2 pollutant text', () => {
    expect(airQuality.getSO2().getPollutantText()).toBe('Good');
  });

  it('should return pm2_5 pollutant', () => {
    expect(airQuality.getPM2_5().getPollutant()).toBe(8);
  });

  it('should return pm2_5 pollutant text', () => {
    expect(airQuality.getPM2_5().getPollutantText()).toBe('Good');
  });

  it('should return pm10 pollutant', () => {
    expect(airQuality.getPM10().getPollutant()).toBe(16);
  });

  it('should return pm10 pollutant text', () => {
    expect(airQuality.getPM10().getPollutantText()).toBe('Good');
  });
});
