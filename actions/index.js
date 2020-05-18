
import {   AsyncStorage } from 'react-native';
import keyMirror from "keyMirror"

export const ActionTypes = keyMirros ({
  RECEIVE_DECKS:null,
  CREATE_DECK:null,
})

export const receiveDecks = decks => {
  type: ActionTypes.RECEIVE_DECKS,
  decks
}

export const createDeck = (id, name)=> ({
  type: ActionTypes.CREATE_DECK,
  id,
  name
})
