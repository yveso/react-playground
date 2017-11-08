const DECREASE_SCORE = 'DECREASE_SCORE';

const decreaseScore = id => {
  return {
    type: DECREASE_SCORE,
    id
  };
};

export { DECREASE_SCORE };
export default decreaseScore;
