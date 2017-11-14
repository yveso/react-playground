import { connect } from 'react-redux';
import component from '../components/ScoreFilterBar';
import changeFilter from '../actions/changeFilter';

const mapStateToProps = state => {
  const scores = state.items.map(i => i.score);
  return {
    initialFilter: state.filter.value,
    min: scores.length ? Math.min(...scores) : null,
    max: scores.length ? Math.max(...scores) : null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    change: value => dispatch(changeFilter(value))
  };
};

const ScoreFilterBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(component);

export default ScoreFilterBar;
