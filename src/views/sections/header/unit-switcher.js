import { CELSIUS, FAHRENHEIT } from '../../../app/constants';
import pubsub from '../../../pubsub';
import { UNIT_CHANGE } from '../../../pubsub/events-types';

const handleUnitChange = (app) => {
  const celsiusButton = document.querySelector(
    'header .unit-switcher .celsius',
  );
  const fahrenheitButton = document.querySelector(
    'header .unit-switcher .fahrenheit',
  );

  celsiusButton.addEventListener('click', () => {
    if (celsiusButton.classList.contains('active')) {
      return;
    }

    pubsub.publish(UNIT_CHANGE, CELSIUS);
    celsiusButton.classList.add('active');
    fahrenheitButton.classList.remove('active');
  });

  fahrenheitButton.addEventListener('click', () => {
    if (fahrenheitButton.classList.contains('active')) {
      return;
    }

    pubsub.publish(UNIT_CHANGE, FAHRENHEIT);
    fahrenheitButton.classList.add('active');
    celsiusButton.classList.remove('active');
  });
};

export default handleUnitChange;
