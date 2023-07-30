import getUserPositionFactory from '../../services/geolocation/get-user-position.factory';

let getUserPosition;
let geolocationMock;

beforeEach(() => {
  geolocationMock = {
    getCurrentPosition: jest.fn(),
  };
  getUserPosition = (options) =>
    getUserPositionFactory(geolocationMock, options);
});

describe('getUserPosition', () => {
  it('should call geolocation.getCurrentPosition', () => {
    getUserPosition();
    expect(geolocationMock.getCurrentPosition).toHaveBeenCalled();
  });
  it('should call geolocation.getCurrentPosition with options', () => {
    const options = { enableHighAccuracy: true };
    getUserPosition(options);
    expect(geolocationMock.getCurrentPosition).toHaveBeenCalledWith(
      expect.any(Function),
      expect.any(Function),
      options,
    );
  });
  it('should return a promise', () => {
    const result = getUserPosition();
    expect(result).toBeInstanceOf(Promise);
  });
  it('should resolve the promise with the position', async () => {
    const position = { coords: { latitude: 1, longitude: 2 } };
    geolocationMock.getCurrentPosition.mockImplementationOnce((success) =>
      success(position),
    );
    const result = await getUserPosition();
    expect(result).toEqual(position);
  });
  it('should reject the promise with the error', async () => {
    const error = 'error';
    geolocationMock.getCurrentPosition.mockImplementationOnce((success, fail) =>
      fail(error),
    );
    try {
      await getUserPosition();
    } catch (e) {
      expect(e).toEqual(error);
    }
  });
});
