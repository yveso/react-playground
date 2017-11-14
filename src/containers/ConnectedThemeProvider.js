import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

const mapStateToProps = state => {
  return {
    theme: state.themes ? state.themes[state.activeTheme] : {bg:'white', fg:'red'}
  };
};

const ConnectedThemeProvider = connect(
  mapStateToProps
)(ThemeProvider);

export default ConnectedThemeProvider;
