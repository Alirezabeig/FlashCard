import {
  DECK_DB,
  ADD_CARD
} from '../actions/index'
  const INITIAL_STATE = {};

  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case DECK_DB:
        return action.payload;
      case ADD_CARD:
        return action.payload;

      default:
        return state;
    }
  };
