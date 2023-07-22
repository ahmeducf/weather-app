import pubsub from '../pubsub';
import {
  SHOW_LOADING_COMPONENT,
  HIDE_LOADING_COMPONENT,
  RENDER_CONTENT,
  FETCH_ERROR,
} from '../pubsub/events-types';
import App from '../models';
import { fetchForecastData } from '../services';

const init = () => {
  pubsub.publish(SHOW_LOADING_COMPONENT);

  fetchForecastData('Cairo')
    .then((data) => {
      const app = App(data);
      pubsub.publish(RENDER_CONTENT, app);
      pubsub.publish(HIDE_LOADING_COMPONENT);
    })
    .catch((error) => {
      pubsub.publish(FETCH_ERROR, error);
    });
};

export default {
  init,
};
