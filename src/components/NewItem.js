import React from 'react';
import PropTypes from 'prop-types';
import BorderedDiv from './BorderedDiv';

class NewItem extends React.Component {
  addItem(event) {
    event.preventDefault();
    this.props.add(this.inputField.value);
    this.form.reset();
  }

  render() {
    return (
      <BorderedDiv>
        <h2>New Item</h2>
        <form
          ref={(input) => this.form = input}
          onSubmit={(e) => this.addItem(e)}
        >
          <input
            type="text" placeholder="Name" required
            ref={(input) => this.inputField = input}
          />
          <button tpye="submit">Add</button>
        </form>
      </BorderedDiv>
    );
  }
}

NewItem.propTypes = {
  add: PropTypes.func.isRequired
};

export default NewItem;
