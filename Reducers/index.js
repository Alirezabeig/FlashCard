import { ActionTypes } from "../actions";

const initialState = null;

const decks = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.RECEIVE_DECKS:
    console.log("all Decks - Reducer")
      return {
        ...state,
        ...action.decks
      };
    case ActionTypes.CREATE_DECK: {
      console.log("Deck Add - Reducer")
      return {
        ...state,
        [action.id]: {
          id: action.id,
          name: action.name,
          cards: []
        }
      };
    }

    default:
      return state;
  }
};

export default decks;
