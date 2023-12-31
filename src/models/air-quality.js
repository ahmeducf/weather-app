/* eslint-disable camelcase */

const Pollutant = (pollutant) => {
  if (!pollutant) {
    throw new Error('Pollutant must be a value greater than or equal to 0');
  }

  const getPollutant = () => Math.round(pollutant);
  const getPollutantText = () => {
    let pollutantText = '';
    if (pollutant <= 50) {
      pollutantText = 'Good';
    } else if (pollutant <= 100) {
      pollutantText = 'Moderate';
    } else if (pollutant <= 150) {
      pollutantText = 'Unhealthy for Sensitive Groups';
    } else if (pollutant <= 200) {
      pollutantText = 'Unhealthy';
    } else if (pollutant <= 300) {
      pollutantText = 'Very Unhealthy';
    } else {
      pollutantText = 'Hazardous';
    }
    return pollutantText;
  };

  return {
    getPollutant,
    getPollutantText,
  };
};

const AirQuality = (data) => {
  if (!data) {
    throw new Error('AirQuality must be initialized with data');
  }

  const currentAirQuality = data.current.air_quality;
  const forecastAirQuality = data.forecast.forecastday[0].day.air_quality;

  const co = (currentAirQuality.co ?? forecastAirQuality.co ?? 0) % 75;
  const no2 = currentAirQuality.no2 ?? forecastAirQuality.no2 ?? 0;
  const o3 = (currentAirQuality.o3 ?? forecastAirQuality.o3 ?? 0) % 101;
  const so2 = currentAirQuality.so2 ?? forecastAirQuality.so2 ?? 0;
  const pm2_5 = currentAirQuality.pm2_5 ?? forecastAirQuality.pm2_5 ?? 0;
  const pm10 = currentAirQuality.pm10 ?? forecastAirQuality.pm10 ?? 0;

  const getAirQualityIndex = () => {
    const airQualityIndex = Math.round(Math.max(co, no2, o3, so2, pm2_5, pm10));
    return airQualityIndex;
  };

  const getAirQualityIndexText = () => {
    const airQualityIndex = getAirQualityIndex();
    let airQualityIndexText = '';
    if (airQualityIndex <= 50) {
      airQualityIndexText = 'Good';
    } else if (airQualityIndex <= 100) {
      airQualityIndexText = 'Moderate';
    } else if (airQualityIndex <= 150) {
      airQualityIndexText = 'Unhealthy for Sensitive Groups';
    } else if (airQualityIndex <= 200) {
      airQualityIndexText = 'Unhealthy';
    } else if (airQualityIndex <= 300) {
      airQualityIndexText = 'Very Unhealthy';
    } else {
      airQualityIndexText = 'Hazardous';
    }
    return airQualityIndexText;
  };

  const getAirQualityIndexDescription = () => {
    const airQualityIndex = getAirQualityIndex();
    let airQualityIndexDescription = '';
    if (airQualityIndex <= 50) {
      airQualityIndexDescription =
        'Air quality is considered satisfactory, and air pollution poses little or no risk';
    } else if (airQualityIndex <= 100) {
      airQualityIndexDescription =
        'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution';
    } else if (airQualityIndex <= 150) {
      airQualityIndexDescription =
        'Members of sensitive groups may experience health effects. The general public is not likely to be affected';
    } else if (airQualityIndex <= 200) {
      airQualityIndexDescription =
        'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects';
    } else if (airQualityIndex <= 300) {
      airQualityIndexDescription =
        'Health warnings of emergency conditions. The entire population is more likely to be affected';
    } else {
      airQualityIndexDescription =
        'Health alert: everyone may experience more serious health effects';
    }
    return airQualityIndexDescription;
  };

  const getCO = () => Pollutant(co);
  const getNO2 = () => Pollutant(no2);
  const getO3 = () => Pollutant(o3);
  const getSO2 = () => Pollutant(so2);
  const getPM2_5 = () => Pollutant(pm2_5);
  const getPM10 = () => Pollutant(pm10);

  return {
    getAirQualityIndex,
    getAirQualityIndexText,
    getAirQualityIndexDescription,
    getCO,
    getNO2,
    getO3,
    getSO2,
    getPM2_5,
    getPM10,
  };
};

export default AirQuality;
