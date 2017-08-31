import reducer from '../../reducers/libraries';
import * as types from '../../types';

const initialState = [
  /* {id, name} */
];

describe('Libraries reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);

    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle LIBRARIES_SUCCESS', () => {
    let data = {
      type: types.LIBRARIES_SUCCESS,
      payload: {
        libraries: [],
      },
    };

    expect(reducer(initialState, data)).toEqual([]);

    expect(reducer(initialState, data)).toMatchSnapshot();

    ////////////
    data = {
      type: types.LIBRARIES_SUCCESS,
      payload: {
        libraries: [
          {
            id: 1,
            name: 'Bande dessinée',
          },
        ],
      },
    };

    expect(reducer(initialState, data)).toEqual([...data.payload.libraries]);

    expect(reducer(initialState, data)).toMatchSnapshot();
  });
});
