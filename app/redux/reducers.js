import { combineReducers } from 'redux';
import routing from './modules/routing';
import articles from './modules/articles';

export default combineReducers({
  routing,
  articles
});
