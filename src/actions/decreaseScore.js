const decreaseScore = id => {
  return {
    type: 'DECREASE_SCORE',
    id
  };
};

export default decreaseScore;
