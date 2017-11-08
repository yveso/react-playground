import { CHANGE_THEME } from '../actions/changeTheme';

const activeTheme = (state='', action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.name;
    default:
      return state;
  }
};

export default activeTheme;
