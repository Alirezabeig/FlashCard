

import {   AsyncStorage } from 'react-native';

export const RECEIVE_DECKS='RECEIVE_DECKS';
export const CREATE_DECK = 'CREATE_DECK';
export const CREATE_CARD = 'CREATE_CARD';
export const DELETE_DECK = 'DELETE_DECK';


export const createDeck = (id, name) => ({
  type: 'CREATE_DECK',
  id,
  name
});

export const receiveDecks = decks => ({

  type: 'RECEIVE_DECKS',
  decks
});

export const createCard = (id, question, answer) => {
  console.log("\n\n action id, question, answer=> ", id, question, answer);
  return {
    type: 'CREATE_CARD',
    id,
    question,
    answer
  }
}
