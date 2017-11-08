import { connect } from 'react-redux';
import ItemDetail from '../components/ItemDetail';
import increaseScore from '../actions/increaseScore';
import decreaseScore from '../actions/decreaseScore';
import deleteItem from '../actions/deleteItem';

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.items.find(i =>
      i.id === Number(ownProps.match.params.id)
    ),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = Number(ownProps.match.params.id);
  return {
    increase: () => dispatch(
      increaseScore(id)
    ),
    decrease: () => dispatch(
      decreaseScore(id)
    ),
    remove: () => {
      dispatch(deleteItem(id));
      ownProps.history.push('/');
    }
  };
};

const ItemDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);

export default ItemDetailContainer;
