import getUserPositionFactory from './get-user-position.factory';

const getUserPosition = async (options = {}) =>
  getUserPositionFactory(navigator.geolocation, options);

export default getUserPosition;
