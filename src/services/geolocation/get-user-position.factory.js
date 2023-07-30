const getUserPositionFactory = async (geolocation, options) =>
  new Promise((resolve, reject) => {
    geolocation.getCurrentPosition(resolve, reject, options);
  });

export default getUserPositionFactory;
