import React from 'react';
import PropTypes from 'prop-types';

class ScoreFilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: props.initialFilter || 0 };
  }

  handleChange = (event) => {
    const newValue = Number(event.target.value);
    this.setState({ filter: newValue });
    this.props.change(newValue);
  }

  render() {
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
            onChange={(e) => this.handleChange(e)}
          />
          <span>{max}</span>
        </div>
      </div>
    );
  }
}

ScoreFilterBar.propTypes = {
  initialFilter: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  change: PropTypes.func.isRequired
};

export default ScoreFilterBar;
