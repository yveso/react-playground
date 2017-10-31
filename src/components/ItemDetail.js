import React from 'react';
import PropTypes from 'prop-types';
import BorderedDiv from './BorderedDiv';

class ItemDetail extends React.Component {
  render() {
    const { title, score } = this.props.item;
    const { item, increase, decrease } = this.props;

    return (
      <BorderedDiv>
        <h1>{title}</h1>
        <p style={{fontSize: '4rem'}}>
          <button onClick={() => decrease(item)}>-</button>
          <span>{score}</span>
          <button onClick={() => increase(item)}>+</button>
        </p>
      </BorderedDiv>
    );
  }
}

ItemDetail.propTypes = {
  item: PropTypes.object.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired
};

export default ItemDetail;
