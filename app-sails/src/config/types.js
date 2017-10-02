import { default as T } from 'prop-types';


export const Library = T.shape({
  id: T.string.isRequired,
  name: T.string.isRequired,
});
