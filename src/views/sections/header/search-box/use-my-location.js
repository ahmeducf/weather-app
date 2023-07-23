import pubsub from '../../../../pubsub';
import { USE_MY_LOCATION_REQUESTED } from '../../../../pubsub/events-types';

const handleUseMyLocation = (app) => {
  const myLocationButton = document.querySelector(
    'header .search-box .my-location',
  );

  myLocationButton.addEventListener('click', () => {
    pubsub.publish(USE_MY_LOCATION_REQUESTED, app);
  });
};

export default handleUseMyLocation;
