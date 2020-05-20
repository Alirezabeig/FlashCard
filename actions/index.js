

import {   AsyncStorage } from 'react-native';

import {
  removeDeck,
} from '../utils/api';

export const RECEIVE_DECKS='RECEIVE_DECKS';
export const CREATE_DECK = 'CREATE_DECK';
export const CREATE_CARD = 'CREATE_CARD';
export const DELETE_DECK = 'DELETE_DECK';


export const createNewDeck = (id, name) => ({
  type: 'CREATE_DECK',
  id,
  name
});

export const receiveDecks = decks => ({

  type: 'RECEIVE_DECKS',
  decks
});

export const createNewCard = (deckId, question, answer) => {
  console.log("\n\n action deckId, question, answer=> ", deckId, question, answer);
  return {
    type: 'CREATE_CARD',
    deckId,
    question,
    answer
  }
};

export function deleteDeck(deckId) {
    return (dispatch) => {
        return removeDeck(deckId) // API call to remove deck
            .then(() => {
                dispatch({
                        type: DELETE_DECK,
                        deckId,
                    })
                  })
                }
              }
