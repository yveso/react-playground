import { createStore } from 'redux';
import rootReducer from './reducers/index';
import items from './data/sample';


const initialState = {
  items
};

let store = createStore(rootReducer, initialState);

export default store;
