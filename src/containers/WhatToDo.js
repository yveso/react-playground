import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

let WhatToDo = (props) => {
  return (
    <div>{ props.itemCount > 0 ? 'Choose' : 'Create'} an item!</div>
  );
};

WhatToDo.propTypes = {
  itemCount: PropTypes.number.isRequired
};

WhatToDo = connect(
  state => { return { itemCount: state.items.length }; }
)(WhatToDo);

export default WhatToDo;
