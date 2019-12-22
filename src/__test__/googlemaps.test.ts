import { isAPIKeyError } from '../googlemaps';

describe('isAPIKeyError', () => {
  test('returns false when not matching', () => {
    const expected = false;
    const a1 = isAPIKeyError('');
    const a2 = isAPIKeyError({});
    const a3 = isAPIKeyError('an error');
    const a4 = isAPIKeyError(new Error('Actual error'));
    const a5 = isAPIKeyError(5);
    expect(a1).toEqual(expected);
    expect(a2).toEqual(expected);
    expect(a3).toEqual(expected);
    expect(a4).toEqual(expected);
    expect(a5).toEqual(expected);
  });

  test('returns true when matching', () => {
    const expected = true;
    const actual = isAPIKeyError(
      'Missing either a valid API key, or a client ID and secret'
    );
    expect(actual).toEqual(expected);
  });
});
