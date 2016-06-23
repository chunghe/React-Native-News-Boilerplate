import merge from 'lodash.merge';
import { CALL_API } from 'redux-api-middleware';

export const ARTICLES_REQUEST = 'ARTICLES_REQUEST';
export const ARTICLES_SUCCESS = 'ARTICLES_SUCCESS';
export const ARTICLES_FAILURE = 'ARTICLES_FAILURE';

const API_ROOT = 'http://m.cnyes.com/api/v2';

export function fetchArticles() {
  return {
    [CALL_API]: {
      endpoint: `${API_ROOT}/news/index`,
      method: 'GET',
      types: [ARTICLES_REQUEST, ARTICLES_SUCCESS, ARTICLES_FAILURE]
    }
  };
}

export default function reducer(state = {}, action) {
  switch (action.type) {
    case ARTICLES_SUCCESS:
      return merge({}, state, action.payload.items);
    case ARTICLES_FAILURE:
      return merge({}, state, action.payload.message);
    default:
      return state;
  }
}
