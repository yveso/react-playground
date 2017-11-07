import React from 'react';
import PropTypes from 'prop-types';
import BorderedDiv from './BorderedDiv';
import { Button } from './Buttons';

class NewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
  }

  handleChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.add(this.state.name);
    this.setState({name: ''});
  }

  render() {
    return (
      <BorderedDiv>
        <h1>New Item</h1>
        <BorderedDiv>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input
              type="text"
              required
              value={this.state.name}
              placeholder="Name"
              onChange={(e) => this.handleChange(e)}
            />
            <Button tpye="submit">Add</Button>
          </form>
        </BorderedDiv>
      </BorderedDiv>
    );
  }
}

NewItem.propTypes = {
  add: PropTypes.func.isRequired
};

export default NewItem;
