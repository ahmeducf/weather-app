/* eslint-disable no-param-reassign */
const renderPollutants = (app) => {
  const airQuality = app.getAirQuality();

  const pollutantsItems = document.querySelectorAll('.pollutants__list__item');
  pollutantsItems.forEach((item) => {
    const pollutantName = item.dataset.pollutant;
    const severityTextSpan = item.querySelector('.label .severity-text');
    const donutChartSVG = item.querySelector('.donut-chart');
    const donutChartIndicator = donutChartSVG.querySelector(
      '.donut-chart-indicator',
    );
    const donutChartText = donutChartSVG.querySelector(
      '.donut-chart-inner-value',
    );

    const setDonutChartIndicator = (polutantIndex, svg, indicator) => {
      if (polutantIndex <= 50) {
        svg.classList.add('good');
        indicator.style.strokeDasharray =
          '25.65634000431664 153.93804002589985';
      } else if (polutantIndex <= 100) {
        svg.classList.add('moderate');
        indicator.style.strokeDasharray =
          '51.31268000863328 153.93804002589985';
      } else if (polutantIndex <= 150) {
        svg.classList.add('unhealthy-for-sensitive-groups');
        indicator.style.strokeDasharray =
          '76.96902001294993 153.93804002589985';
      } else if (polutantIndex <= 200) {
        svg.classList.add('unhealthy');
        indicator.style.strokeDasharray =
          '102.62536001726656 153.93804002589985';
      } else if (polutantIndex <= 300) {
        svg.classList.add('very-unhealthy');
        indicator.style.strokeDasharray =
          '128.2817000215832 153.93804002589985';
      } else {
        svg.classList.add('hazardous');
        indicator.style.strokeDasharray =
          '153.93804002589985 153.93804002589985';
      }
    };

    switch (pollutantName) {
      case 'co': {
        severityTextSpan.textContent = airQuality.getCO().getPollutantText();
        donutChartText.textContent = airQuality.getCO().getPollutant();
        setDonutChartIndicator(
          airQuality.getCO().getPollutant(),
          donutChartSVG,
          donutChartIndicator,
        );
        break;
      }
      case 'no2': {
        severityTextSpan.textContent = airQuality.getNO2().getPollutantText();
        donutChartText.textContent = airQuality.getNO2().getPollutant();
        setDonutChartIndicator(
          airQuality.getNO2().getPollutant(),
          donutChartSVG,
          donutChartIndicator,
        );
        break;
      }
      case 'o3': {
        severityTextSpan.textContent = airQuality.getO3().getPollutantText();
        donutChartText.textContent = airQuality.getO3().getPollutant();
        setDonutChartIndicator(
          airQuality.getO3().getPollutant(),
          donutChartSVG,
          donutChartIndicator,
        );
        break;
      }
      case 'so2': {
        severityTextSpan.textContent = airQuality.getSO2().getPollutantText();
        donutChartText.textContent = airQuality.getSO2().getPollutant();
        setDonutChartIndicator(
          airQuality.getSO2().getPollutant(),
          donutChartSVG,
          donutChartIndicator,
        );
        break;
      }
      case 'pm2_5': {
        severityTextSpan.textContent = airQuality.getPM2_5().getPollutantText();
        donutChartText.textContent = airQuality.getPM2_5().getPollutant();
        setDonutChartIndicator(
          airQuality.getPM2_5().getPollutant(),
          donutChartSVG,
          donutChartIndicator,
        );
        break;
      }
      case 'pm10': {
        severityTextSpan.textContent = airQuality.getPM10().getPollutantText();
        donutChartText.textContent = airQuality.getPM10().getPollutant();
        setDonutChartIndicator(
          airQuality.getPM10().getPollutant(),
          donutChartSVG,
          donutChartIndicator,
        );
        break;
      }
      default:
        break;
    }
  });
};

export default renderPollutants;
