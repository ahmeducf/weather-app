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

const fetchSuccess = (data) => {
  const app = App(data);

  pubsub.publish(RENDER_CONTENT, app);

  setTimeout(() => {
    pubsub.publish(HIDE_LOADING_COMPONENT);
  }, 300);

  return app;
};

const fetchError = (error) => {
  pubsub.publish(FETCH_ERROR, error);
  console.error(error);
};

const subscribeToUnitChange = (app) => {
  pubsub.subscribe(UNIT_CHANGE, (unit) => {
    app.setTemperatureFormat(unit);
    pubsub.publish(RENDER_CONTENT, app);
  });
};

const subscribeToMyLocationRequest = (app) => {
  pubsub.subscribe(USE_MY_LOCATION_REQUESTED, async () => {
    pubsub.publish(SHOW_LOADING_COMPONENT);

    const position = await getUserPosition();
    const { latitude, longitude } = position.coords;
    const query = `${latitude},${longitude}`;

    fetchForecastData(query).then(fetchSuccess).catch(fetchError);
  });
};

const subscribeToSearchLocation = (app) => {
  pubsub.subscribe(SEARCH_LOCATION, async (query) => {
    pubsub.publish(SHOW_SEARCH_LOADING_COMPONENT);

    fetchAutoComplete(query)
      .then((results) => {
        pubsub.publish(SHOW_SEARCH_LOCATION_RESULT, results);
      })
      .catch(fetchError);
  });
};

const subscribeToFetchSelectedLocation = (app) => {
  pubsub.subscribe(FETCH_SELECTED_LOCATION, async (query) => {
    pubsub.publish(SHOW_LOADING_COMPONENT);

    fetchForecastData(query).then(fetchSuccess).catch(fetchError);
  });
};

const subscribeToEvents = (app) => {
  subscribeToUnitChange(app);
  subscribeToMyLocationRequest(app);
  subscribeToSearchLocation(app);
  subscribeToFetchSelectedLocation(app);
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
