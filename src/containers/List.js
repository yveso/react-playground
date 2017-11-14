import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import component from '../components/List';

const mapStateToProps = state => {
  return {
    isFilterActive: state.filter.isActive,
    items: state.filter.isActive ?
      state.items.filter(i => i.score >= state.filter.value) :
      state.items,
    totalCount: state.items.length
  };
};

const List = withRouter(
  connect(
    mapStateToProps
  )(component)
);

export default List;
