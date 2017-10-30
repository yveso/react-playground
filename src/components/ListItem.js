import React from 'react';
import PropTypes from 'prop-types';

import BorderedDiv from './BorderedDiv';
import ListItemHeading from './ListItemHeading';
import ListItemScore from './ListItemScore';

class ListItem extends React.Component {
  render() {
    const { title, score } = this.props.item;
    return (
      <BorderedDiv>
        <ListItemHeading>{title}</ListItemHeading>
        <ListItemScore>{score}</ListItemScore>
      </BorderedDiv>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.object,
  updateItem: PropTypes.func
};

export default ListItem;
