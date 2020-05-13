import {   AsyncStorage } from 'react-native';
import {
  getDecks,
  getDeck
} from '../utils/api';

export const FETCH_DECK_DB = 'fetch_deck_db';
export const FETCH_DECK_INFO = 'fetch_deck_info';
export const DELETE_DECK = 'delete_deck';


export function fetchDeckDB() {
  return (dispatch) => {
    getDecks().then(data => dispatch({ type: FETCH_DECK_DB, payload: data}));
  }
}

export function getDeckDetails(entryId) {
  return (dispatch) => {
    getDeck(entryId)
      .then(cardDeck => {
        dispatch({ type: FETCH_DECK_INFO, payload: JSON.parse(cardDeck) })
      });
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
