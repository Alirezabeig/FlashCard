import {
  DECK_DB,
  DELETE_DECK
} from '../actions/index';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DECK_DB:
      return action.payload;
    case DELETE_DECK:
      return action.payload;
    default:
      return state;
  }
};
