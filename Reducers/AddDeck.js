import {
  ADD_ENTRY,
  DECK_DB
} from '../actions/index'

const inititialState = {
    decks: {},
    deck: {
      key:'',
      title:'',
    }
}
function Entries (state = null, action) {
  switch (action.type) {
      case DECK_DB:
      console.log('DECK_DB Enter');
        return {
          ...state,
          ...action.decks
        }
      case ADD_ENTRY:
        console.log('ADD_ENTRY Reducer', state, action.payload);
        return {
          ...state,
          [action.title]: {
          key: action.title,
          title: action.title,
        }
     };
   default:
     return {
       ...state,
};
 }
}
export default Entries;
