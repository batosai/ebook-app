import reducer from '../../reducers/aside';
import * as types from '../../types';

describe('Aside reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      open: false,
    });

    expect(
      reducer(undefined, {})
    ).toMatchSnapshot();
  });

  it('should handle ASIDE_TOGGLE', () => {
    expect(
      reducer({}, {
        type: types.ASIDE_TOGGLE,
      })
    ).toEqual({
      open: true,
    });

    expect(
      reducer({}, {
        type: types.ASIDE_TOGGLE,
      })
    ).toMatchSnapshot();

    ////////////

    expect(
      reducer(
        { open: true },
        { type: types.ASIDE_TOGGLE }
      )
    ).toEqual({
      open: false,
    });

    expect(
      reducer(
        { open: true },
        { type: types.ASIDE_TOGGLE }
      )
    ).toMatchSnapshot();
  });
});
