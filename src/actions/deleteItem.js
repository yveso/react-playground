const DELETE_ITEM = 'DELETE_ITEM';

const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    id
  };
};

export { DELETE_ITEM };
export default deleteItem;
