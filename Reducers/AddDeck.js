import {ADD_ENTRY} from '../actions/index'


const initialState ={
  decks: []
};

function Entries (state = initialState, action) {
  switch (action.type) {
   case ADD_ENTRY:
     console.log('called ADD_ENTRY reducer', state, action.payload.newDeck);
     return {
       state,
       decks: [...state.decks, action.payload.newDeck],
     };
   default:
     return {
       ...state,
     };
 }
}
export default Entries;
