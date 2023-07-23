import { format } from 'date-fns-tz';

const Location = (data) => {
  if (
    !data ||
    !data.name ||
    !data.region ||
    !data.country ||
    !data.localtime ||
    !data.tz_id
  ) {
    throw new Error('Location must be initialized with data');
  }

  const name = `${data.name}, ${data.country}`;
  const localTime = format(new Date(data.localtime), 'h:mm a z', {
    timeZone: data.tz_id,
  });

  const getLocalTime = () => localTime;
  const getName = () => name;

  return {
    getLocalTime,
    getName,
  };
};

export default Location;
