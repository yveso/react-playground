import { connect } from 'react-redux';
import Footer from '../components/Footer';
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

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

export default FooterContainer;
