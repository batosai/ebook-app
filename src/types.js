import { PropTypes as T } from 'react';

export const Item = T.shape({
  id: T.string.isRequired,
  name: T.string.isRequired,
  image: T.string,
  pageNumber: T.number,
  type: T.string,
  read: T.bool,
  collection: T.string
});
