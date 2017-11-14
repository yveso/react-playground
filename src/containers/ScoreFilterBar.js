import { connect } from 'react-redux';
import component from '../components/ScoreFilterBar';
import changeFilter from '../actions/changeFilter';

const mapStateToProps = state => {
  const scores = state.items.map(i => i.score);
  return {
    initialFilter: state.filter,
    min: Math.min(...scores),
    max: Math.max(...scores)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    change: filter => dispatch(changeFilter(filter))
  };
};

const ScoreFilterBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(component);

export default ScoreFilterBar;
