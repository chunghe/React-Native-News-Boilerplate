import { CALL_API } from 'redux-api-middleware';

export const ARTICLES_REQUEST = 'ARTICLES_REQUEST';
export const ARTICLES_SUCCESS = 'ARTICLES_SUCCESS';
export const ARTICLES_FAILURE = 'ARTICLES_FAILURE';


export function fetchArticles() {
  return {
    [CALL_API]: {
      endpoint: 'http://m.cnyes.com/api/v2/news/index',
      method: 'GET',
      types: [ARTICLES_REQUEST, ARTICLES_SUCCESS, ARTICLES_FAILURE]
    }
  };
}
