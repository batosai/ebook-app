import * as create from './create';
import * as update from './update';
import * as remove from './remove';
import * as fetch from './fetch';
import * as upload from './upload';
import * as illustration from './illustration';

const dispatch = (dispatch, event) => {
  switch (event.verb) {
    case 'created':
      dispatch(create.actions.success(event.data));
      break;
    case 'updated':
      dispatch(update.actions.success(event.data));
      break;
    case 'destroyed':
      dispatch(remove.actions.success(event.id));
      break;
    default:
      console.warn(
        'Unrecognized socket event (`%s`) from server:',
        event.verb,
        event,
      );
  }
};

export { create, update, remove, fetch, dispatch, illustration, upload };
