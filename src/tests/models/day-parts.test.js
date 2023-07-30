import DayParts from '../../models/day-parts';
import data from '../__mocks__/data';

const dayParts = DayParts(data);

describe('DayParts', () => {
  it('should return current day part', () => {
    expect(dayParts.getCurrent().getName()).toBe('Evening');
  });
});

describe('DayParts morning', () => {
  it('should return correct name', () => {
    expect(dayParts.getMorning().getName()).toBe('Morning');
  });

  it('should return correct icon', () => {
    expect(dayParts.getMorning().getIcon()).toBe(
      '//cdn.weatherapi.com/weather/128x128/day/113.png',
    );
  });

  it('should return correct text', () => {
    expect(dayParts.getMorning().getText()).toBe('Sunny');
  });

  it('should return correct median celsius temperature', () => {
    expect(dayParts.getMorning().getMedianCelsiusTemperature()).toBe(28);
  });

  it('should return correct median fahrenheit temperature', () => {
    expect(dayParts.getMorning().getMedianFahrenheitTemperature()).toBe(82);
  });

  it('should return correct median chance of rain', () => {
    expect(dayParts.getMorning().getMedianChanceOfRain()).toBe(0);
  });

  it('should return true if current', () => {
    expect(dayParts.getMorning().isCurrent()).toBeFalsy();
  });
});

describe('DayParts afternoon', () => {
  it('should return correct name', () => {
    expect(dayParts.getAfternoon().getName()).toBe('Afternoon');
  });

  it('should return correct icon', () => {
    expect(dayParts.getAfternoon().getIcon()).toBe(
      '//cdn.weatherapi.com/weather/128x128/day/113.png',
    );
  });

  it('should return correct text', () => {
    expect(dayParts.getAfternoon().getText()).toBe('Sunny');
  });

  it('should return correct median celsius temperature', () => {
    expect(dayParts.getAfternoon().getMedianCelsiusTemperature()).toBe(41);
  });

  it('should return correct median fahrenheit temperature', () => {
    expect(dayParts.getAfternoon().getMedianFahrenheitTemperature()).toBe(106);
  });

  it('should return correct median chance of rain', () => {
    expect(dayParts.getAfternoon().getMedianChanceOfRain()).toBe(0);
  });

  it('should return true if current', () => {
    expect(dayParts.getAfternoon().isCurrent()).toBeFalsy();
  });
});

describe('DayParts evening', () => {
  it('should return correct name', () => {
    expect(dayParts.getEvening().getName()).toBe('Evening');
  });

  it('should return correct icon', () => {
    expect(dayParts.getEvening().getIcon()).toBe(
      '//cdn.weatherapi.com/weather/128x128/night/113.png',
    );
  });

  it('should return correct text', () => {
    expect(dayParts.getEvening().getText()).toBe('Clear');
  });

  it('should return correct median celsius temperature', () => {
    expect(dayParts.getEvening().getMedianCelsiusTemperature()).toBe(31);
  });

  it('should return correct median fahrenheit temperature', () => {
    expect(dayParts.getEvening().getMedianFahrenheitTemperature()).toBe(88);
  });

  it('should return correct median chance of rain', () => {
    expect(dayParts.getEvening().getMedianChanceOfRain()).toBe(0);
  });

  it('should return true if current', () => {
    expect(dayParts.getEvening().isCurrent()).toBeTruthy();
  });
});

describe('DayParts overnight', () => {
  it('should return correct name', () => {
    expect(dayParts.getOvernight().getName()).toBe('Overnight');
  });

  it('should return correct icon', () => {
    expect(dayParts.getOvernight().getIcon()).toBe(
      '//cdn.weatherapi.com/weather/128x128/night/113.png',
    );
  });

  it('should return correct text', () => {
    expect(dayParts.getOvernight().getText()).toBe('Clear');
  });

  it('should return correct median celsius temperature', () => {
    expect(dayParts.getOvernight().getMedianCelsiusTemperature()).toBe(26);
  });

  it('should return correct median fahrenheit temperature', () => {
    expect(dayParts.getOvernight().getMedianFahrenheitTemperature()).toBe(78);
  });

  it('should return correct median chance of rain', () => {
    expect(dayParts.getOvernight().getMedianChanceOfRain()).toBe(0);
  });

  it('should return true if current', () => {
    expect(dayParts.getOvernight().isCurrent()).toBeFalsy();
  });
});
