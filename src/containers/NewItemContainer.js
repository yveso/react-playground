import { connect } from 'react-redux';
import addItem from '../actions/addItem';
import NewItem from '../components/NewItem';

const mapDispatchToProps = dispatch => {
  return {
    add: title => dispatch(addItem(title))
  };
};

const NewItemContainer = connect(
  null,
  mapDispatchToProps
)(NewItem);

export default NewItemContainer;
