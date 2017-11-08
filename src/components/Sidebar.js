import React from 'react';

import ListContainer from '../containers/ListContainer';
import NewItemContainer from '../containers/NewItemContainer';

const Sidebar = () => {
  return (
    <div>
      <ListContainer />
      <NewItemContainer />
  </div>
  );
};

export default Sidebar;
