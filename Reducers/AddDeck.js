import {ADD_ENTRY} from '../actions/index'


const initialState ={
  decks: []
};

function entries (state = {}, action) {
  switch (action.type) {
    case ADD_ENTRY :
      return {
        state,
        decks:[
          ...state.decks,
          action.payload.newDeck
        ]

      }
    default :
      return {
        ...state
      };
  }
}

export default entries
