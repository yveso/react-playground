const CHANGE_FILTER = 'CHANGE_FILTER';

const changeFilter = filter => {
  return {
    type: CHANGE_FILTER,
    filter
  };
};

export { CHANGE_FILTER };
export default changeFilter;
