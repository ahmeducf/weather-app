import pubsub from '../pubsub';
import {
  SHOW_LOADING_COMPONENT,
  HIDE_LOADING_COMPONENT,
  RENDER_CONTENT,
  FETCH_ERROR,
  UNIT_CHANGE,
} from '../pubsub/events-types';
import App from '../models';
import { fetchForecastData } from '../services';

const subscribeToUnitChange = (app) => {
  pubsub.subscribe(UNIT_CHANGE, (unit) => {
    console.log('UNIT_CHANGE', unit);
    app.setTemperatureFormat(unit);
    pubsub.publish(RENDER_CONTENT, app);
  });
};

const init = () => {
  pubsub.publish(SHOW_LOADING_COMPONENT);

  fetchForecastData('Cairo')
    .then((data) => {
      const app = App(data);

      subscribeToUnitChange(app);

      pubsub.publish(RENDER_CONTENT, app);

      setTimeout(() => {
        pubsub.publish(HIDE_LOADING_COMPONENT);
      }, 300);
    })
    .catch((error) => {
      pubsub.publish(FETCH_ERROR, error);
      console.error(error);
    });
};

export default {
  init,
};
