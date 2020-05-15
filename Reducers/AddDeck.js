import {ADD_ENTRY} from '../actions/index'


const InitialState ={
  decks: {}
};

function Entries (state = InitialState, action) {
  switch (action.type) {
   case ADD_ENTRY:
     console.log('called ADD_ENTRY reducer', state, action.payload.newDeck);
     return {
       ...state,
       decks: [...state.decks, action.payload.entry],
     };
   default:
     return {
       ...state,
     };
 }
}
export default Entries;
