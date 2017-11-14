import React from 'react';
import PropTypes from 'prop-types';

class ScoreFilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: props.isActive,
      filter: props.initialFilter
    };
  }

  handleActiveChange = () => {
    const newValue = !this.state.isActive;
    this.setState({ isActive: newValue });
    this.props.toggle();
  }

  handleValueChange = (event) => {
    const newValue = Number(event.target.value);
    this.setState({ filter: newValue });
    this.props.change(newValue);
  }

  renderSlider = () => {
    const {filter} =this.state;
    const {min, max} = this.props;

    return (
      <div>
        <p>
          Showing Items with score: <strong>{filter}</strong> or higher.
        </p>
        <div>
          <span>{min}</span>
          <input
            type="range"
            value={filter}
            min={min}
            max={max}
            onChange={(e) => this.handleValueChange(e)}
          />
          <span>{max}</span>
        </div>
      </div>
    );
  }

  render() {
    const {isActive} =this.state;

    return (
      <div>
        <input
          type="checkbox"
          id="isFilterActive"
          checked={isActive}
          onChange={() => this.handleActiveChange()}
        />
        <label htmlFor="isFilterActive">Filter?</label>
        {isActive ? this.renderSlider(): null}
      </div>
    );
  }
}

ScoreFilterBar.propTypes = {
  isActive: PropTypes.bool.isRequired,
  initialFilter: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  toggle: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired
};

export default ScoreFilterBar;
