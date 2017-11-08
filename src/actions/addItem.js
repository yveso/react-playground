const ADD_ITEM = 'ADD_ITEM';

const addItem = title => {
  return {
    type: ADD_ITEM,
    title
  };
};

export { ADD_ITEM };
export default addItem;
