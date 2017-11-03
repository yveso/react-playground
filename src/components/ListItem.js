import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import BorderedDiv from './BorderedDiv';
import ListItemHeading from './ListItemHeading';
import ListItemScore from './ListItemScore';

const ListItem = (props) => {
  const { id, title, score } = props.item;
  return (
    <li>
      <Link to={`/item/${id}`} style={{ textDecoration: 'none'}} >
        <BorderedDiv>
          <ListItemHeading>{title}</ListItemHeading>
          <ListItemScore>{score}</ListItemScore>
        </BorderedDiv>
      </Link>
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListItem;
