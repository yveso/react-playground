import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FancyDiv from '../primitives/FancyDiv';
import Heading from '../primitives/Heading';
import ScoreFilterBar from '../containers/ScoreFilterBar';

const Header = (props) => {
  return (
    <FancyDiv>
      <Link to="/" style={{textDecoration: 'none'}}>
        <Heading>React Playground</Heading>
        <p>{props.message}</p>
      </Link>
        <ScoreFilterBar />
    </FancyDiv>
  );
};

Header.propTypes = {
  message: PropTypes.string.isRequired
};

export default Header;
