import { connect } from 'react-redux';
import ItemDetail from '../components/ItemDetail';

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.items.find(i =>
      i.id === Number(ownProps.match.params.id)
    ),
  };
};

const ItemDetailContainer = connect(
  mapStateToProps
)(ItemDetail);

export default ItemDetailContainer;
