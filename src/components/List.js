import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import OrderedList from '../primitives/OrderedList';
import BorderedDiv from '../primitives/BorderedDiv';

const List = (props) => {
  const { items, isFilterActive, totalCount } = props;
  const countTxt = `${items.length}/${totalCount}`;

  return (
    <BorderedDiv>
      <h1>My Items</h1>
      <p>{`Showing ${isFilterActive ? countTxt : 'ALL'} items`}</p>
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
  isFilterActive: PropTypes.bool.isRequired,
  totalCount: PropTypes.number.isRequired
};

export default List;
