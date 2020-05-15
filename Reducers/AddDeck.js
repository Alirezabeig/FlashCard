import {ADD_ENTRY, DECK_DB,} from '../actions/index'


const initState = {
    decks: {},
    deck: {
        title: '',
    }
}

function Entries (state = initState, action) {
  switch (action.type) {
      case DECK_DB:
        return action.payload;

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
