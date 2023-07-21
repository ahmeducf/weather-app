const events = {};

const publish = (eventName, data) => {
  if (events[eventName]) {
    events[eventName].forEach((fn) => {
      fn(data);
    });
  }
};

const subscribe = (eventName, fn) => {
  events[eventName] = events[eventName] ?? [];
  events[eventName].push(fn);
};

const unSubscribe = (eventName, fn) => {
  if (events[eventName]) {
    for (let i = 0; i < events[eventName].length; i++) {
      if (events[eventName][i] === fn) {
        events[eventName].splice(i, 1);
        break;
      }
    }
  }
};

export default {
  publish,
  subscribe,
  unSubscribe,
};
