import { connect } from 'react-redux';
import component from '../components/Footer';
import changeTheme from '../actions/changeTheme';

const mapStateToProps = state => {
  return {
    themes: state.themes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeTheme: name => dispatch(changeTheme(name))
  };
};

const Footer = connect(
  mapStateToProps,
  mapDispatchToProps
)(component);

export default Footer;
