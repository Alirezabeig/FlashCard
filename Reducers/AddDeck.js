import {ADD_ENTRY, DECK_DB} from '../actions/index'


const inititialState = {
    decks: [],
    deck: {
        title: '',
    }
}
function Entries (state = inititialState, action) {
  switch (action.type) {
      case DECK_DB:
        return { decks:action.payload,
        }
   case ADD_ENTRY:
     console.log('called ADD_ENTRY reducer', state, action.payload.newDeck);
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
