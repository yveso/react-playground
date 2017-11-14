import { CHANGE_FILTER } from '../actions/changeFilter';

const filter = (state=0, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filter;
