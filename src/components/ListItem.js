import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import BorderedDiv from '../primitives/BorderedDiv';
import ListItemHeading from '../primitives/ListItemHeading';
import ListItemScore from '../primitives/ListItemScore';

import './ListItem.css';

const ListItem = (props) => {
  const { id, title, score } = props.item;
  return (
    <li>
      <NavLink to={`/item/${id}`} style={{ textDecoration: 'none'}}>
        <BorderedDiv>
          <ListItemHeading>{title}</ListItemHeading>
          <ListItemScore>{score}</ListItemScore>
        </BorderedDiv>
      </NavLink>
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListItem;
