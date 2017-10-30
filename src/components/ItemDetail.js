import React from 'react';
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

export default ItemDetail;
/*
{this.props.match.params.itemID}
*/
