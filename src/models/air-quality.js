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
  if (
    !data ||
    !data.co ||
    !data.no2 ||
    !data.o3 ||
    !data.so2 ||
    !data.pm2_5 ||
    !data.pm10
  ) {
    throw new Error('AirQuality must be initialized with data');
  }

  const { co, no2, o3, so2, pm2_5, pm10 } = data;

  const getAirQualityIndex = () => {
    const airQualityIndex = Math.max(co, no2, o3, so2, pm2_5, pm10);
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

  const getCO = () => Pollutant(co);
  const getNO2 = () => Pollutant(no2);
  const getO3 = () => Pollutant(o3);
  const getSO2 = () => Pollutant(so2);
  const getPM2_5 = () => Pollutant(pm2_5);
  const getPM10 = () => Pollutant(pm10);

  return {
    getAirQualityIndex,
    getAirQualityIndexText,
    getCO,
    getNO2,
    getO3,
    getSO2,
    getPM2_5,
    getPM10,
  };
};

export default AirQuality;
