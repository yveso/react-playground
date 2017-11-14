import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import items from '../data/items';
import themes from '../data/themes';

const initialState = {
  items,
  themes,
  filter: Math.min(...items.map(i => i.score)),
  activeTheme: 'black'
};

let store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
