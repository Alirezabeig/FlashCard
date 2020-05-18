import {
  ADD_DECK,
  DECK_DB,
  ADD_CARD,
  DELETE_DECK,
} from '../actions/index'

import {ActionTypes} from "../actions"

const decks (state ={}, action) => {
  switch(action.type) {
    case ActionTypes.RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ActionTypes.CREATE_DECK:{
      return {
        [action.id]:{
          id:action.id,
          name:action.name,
          cards:[]
        }
      };
    }

    default:
    ...state,

  }
}
