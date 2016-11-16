import { createAction } from '../helpers';

export const TASK_COUNT  = 'task:count';
export const TASK_GET    = 'task:get';
export const TASK_ADD    = 'task:add';
export const TASK_REMOVE = 'task:remove';

const count = createAction(TASK_COUNT, () => null);
export const getTaskCount = dispatch => {
  dispatch(count());
};

const get = createAction(TASK_GET, () => null );
export const getTask = dispatch => {
  dispatch(get());
};

const add = createAction(TASK_ADD, (task) => ({ task }) );
export const addTask = task => dispatch => {
  dispatch(add(task));
};

const remove = createAction(TASK_REMOVE, (id) => (id));
export const removeTask = id => dispatch => {
  dispatch(remove(id));
};
