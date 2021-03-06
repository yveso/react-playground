import update from 'immutability-helper';
import { ADD_ITEM } from '../actions/addItem';
import { INCREASE_SCORE } from '../actions/increaseScore';
import { DECREASE_SCORE } from '../actions/decreaseScore';
import { DELETE_ITEM } from '../actions/deleteItem';

const updateItems = (items, id, func) => update(
  items,
  {$splice: [[
    items.findIndex(i => i.id === id),
    1,
    update(
      items.find(i => i.id === id),
      {score: {$apply: func}}
    )
  ]]}
);

const items = (state=[], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return update(
        state,
        {$push: [{
          id: action.id,
          title: action.title,
          score: 0
        }]}
      );
    case INCREASE_SCORE:
      return updateItems(state, action.id, score => score + 1);
    case DECREASE_SCORE:
      return updateItems(state, action.id, score => score - 1);
    case DELETE_ITEM:
      return update(
        state,
        {$splice: [[state.findIndex(i => i.id === action.id), 1]]}
      );
    default:
      return state;
  }
};

export default items;
