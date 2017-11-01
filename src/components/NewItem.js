import React from 'react';
import PropTypes from 'prop-types';
import BorderedDiv from './BorderedDiv';
import {Button} from './Buttons';

class NewItem extends React.Component {
  addItem(event) {
    event.preventDefault();
    this.props.add(this.inputField.value);
    this.form.reset();
  }

  render() {
    return (
      <BorderedDiv>
        <h1>New Item</h1>
        <BorderedDiv>
          <form
            ref={(input) => this.form = input}
            onSubmit={(e) => this.addItem(e)}
          >
            <input
              type="text" placeholder="Name" required
              ref={(input) => this.inputField = input}
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
