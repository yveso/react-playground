import React from 'react';
import PropTypes from 'prop-types';

class List extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        <ul>
          {
            items.map(x => <li key={x.id}>{x.title}</li>)
          }
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.array
};

export default List;
