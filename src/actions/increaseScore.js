const increaseScore = id => {
  return {
    type: 'INCREASE_SCORE',
    id
  };
};

export default increaseScore;
