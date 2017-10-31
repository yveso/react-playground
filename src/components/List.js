import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import ListItem from './ListItem';
import ListContainer from './ListContainer';

class List extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        <ListContainer>
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
        </ListContainer>
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.array,
};

export default List;
