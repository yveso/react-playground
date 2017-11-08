const CHANGE_THEME = 'CHANGE_THEME';

const changeTheme = name => {
  return {
    type: CHANGE_THEME,
    name
  };
};

export { CHANGE_THEME };
export default changeTheme;
