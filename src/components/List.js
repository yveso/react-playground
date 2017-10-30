import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import ListItem from './ListItem';
import ListContainer from './ListContainer';

class List extends React.Component {
  render() {
    const { items, updateItem } = this.props;
    return (
      <div>
        <ListContainer>
          {
            items.map(
              x =>
                <li key={x.id}>
                  <Link to={`/item/${x.id}`} style={{ textDecoration: 'none'}} >
                    <ListItem
                      item={x}
                      updateItem={updateItem}
                    />
                  </Link>
              </li>
            )
          }
        </ListContainer>
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.array,
  updateItem: PropTypes.func
};

export default List;
