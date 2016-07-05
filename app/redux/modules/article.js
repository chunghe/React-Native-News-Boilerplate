import { CALL_API } from 'redux-api-middleware';

export const ARTICLE_REQUEST = 'ARTICLE_REQUEST';
export const ARTICLE_SUCCESS = 'ARTICLE_SUCCESS';
export const ARTICLE_FAILURE = 'ARTICLE_FAILURE';

const API_ROOT = 'http://dev.twreporter.org:8080';

export function fetchArticle(slug) {
  return {
    [CALL_API]: {
      endpoint: `${API_ROOT}/posts/${slug}`,
      method: 'GET',
      types: [ARTICLE_REQUEST, ARTICLE_SUCCESS, ARTICLE_FAILURE]
    }
  };
}

export default function reducer(state = { loaded: false }, action) {
  switch (action.type) {
    case ARTICLE_REQUEST:
      return {
        loading: true,
        loaded: false
      };
    case ARTICLE_SUCCESS:
      return {
        ...action.payload,
        loading: false,
        loaded: true
      };
    case ARTICLE_FAILURE:
      return {
        error: true,
        message: action.payload.message,
        loading: false ,
        loaded: false
      };
    default:
      return state;
  }
}
