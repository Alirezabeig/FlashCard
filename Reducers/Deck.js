import {
  DECK_INFO,
  ADD_CARD
} from '../actions/index';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DECK_INFO:
      return action.payload;
    case ADD_CARD:
      return {
        ...state,
        deck
      }
    default:
      return state;
  }
};
