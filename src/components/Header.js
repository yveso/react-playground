import React from 'react';
import PropTypes from 'prop-types';
import FancyDiv from './FancyDiv';
import Heading from './Heading';

const Header = (props) => {
  return (
    <FancyDiv>
      <Heading>React Playground</Heading>
      <p>{props.message}</p>
    </FancyDiv>
  );
};

Header.propTypes = {
  message: PropTypes.string.isRequired
};

export default Header;
