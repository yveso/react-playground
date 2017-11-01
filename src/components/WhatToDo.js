import React from 'react';
import PropTypes from 'prop-types';

const WhatToDo = (props) => {
  return (
    <div>{ props.itemCount > 0 ? 'Choose' : 'Create'} an item!</div>
  );
};

WhatToDo.propTypes = {
  itemCount: PropTypes.number.isRequired
};

export default WhatToDo;
