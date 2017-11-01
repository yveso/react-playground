import React from 'react';
import PropTypes from 'prop-types';
import FancyDiv from './FancyDiv';
import {ThemePreviewButton} from './Buttons';

class Footer extends React.Component {
  render() {
    const {themes, changeTheme } = this.props;
    return (
      <FancyDiv>
        <p>Theme:</p>
        {
          Object.keys(themes).map(key =>
            <ThemePreviewButton
              key={key}
              onClick={() => changeTheme(key)}
              bg={themes[key].bg}
              fg={themes[key].fg}
            >
              {key}
            </ThemePreviewButton>
          )
        }
      </FancyDiv>
    );
  }
}

Footer.propTypes = {
  themes: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired
};

export default Footer;
