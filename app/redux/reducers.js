import { combineReducers } from 'redux';
import routing from './modules/routing';
import article from './modules/article';
import articles from './modules/articles';

export default combineReducers({
  routing,
  article,
  articles
});
