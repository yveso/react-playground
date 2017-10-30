import React from 'react';
import PropTypes from 'prop-types';
import BorderedDiv from './BorderedDiv';

class ItemDetail extends React.Component {
  render() {
    return (
      <BorderedDiv>
        <h1>{this.props.item.title}</h1>
        <p>
        </p>
      </BorderedDiv>
    );
  }
}

ItemDetail.propTypes = {
  item: PropTypes.object.isRequired
};

export default ItemDetail;
/*
{this.props.match.params.itemID}
*/
