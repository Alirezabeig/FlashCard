import {
  ADD_DECK,
  DECK_DB,
  ADD_CARD,

} from '../actions/index'

const initState = {
    decks: []
}
export default function decks(state = initState, action) {
    switch (action.type) {
        case DECK_DB:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
        console.log('reducer createDeck');
          const {deck}= action;
          return {
              ...state,
              [deck.title]: deck,
          }
        case ADD_CARD:
          return {
          ...state,
          [deck.card]:deck,
        }


        default:
            return state;
    }
}
