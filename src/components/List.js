import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import ListItem from './ListItem';
import OrderedList from './OrderedList';
import BorderedDiv from './BorderedDiv';

class List extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <BorderedDiv>
        <h1>My Items</h1>
        <OrderedList>
          {
            items.sort((a, b) => b.score - a.score).map(
              x =>
                <li key={x.id}>
                  <Link to={`/item/${x.id}`} style={{ textDecoration: 'none'}} >
                    <ListItem
                      item={x}
                    />
                  </Link>
              </li>
            )
          }
        </OrderedList>
      </BorderedDiv>
    );
  }
}

List.propTypes = {
  items: PropTypes.array,
};

export default List;
