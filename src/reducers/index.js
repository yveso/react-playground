import { combineReducers } from 'redux';
import items from './items';
import activeTheme from './activeTheme';
import themes from './themes';

const rootReducer = combineReducers({
  items,
  activeTheme,
  themes
});

export default rootReducer;
