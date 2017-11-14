import React from 'react';

import List from '../containers/List';
import NewItem from '../containers/NewItem';

const Sidebar = () => {
  return (
    <div>
      <List />
      <NewItem />
  </div>
  );
};

export default Sidebar;
