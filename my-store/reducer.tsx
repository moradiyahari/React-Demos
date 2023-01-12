const initialState = {
  runs: 0,
  balls: 0,
  wickets: 0,
};

export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_SCORE_BY_ZERO':
      return {
        ...state,
        balls: state.balls + 1,
      };
    case 'INCREASE_SCORE_BY_ONE':
      return {
        ...state,
        balls: state.balls + 1,
        runs: state.runs + 1,
      };

    case 'INCREASE_SCORE_BY_TWO':
      return {
        ...state,
        balls: state.balls + 1,
        runs: state.runs + 2,
      };

    case 'INCREASE_SCORE_BY_THREE':
      return {
        ...state,
        balls: state.balls + 1,
        runs: state.runs + 3,
      };

    case 'INCREASE_SCORE_BY_FOUR':
      return {
        ...state,
        balls: state.balls + 1,
        runs: state.runs + 4,
      };

    case 'INCREASE_SCORE_BY_SIX':
      return {
        ...state,
        balls: state.balls + 1,
        runs: state.runs + 6,
      };
    case 'INCREASE_WICKET_LOST':
      return {
        ...state,
        balls: state.balls + 1,
        wickets: state.wickets + 1,
      };
    case 'INCREASE_NO_BALL_SCORE':
      return {
        ...state,
        runs: state.runs + 1,
      };
    case 'INCREASE_WIDE_BALL_SCORE':
      return {
        ...state,
        runs: state.runs + 1,
      };

    default:
      return state;
  }
};
