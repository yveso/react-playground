const INCREASE_SCORE = 'INCREASE_SCORE';

const increaseScore = id => {
  return {
    type: INCREASE_SCORE,
    id
  };
};

export { INCREASE_SCORE };
export default increaseScore;
