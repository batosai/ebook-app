import reducer from '../../reducers/books';
import * as types from '../../types';

describe('Books reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([]);

    expect(
      reducer(undefined, {})
    ).toMatchSnapshot();
  });

  it('should handle BOOKS_SUCCESS', () => {
    let data = {
      type: types.BOOKS_SUCCESS,
      payload: {
        books: []
      }
    };

    expect(
      reducer({}, data)
    ).toEqual([]);

    expect(
      reducer({}, data)
    ).toMatchSnapshot();

    ////////////
    data = {
      type: types.BOOKS_SUCCESS,
      payload: {
        books: [{
          id: 1,
          img: '',
          title: 'run test',
          collection_id: 2
        }]
      }
    };

    expect(
      reducer(
        {},
        data
      )
    ).toEqual([
      ...data.payload.books
    ]);

    expect(
      reducer({}, data)
    ).toMatchSnapshot();
  });
});
