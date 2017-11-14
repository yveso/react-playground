import { connect } from 'react-redux';
import component from '../components/ScoreFilterBar';
import changeFilter from '../actions/changeFilter';
import toggleFilter from '../actions/toggleFilter';

const mapStateToProps = state => {
  const scores = state.items.map(i => i.score);
  return {
    isActive: state.filter.isActive,
    initialFilter: state.filter.value,
    min: scores.length ? Math.min(...scores) : null,
    max: scores.length ? Math.max(...scores) : null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggle: () => dispatch(toggleFilter()),
    change: value => dispatch(changeFilter(value))
  };
};

const ScoreFilterBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(component);

export default ScoreFilterBar;
