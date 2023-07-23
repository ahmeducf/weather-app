import pubsub from '../pubsub';
import {
  HIDE_LOADING_COMPONENT,
  RENDER_CONTENT,
  SHOW_LOADING_COMPONENT,
} from '../pubsub/events-types';
import {
  showLoadingComponent,
  hideLoadingComponent,
} from './loading-component';
import renderDayHours from './sections/day-hours';
import renderDayParts from './sections/day-parts';
import renderHeader from './sections/header';
import renderPollutants from './sections/pollutants';
import { renderSummaryConditions, renderSummaryAqi } from './sections/summary';
import renderTodayDetails from './sections/today-details';

const initViews = (app) => {
  const isDay = app.getForecast().isDayTime();
  const conditionText = app.getForecast().getConditionText();

  if (
    conditionText.toLowerCase().includes('cloud') ||
    conditionText.toLowerCase().includes('overcast') ||
    conditionText.toLowerCase().includes('fog') ||
    conditionText.toLowerCase().includes('mist')
  ) {
    document.body.classList.add('cloudy');
  } else if (isDay) {
    document.body.classList.add('day');
  } else {
    document.body.classList.add('night');
  }
};

const init = () => {
  pubsub.subscribe(SHOW_LOADING_COMPONENT, showLoadingComponent);
  pubsub.subscribe(HIDE_LOADING_COMPONENT, hideLoadingComponent);
  pubsub.subscribe(RENDER_CONTENT, (app) => {
    initViews(app);

    renderHeader(app);
    renderSummaryConditions(app);
    renderSummaryAqi(app);
    renderDayParts(app);
    renderTodayDetails(app);
    renderDayHours(app);
    renderPollutants(app);
  });
};

export default {
  init,
};
