import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import NewItem from './NewItem';

const Sidebar = (props) => {
  return (
    <div>
      <List items={props.items} />
      <NewItem add={props.addItem} />
  </div>
  );
};

Sidebar.propTypes = {
  items: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired
};

export default Sidebar;
