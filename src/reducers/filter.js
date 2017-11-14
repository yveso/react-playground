import { CHANGE_FILTER } from '../actions/changeFilter';
import update from 'immutability-helper';


const filter = (state={}, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return update(state, {value: {$set: action.value}});
    default:
      return state;
  }
};

export default filter;
