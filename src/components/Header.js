import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FancyDiv from '../primitives/FancyDiv';
import Heading from '../primitives/Heading';

const Header = (props) => {
  return (
    <Link to="/" style={{textDecoration: 'none'}}>
      <FancyDiv>
        <Heading>React Playground</Heading>
        <p>{props.message}</p>
      </FancyDiv>
    </Link>
  );
};

Header.propTypes = {
  message: PropTypes.string.isRequired
};

export default Header;
