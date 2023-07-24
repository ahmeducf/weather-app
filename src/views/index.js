import pubsub from '../pubsub';
import {
  HIDE_LOADING_COMPONENT,
  RENDER_CONTENT,
  SHOW_LOADING_COMPONENT,
  SHOW_SEARCH_LOADING_COMPONENT,
  SHOW_SEARCH_LOCATION_RESULT,
} from '../pubsub/events-types';
import {
  showLoadingComponent,
  hideLoadingComponent,
} from './loading-component';
import renderDayHours from './sections/day-hours';
import renderDayParts from './sections/day-parts';
import renderHeader from './sections/header';
import {
  showSearchLoadingComponent,
  showSearchResults,
} from './sections/header/search-box/search-locations';
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
    conditionText.toLowerCase().includes('mist') ||
    conditionText.toLowerCase().includes('haze') ||
    conditionText.toLowerCase().includes('smoke') ||
    conditionText.toLowerCase().includes('dust')
  ) {
    document.body.classList.add('cloudy');
  } else if (isDay) {
    document.body.classList.add('day');
  } else {
    document.body.classList.add('night');
  }

  document.body.addEventListener('click', (e) => {
    const isSearchResults = e.target.closest('.search-results');

    if (!isSearchResults) {
      const searchResults = document.querySelector('.search-results');
      searchResults.classList.add('hidden');
    }
  });
};

const init = () => {
  pubsub.subscribe(SHOW_LOADING_COMPONENT, showLoadingComponent);
  pubsub.subscribe(HIDE_LOADING_COMPONENT, hideLoadingComponent);

  pubsub.subscribe(SHOW_SEARCH_LOADING_COMPONENT, showSearchLoadingComponent);
  pubsub.subscribe(SHOW_SEARCH_LOCATION_RESULT, showSearchResults);

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
