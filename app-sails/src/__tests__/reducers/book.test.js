import reducer from '../../reducers/book';
import * as types from '../../types';

const initialState = {
  /* {id, img, title, collection_id, author, editor, formats, number_pages, number_volumes, year, read, keyword, description} */
};

describe('Book reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});

    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle BOOK_SUCCESS', () => {
    let data = {
      type: types.BOOK_SUCCESS,
      payload: {
        book: {},
      },
    };

    expect(reducer(initialState, data)).toEqual({});

    expect(reducer(initialState, data)).toMatchSnapshot();

    ////////////
    data = {
      type: types.BOOK_SUCCESS,
      payload: {
        book: {
          id: 1,
          img: '',
          title: 'run test',
          collection_id: 2,
          author: 'jeremy',
          editor: 'glenat',
          formats: 'pdf',
          number_pages: 18,
          number_volumes: 4,
          year: 2005,
          read: true,
          keyword: ['manga'],
          description: 'Lorem ipsum',
        },
      },
    };

    expect(reducer(initialState, data)).toEqual({
      ...data.payload.book,
    });

    expect(reducer(initialState, data)).toMatchSnapshot();
  });
});
