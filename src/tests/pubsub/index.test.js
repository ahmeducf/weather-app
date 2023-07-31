import pubsub from '../../pubsub';

let mockFn;

beforeEach(() => {
  mockFn = jest.fn();
});

describe('pubsub', () => {
  it('should notify subscribers when an event is published', () => {
    pubsub.subscribe('test', mockFn);
    pubsub.publish('test', 'test');
    expect(mockFn).toHaveBeenCalledWith('test');
  });

  it('should not notify subscribers when an event is not published', () => {
    pubsub.subscribe('test', mockFn);
    pubsub.publish('test2', 'test');
    expect(mockFn).not.toHaveBeenCalled();
  });

  it('should not notify subscribers when an event is unsubscribed', () => {
    pubsub.subscribe('test', mockFn);
    pubsub.unSubscribe('test', mockFn);
    pubsub.publish('test', 'test');
    expect(mockFn).not.toHaveBeenCalled();
  });

  it('it should push a new event to the events object', () => {
    mockFn = jest.fn((event) => event);

    pubsub.subscribe('test', mockFn);
    pubsub.publish('test', 'test');

    expect(mockFn).toHaveBeenCalledWith('test');
    expect(mockFn).toHaveReturnedWith('test');
  });

  it('should not unsubscribe a subscriber if the event does not exist', () => {
    pubsub.subscribe('test', mockFn);
    pubsub.unSubscribe('test2', mockFn);
    pubsub.publish('test', 'test');
    expect(mockFn).toHaveBeenCalledWith('test');
  });

  it('should not notify subscribers when an event does not exist', () => {
    pubsub.subscribe('test', mockFn);
    pubsub.publish('test2', 'test');
    expect(mockFn).not.toHaveBeenCalled();
  });
});
