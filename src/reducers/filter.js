import { CHANGE_FILTER } from '../actions/changeFilter';
import { TOGGLE_FILTER } from '../actions/toggleFilter';
import update from 'immutability-helper';


const filter = (state={}, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return update(state, {value: {$set: action.value}});
    case TOGGLE_FILTER:
      return update(state, {isActive: {$set: !state.isActive}});
    default:
      return state;
  }
};

export default filter;
