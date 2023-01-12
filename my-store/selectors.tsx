const scoredZeroRun = () => {
  return { type: 'INCREASE_SCORE_BY_ZERO' };
};
const scoredOneRun = () => {
  return { type: 'INCREASE_SCORE_BY_ONE' };
};
const scoredTwoRuns = () => {
  return { type: 'INCREASE_SCORE_BY_TWO' };
};
const scoredThreeRuns = () => {
  return { type: 'INCREASE_SCORE_BY_THREE' };
};
const scoredFour = () => {
  return { type: 'INCREASE_SCORE_BY_FOUR' };
};
const scoredSix = () => {
  return { type: 'INCREASE_SCORE_BY_SIX' };
};
const wicketLost = () => {
  return { type: 'INCREASE_WICKET_LOST' };
};
const noBall = () => {
  return { type: 'INCREASE_NO_BALL_SCORE' };
};
const wideBall = () => {
  return { type: 'INCREASE_WIDE_BALL_SCORE' };
};

export const mapDispatchToProps = {
  addZeroRun: scoredZeroRun,
  addOneRun: scoredOneRun,
  addTwoRuns: scoredTwoRuns,
  addThreeRuns: scoredThreeRuns,
  addFourRuns: scoredFour,
  addSixRuns: scoredSix,
  addWicketLost: wicketLost,
  addNoBall: noBall,
  addWideBall: wideBall,
};
