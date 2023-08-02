const renderAqiSummary = (app) => {
  const donutChartSVG = document.querySelector(
    '.air-quality-index__severity .severity__donut-chart .donut-chart',
  );
  const donutChartIndicator = donutChartSVG.querySelector(
    '.donut-chart-indicator',
  );
  const donutChartText = donutChartSVG.querySelector(
    '.donut-chart-inner-value',
  );
  const severityTitleSpan = document.querySelector(
    '.air-quality-index__severity .severity__text .title',
  );
  const descriptionTextSpan = document.querySelector(
    '.air-quality-index__severity .severity__text .description',
  );

  const airQuality = app.getAirQuality();
  const airQualityIndex = airQuality.getAirQualityIndex();
  const airQualityIndexText = airQuality.getAirQualityIndexText();
  const airQualityIndexDescription = airQuality.getAirQualityIndexDescription();

  if (airQualityIndex <= 50) {
    donutChartSVG.classList.add('good');
    donutChartSVG.classList.remove(
      'moderate',
      'unhealthy-for-sensitive-groups',
      'unhealthy',
      'very-unhealthy',
      'hazardous',
    );

    donutChartIndicator.style.strokeDasharray =
      '28.797932657906433 172.78759594743863';
  } else if (airQualityIndex <= 100) {
    donutChartSVG.classList.add('moderate');
    donutChartSVG.classList.remove(
      'good',
      'unhealthy-for-sensitive-groups',
      'unhealthy',
      'very-unhealthy',
      'hazardous',
    );

    donutChartIndicator.style.strokeDasharray =
      '57.595865315812866 172.78759594743863';
  } else if (airQualityIndex <= 150) {
    donutChartSVG.classList.add('unhealthy-for-sensitive-groups');
    donutChartSVG.classList.remove(
      'good',
      'moderate',
      'unhealthy',
      'very-unhealthy',
      'hazardous',
    );
    donutChartIndicator.style.strokeDasharray =
      '86.39379797371932 172.78759594743863';
  } else if (airQualityIndex <= 200) {
    donutChartSVG.classList.add('unhealthy');
    donutChartSVG.classList.remove(
      'good',
      'moderate',
      'unhealthy-for-sensitive-groups',
      'very-unhealthy',
      'hazardous',
    );
    donutChartIndicator.style.strokeDasharray =
      '115.19173063162564 172.78759594743863';
  } else if (airQualityIndex <= 300) {
    donutChartSVG.classList.add('very-unhealthy');
    donutChartSVG.classList.remove(
      'good',
      'moderate',
      'unhealthy-for-sensitive-groups',
      'unhealthy',
      'hazardous',
    );
    donutChartIndicator.style.strokeDasharray =
      '144.9896632895322 172.78759594743863';
  } else {
    donutChartSVG.classList.add('hazardous');
    donutChartSVG.classList.remove(
      'good',
      'moderate',
      'unhealthy-for-sensitive-groups',
      'unhealthy',
      'very-unhealthy',
    );
    donutChartIndicator.style.strokeDasharray =
      '172.78759594743863 172.78759594743863';
  }

  donutChartText.textContent = airQualityIndex;

  severityTitleSpan.textContent = airQualityIndexText;
  descriptionTextSpan.textContent = airQualityIndexDescription;
};

export default renderAqiSummary;
