import {   AsyncStorage } from 'react-native';
import {
  getDecks,
  getDeck,
  cardAddDeck,
  submitEntry
} from '../utils/api';

export const DECK_INFO = 'fethc_deck_info';
export const DELETE_DECK = 'delete_deck';
export const ADD_CARD = 'add_card';
export const ADD_ENTRY = 'ADD_ENTRY';
export const ADD_DECK = 'ADD_DECK';
export const DECK_DB = 'fethc_deck_db';


export function fetchDeckDB() {
  console.log('called DECK_DBs');
  return (dispatch) => {
    getDecks().then(data => dispatch({ type: DECK_DB, payload: data}));
  }
}

export function addEntry(id,title) {
  console.log('addEntry action');
  return {
    type: 'ADD_ENTRY',
    id,
    title,

  };
}

export function addCard(newDeck, question, answer) {
  console.log('called add-Card action');
  return {
    type: ADD_CARD,
    payload: { newDeck,question,answer },
  };
}


export function getDeckDetails(entryId) {
  return (dispatch) => {
    getDeck(entryId)
      .then(cardDeck => {
        dispatch({ type: DECK_INFO, payload: JSON.parse(cardDeck) })
      });
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
