import {
  ADD_ENTRY,
  DECK_DB,
  DELETE_DECK,
  ADD_CARD_TO_DECK,
  DECK_INFO,
} from '../actions/index'

export default function decks(state = {}, action) {
    switch (action.type) {
        case DECK_DB:
            return {
                ...state,
                ...action.decks
            }
        case ADD_ENTRY:
            const { deck } = action;
            return {
                ...state,
                [deck.title]: deck,
            }
        case DECK_INFO:
            return action.payload;
        case ADD_CARD_TO_DECK:

        case DELETE_DECK:
        console.log('DELETE_DECK -REDUCER');
          return action.payload;
        default:
            return state;
    }
}
