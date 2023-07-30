import DayHours from '../../models/day-hours';
import data from '../__mocks__/data';

const dayHours = DayHours(data);

describe('DayHours', () => {
  it('should return current hour', () => {
    expect(dayHours.getCurrent().getTime()).toBe('8:00 PM');
  });

  it('should return hours', () => {
    expect(dayHours.getHours()).toBeInstanceOf(Array);
  });

  it('should return hours with correct length', () => {
    expect(dayHours.getHours().length).toBe(24);
  });
});

describe('DayHour', () => {
  const hour = dayHours.getHours()[0];

  it('should return correct time', () => {
    expect(hour.getTime()).toBe('0:00 AM');
  });

  it('should return correct condition icon', () => {
    expect(hour.getConditionIcon()).toBe(
      '//cdn.weatherapi.com/weather/128x128/night/113.png',
    );
  });

  it('should return correct condition text', () => {
    expect(hour.getConditionText()).toBe('Clear');
  });

  it('should return correct celsius temperature', () => {
    expect(hour.getCelsiusTemperature()).toBe(26);
  });

  it('should return correct fahrenheit temperature', () => {
    expect(hour.getFahrenheitTemperature()).toBe(80);
  });

  it('should return correct chance of rain', () => {
    expect(hour.getChanceOfRain()).toBe(0);
  });

  it('should return true if current', () => {
    expect(hour.isCurrent()).toBeFalsy();
  });

  it('should return correct hour index in sorted array', () => {
    expect(hour.getHourIndexInSortedArray()).toBe(0);
  });
});
