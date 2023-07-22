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

const initViews = (app) => {
  const isDay = app.getForecast().isDayTime();
  const conditionText = app.getForecast().getConditionText();

  if (conditionText.includes('cloud')) {
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
    console.log(app);
  });
};

export default {
  init,
};
