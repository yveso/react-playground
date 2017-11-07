import update from 'immutability-helper';

const items = (state=[], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return update(
        state,
        {$push: [{
          id: Date.now(),
          title: action.title,
          score: 0
        }]}
      );
    default:
      return state;
  }
};

export default items;
