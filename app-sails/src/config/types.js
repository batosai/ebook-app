import { PropTypes as T } from 'react';

export const Library = T.shape({
  id: T.string.isRequired,
  name: T.string.isRequired,
});
