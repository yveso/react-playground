import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import List from '../components/List';

const mapStateToProps = state => {
  return {
    items: state.items.filter(i => i.score >= state.filter)
  };
};

const ListContainer = withRouter(
  connect(
    mapStateToProps
  )(List)
);

export default ListContainer;
