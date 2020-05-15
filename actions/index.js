import {   AsyncStorage } from 'react-native';
import {
  getDecks,
  getDeck,
  cardAddDeck,
  submitEntry
} from '../utils/api';

export const DECK_DB = 'fetch_deck_db';
export const DECK_INFO = 'fetch_deck_info';
export const DELETE_DECK = 'delete_deck';
export const ADD_CARD = 'add_card';
export const ADD_ENTRY = 'ADD_ENTRY';

export function addEntry(newDeck) {
  console.log('called addEntry action');
  return {
    type: 'ADD_ENTRY',
    payload: { newDeck },

  };
}

export function fetchDeckDB() {
  return (dispatch) => {
    getDecks().then(data => dispatch({ type: DECK_DB, payload: data}));
  }
}

export function getDeckDetails(entryId) {
  return (dispatch) => {
    getDeck(entryId)
      .then(cardDeck => {
        dispatch({ type: DECK_INFO, payload: JSON.parse(cardDeck) })
      });
  }
}

export function addCard(entry) {
  return (dispatch) => {
    AsyncStorage.mergeItem(entry)
      .then(getDeck().then(data => {
          dispatch({ type: ADD_CARD, payload: data})
        })
        .catch(err => console.log(err)))
      .catch(err => console.log(err));
  }
}


export function deleteDeck(removeTitle) {
  return (dispatch) => {
    AsyncStorage.removeItem(removeTitle)
      .then(getDecks().then(data => {
          dispatch({ type: DELETE_DECK, payload: data})
        })
        .catch(err => console.log(err)))
      .catch(err => console.log(err));
  }
}
