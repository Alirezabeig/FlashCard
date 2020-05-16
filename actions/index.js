import {   AsyncStorage } from 'react-native';
import {
  getDecks,
  getDeck,
  cardAddDeck,
  submitEntry,
  retrieveDecks
} from '../utils/api';

import keyMirror from "keymirror";

export const ActionTypes = keyMirror({
  DECK_DB: null,
  CREATE_DECK: null,
  CREATE_CARD: null
});

export const DECK_INFO = 'fethc_deck_info';
export const DELETE_DECK = 'delete_deck';
export const ADD_ENTRY = 'ADD_ENTRY';
export const ADD_DECK = 'ADD_DECK';
//export const DECK_DB = 'fethc_deck_db';


export function handleGetAllDecks() {
  console.log('Get All Decks');
  return (dispatch) => {
      return retrieveDecks()
        .then(decks => {
          dispatch(getAllDecks(decks));
      })
  }
}

export function getAllDecks(decks) {
    return {
        type: ActionTypes.DECK_DB,
        decks
    }
}

export function handleAddDecks(deckTitle){
  return (dispatch)=> {
    return saveDeckTitle(deckTitle)
      .then((deck)=> {
        dispatch(addEntry(deck))
      })
  }
  }

export function addEntry(deck) {
  console.log('addEntry action');
  return {
    type: 'ADD_ENTRY',
    deck
  };
}

export function getDeckDetails(entryId) {
  return (dispatch) => {
    getDeck(entryId)
      .then(cardDeck => {
        dispatch(deckdetails())
      });
  }
}

export function deckdetails(){
  return {
    type: 'DECK_INFO',
    deck,
  }
}

export function deleteDeck(removeTitle) {
  console.log('Delete_ action');
  return (dispatch) => {
    AsyncStorage.removeItem(removeTitle)
      .then(getDecks().then(data => {
          dispatch({ type: DELETE_DECK, payload: data})
        })
        .catch(err => console.log(err)))
      .catch(err => console.log(err));
  }
}
