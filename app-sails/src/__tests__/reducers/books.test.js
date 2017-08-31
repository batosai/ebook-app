import reducer from '../../reducers/books';
import * as types from '../../types';

const initialState = [
  /* {id, title, img, collection_id} */
];

describe('Books reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);

    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle BOOKS_SUCCESS', () => {
    let data = {
      type: types.BOOKS_SUCCESS,
      payload: {
        books: [],
      },
    };

    expect(reducer(initialState, data)).toEqual([]);

    expect(reducer(initialState, data)).toMatchSnapshot();

    ////////////
    data = {
      type: types.BOOKS_SUCCESS,
      payload: {
        books: [
          {
            id: 1,
            img: '',
            title: 'run test',
            collection_id: 2,
          },
        ],
      },
    };

    expect(reducer(initialState, data)).toEqual([...data.payload.books]);

    expect(reducer(initialState, data)).toMatchSnapshot();
  });
});
