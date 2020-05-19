import {
  RECEIVE_DECKS,
  CREATE_CARD,
  CREATE_DECK,
  DELETE_DECK} from "../actions";


const decks = (state = initialState, action) => {

  switch (action.type) {
    case RECEIVE_DECKS:
          console.log("\nAll DECKS- Reducer =>",state)
      return {
        ...state,
        ...action.decks
      };

      case CREATE_DECK: {
      console.log("DECK ADD- Reducer")
      return {
        ...state,
        [action.id]: {
          id: action.id,
          name: action.name,
          cards: []
        }
      };
    }
    case CREATE_CARD: {
      console.log("\nreducer Card state =>", state);

      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          cards: [
            ...state[action.deckId].cards,
            { question: action.question, answer: action.answer }
          ]
        }
      };
    }
    default:

      return state;
  }
};

export default decks;
