import { combineReducers } from 'redux';
import items from './items';
import activeTheme from './activeTheme';
import themes from './themes';
import filter from './filter';

const rootReducer = combineReducers({
  items,
  activeTheme,
  themes,
  filter
});

export default rootReducer;
