import { TASK_COUNT, TASK_GET, TASK_ADD, TASK_REMOVE } from '../actions/task';

import { createReducer } from '../helpers';

const initialState = {
  count: 0,
  tasks: [
    // {
    //   id: 1,
    //   text: "Téléchargement \"spiderman.cbz\"",
    //   value: "44%",
    // }
  ],
}

const reducers = {

  [TASK_COUNT]: (prevState, payload) =>
    prevState.count,

  [TASK_GET]: (prevState, payload) =>
    prevState.tasks,

  [TASK_ADD]: (prevState, payload) => {
    const tasks = prevState.tasks.concat([payload.task]);

    return Object.assign({}, prevState, {
      count: tasks.length,
      tasks
    });
  },
  [TASK_REMOVE]: (prevState, id) => {
    const tasks = prevState.tasks.filter(task => task.id !== id);
    return Object.assign({}, prevState, {
      count: tasks.length,
      tasks: tasks
    });
  },

}

export default createReducer(initialState, reducers);
