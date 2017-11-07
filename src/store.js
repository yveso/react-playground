import { createStore } from 'redux';
import rootReducer from './reducers/index';
import items from './data/sample';


const initialState = {
  items
};

let store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
