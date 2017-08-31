import reducer from '../../reducers/collections';
import * as types from '../../types';

const initialState = {
  all: [
    /* {id, img, title, author} */
  ],
  items: [
    /* {id, img, title, author} */
  ],
};

const items = [
  {
    id: 1,
    library_id: 1,
    img: '',
    title: 'run test',
    author: 'jeremy',
  },
  {
    id: 2,
    library_id: 2,
    img: '',
    title: 'run test 2',
    author: 'jeremy',
  },
];

describe('Collections reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);

    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle COLLECTIONS_SUCCESS', () => {
    let data = {
      type: types.COLLECTIONS_SUCCESS,
      payload: {
        collections: [],
      },
    };

    expect(reducer(initialState, data)).toEqual(initialState);

    expect(reducer(initialState, data)).toMatchSnapshot();

    ////////////
    data = {
      type: types.COLLECTIONS_SUCCESS,
      payload: {
        collections: items,
      },
    };

    expect(reducer(initialState, data)).toEqual({
      all: data.payload.collections,
      items: data.payload.collections,
    });

    expect(reducer(initialState, data)).toMatchSnapshot();
  });

  it('should handle COLLECTIONS_FILTER', () => {
    const initialState = {
      all: items,
      items,
    };

    const data = {
      type: types.COLLECTIONS_FILTER,
      payload: 2,
    };

    expect(reducer(initialState, data)).toEqual({
      all: initialState.all,
      items: [{ ...initialState.all[1] }],
    });

    expect(reducer(initialState, data)).toMatchSnapshot();
  });
});
