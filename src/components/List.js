import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import OrderedList from './OrderedList';
import BorderedDiv from './BorderedDiv';

const List = (props) => {
  const { items } = props;

  return (
    <BorderedDiv>
      <h1>My Items</h1>
      <OrderedList>
        {
          items.sort((a, b) => b.score - a.score).map(
            x => <ListItem key={x.id} item={x} />
          )
        }
      </OrderedList>
    </BorderedDiv>
  );
};

List.propTypes = {
  items: PropTypes.array,
};

export default List;
