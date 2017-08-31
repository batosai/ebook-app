import { config } from './config';

export const createTypes = name => ({
  REQUEST: `${name}:REQUEST`,
  SUCCESS: `${name}:SUCCESS`,
  FAILURE: `${name}:FAILURE`,
  ERRORS: `${name}:ERRORS`,
});

export const createActions = types => ({
  request: data => ({
    type: types.REQUEST,
    payload: data,
  }),
  success: data => ({
    type: types.SUCCESS,
    payload: data,
  }),
  errors: data => ({
    type: types.ERRORS,
    payload: data,
  }),
  failure: error => ({
    type: types.FAILURE,
    payload: error,
  }),
});

export const request = data =>
  new Promise((resolve, reject) => {
    config.io.socket.request(data, (body, response) => {
      resolve({ body, response });
      console.log(body);
      // si error
      // reject("raison d'echec"); // si elle est rompue -> catch
    });
  });
