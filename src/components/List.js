import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import OrderedList from '../primitives/OrderedList';
import BorderedDiv from '../primitives/BorderedDiv';

const List = (props) => {
  const { items, totalCount } = props;

  return (
    <BorderedDiv>
      <h1>My Items</h1>
      <p>{`Showing ${items.length}/${totalCount} items`}</p>
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
  totalCount: PropTypes.number.isRequired
};

export default List;
