import { connect } from 'react-redux';
import addItem from '../actions/addItem';
import component from '../components/NewItem';

const mapDispatchToProps = dispatch => {
  return {
    add: title => dispatch(addItem(title))
  };
};

const NewItem = connect(
  null,
  mapDispatchToProps
)(component);

export default NewItem;
