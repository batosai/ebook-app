import { createAction } from '../helpers';
import { getItem, getItemsByCollection, changeCollection } from '../api';

export const ITEMS_REQUEST = 'list:items:request';
export const ITEMS_SUCCESS = 'list:items:success';
export const ITEMS_FAILURE = 'list:items:failure';

const itemsRequest = createAction(ITEMS_REQUEST, () => null);
const itemsSuccess = createAction(ITEMS_SUCCESS, (items) => ({ items }));
const itemsFailure = createAction(ITEMS_FAILURE, (error) => ({ error }));
export const getBooks = slug => dispatch => {
  dispatch(itemsRequest(slug));
  getItemsByCollection(slug)
  .then(items => dispatch(itemsSuccess(items)))
  .catch(error => dispatch(itemsFailure(error)));
};

export const ITEM_REQUEST = 'list:item:request';
export const ITEM_SUCCESS = 'list:item:success';
export const ITEM_FAILURE = 'list:item:failure';

const itemRequest = createAction(ITEM_REQUEST, (id) => ({ id }));
const itemSuccess = createAction(ITEM_SUCCESS, (item) => ({ item }));
const itemFailure = createAction(ITEM_FAILURE, (error) => ({ error }));
export const getBook = text => dispatch => {
  dispatch(itemRequest(text));
  getItem(text)
  .then(item => dispatch(itemSuccess(item)))
  .catch(error => dispatch(itemFailure(error)));
};

export const ITEM_UPDATE  = 'list:item:update';
export const ITEM_UPDATE_FAILURE = 'list:item:update:failure';

const itemUpdateSuccess = createAction(ITEM_UPDATE, (id, collection) => ({ id, collection }));
const itemUpdateFailure = createAction(ITEM_UPDATE_FAILURE, (error) => ({ error }));

export const updateBook = (id, collection, success) => dispatch => {
  changeCollection(id, collection)
  .then((id, collection) => {
    dispatch(itemUpdateSuccess(id, collection));
    success();
  })
  .catch(error => dispatch(itemUpdateFailure(error)));
};
