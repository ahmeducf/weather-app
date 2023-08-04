import pubsub from '../pubsub';
import {
  SHOW_LOADING_COMPONENT,
  HIDE_LOADING_COMPONENT,
  RENDER_CONTENT,
  FETCH_ERROR,
  UNIT_CHANGE,
  USE_MY_LOCATION_REQUESTED,
  SEARCH_LOCATION,
  SHOW_SEARCH_LOADING_COMPONENT,
  SHOW_SEARCH_LOCATION_RESULT,
  FETCH_SELECTED_LOCATION,
} from '../pubsub/events-types';
import App from '../models';
import {
  fetchForecastData,
  fetchAutoComplete,
  getUserPosition,
} from '../services';

let app = null;

window.addEventListener('unhandledrejection', (e) => {
  console.error(e);
  pubsub.publish(FETCH_ERROR, e);
});

const fetchSuccess = async (data) => {
  app = App(data);

  await new Promise((resolve) => {
    pubsub.publish(RENDER_CONTENT, app);
    resolve();
  });

  pubsub.publish(HIDE_LOADING_COMPONENT);

  return app;
};

const fetchError = (error) => {
  pubsub.publish(FETCH_ERROR, error);
  console.error(error);
};

const subscribeToUnitChange = () => {
  pubsub.subscribe(UNIT_CHANGE, (unit) => {
    app.setTemperatureFormat(unit);
    pubsub.publish(RENDER_CONTENT, app);
  });
};

const subscribeToMyLocationRequest = () => {
  pubsub.subscribe(USE_MY_LOCATION_REQUESTED, async () => {
    getUserPosition()
      .then((position) => {
        pubsub.publish(SHOW_LOADING_COMPONENT);

        const { latitude, longitude } = position.coords;
        const query = `${latitude},${longitude}`;

        return query;
      })
      .then(fetchForecastData)
      .then(fetchSuccess)
      .catch(fetchError);
  });
};

const subscribeToSearchLocation = () => {
  pubsub.subscribe(SEARCH_LOCATION, async (query) => {
    pubsub.publish(SHOW_SEARCH_LOADING_COMPONENT);

    fetchAutoComplete(query)
      .then((results) => {
        pubsub.publish(SHOW_SEARCH_LOCATION_RESULT, results);
      })
      .catch(fetchError);
  });
};

const subscribeToFetchSelectedLocation = () => {
  pubsub.subscribe(FETCH_SELECTED_LOCATION, async (query) => {
    pubsub.publish(SHOW_LOADING_COMPONENT);

    fetchForecastData(query).then(fetchSuccess).catch(fetchError);
  });
};

const subscribeToEvents = () => {
  subscribeToUnitChange();
  subscribeToMyLocationRequest();
  subscribeToSearchLocation();
  subscribeToFetchSelectedLocation();
};

const init = () => {
  pubsub.publish(SHOW_LOADING_COMPONENT);

  fetchForecastData('Cairo')
    .then(fetchSuccess)
    .then(subscribeToEvents)
    .catch(fetchError);
};

export default {
  init,
};
