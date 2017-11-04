import React from 'react';
import PropTypes from 'prop-types';

import BorderedDiv from './BorderedDiv';
import {Button} from './Buttons';
import ListItemScore from './ListItemScore';

class ItemDetail extends React.Component {
  removeItemAndRouteBack = (item) => {
    this.props.remove(item);
    this.props.historyPush('/');
  };

  render() {
    const { title, score } = this.props.item;
    const { item, increase, decrease } = this.props;

    return (
      <BorderedDiv>
        <h1>{title}</h1>
        <p>
          <Button onClick={() => decrease(item)}>-</Button>
          <ListItemScore makeItBigger>{score}</ListItemScore>
          <Button onClick={() => increase(item)}>+</Button>
        </p>
        <p>
          <Button onClick={() => this.removeItemAndRouteBack(item)}>Delete Me</Button>
        </p>
      </BorderedDiv>
    );
  }
}

ItemDetail.propTypes = {
  item: PropTypes.object.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  historyPush: PropTypes.func.isRequired
};

export default ItemDetail;
