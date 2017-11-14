import React from 'react';
import PropTypes from 'prop-types';

import FancyDiv from '../primitives/FancyDiv';
import Heading from '../primitives/Heading';
import ScoreFilterBar from '../containers/ScoreFilterBar';
import Link from '../primitives/Link';

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
