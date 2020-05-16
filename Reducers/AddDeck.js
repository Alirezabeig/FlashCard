import {
  ADD_ENTRY,
  DECK_DB
} from '../actions/index'

const inititialState = {
    decks: [],
    deck: {
        title: '',
    }
}
function Entries (state = inititialState, action) {
  switch (action.type) {
      case DECK_DB:
      console.log('DECK_DB Enter');
        return { decks:action.payload,
        }
      case ADD_ENTRY:
        console.log('ADD_ENTRY Reducer', state, action.payload.newDeck);
        return {
          ...state,
          decks: [...state.decks, action.payload.newDeck],
     };
   default:
     return {
       ...state,
};
 }
}
export default Entries;
