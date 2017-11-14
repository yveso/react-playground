const ADD_ITEM = 'ADD_ITEM';

const addItem = title => {
  return {
    type: ADD_ITEM,
    id: Date.now(),
    title
  };
};

export { ADD_ITEM };
export default addItem;
