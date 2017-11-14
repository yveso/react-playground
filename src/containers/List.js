import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import component from '../components/List';

const mapStateToProps = state => {
  return {
    items: state.items.filter(i => i.score >= state.filter),
    totalCount: state.items.length
  };
};

const List = withRouter(
  connect(
    mapStateToProps
  )(component)
);

export default List;
