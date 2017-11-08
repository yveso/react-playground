import React from 'react';
import PropTypes from 'prop-types';

import BorderedDiv from '../primitives/BorderedDiv';
import { Button } from '../primitives/Buttons';
import ListItemScore from '../primitives/ListItemScore';

const ItemDetail = (props) => {
  const { title, score } = props.item;
  const { increase, decrease, remove } = props;

  return (
    <BorderedDiv>
      <h1>{title}</h1>
      <p>
        <Button onClick={() => decrease()}>-</Button>
        <ListItemScore makeItBigger>{score}</ListItemScore>
        <Button onClick={() => increase()}>+</Button>
      </p>
      <p>
        <Button onClick={() => remove()}>Delete Me</Button>
      </p>
    </BorderedDiv>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

export default ItemDetail;
