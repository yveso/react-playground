const deleteItem = id => {
  return {
    type: 'DELETE_ITEM',
    id
  };
};

export default deleteItem;
