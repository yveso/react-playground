const CHANGE_FILTER = 'CHANGE_FILTER';

const changeFilter = value => {
  return {
    type: CHANGE_FILTER,
    value
  };
};

export { CHANGE_FILTER };
export default changeFilter;
