import merge from 'lodash.merge';
import { CALL_API } from 'redux-api-middleware';

export const ARTICLES_REQUEST = 'ARTICLES_REQUEST';
export const ARTICLES_SUCCESS = 'ARTICLES_SUCCESS';
export const ARTICLES_FAILURE = 'ARTICLES_FAILURE';

const API_ROOT = 'http://dev.twreporter.org:8080';

export function fetchArticles() {
  return {
    [CALL_API]: {
      endpoint: `${API_ROOT}/posts`,
      method: 'GET',
      types: [ARTICLES_REQUEST, ARTICLES_SUCCESS, ARTICLES_FAILURE]
    }
  };
}

export default function reducer(state = {}, action) {
  switch (action.type) {
    case ARTICLES_SUCCESS:
      return merge({}, state, action.payload._items);
    case ARTICLES_FAILURE:
      return action.payload.message;
    default:
      return state;
  }
}
