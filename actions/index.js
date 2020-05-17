
import {   AsyncStorage } from 'react-native';



export const ADD_DECK = 'ADD_DECK';
export const DECK_DB ='DECK_DB';

export const handleGetAllDecks = decks => ({
  type: DECK_DB,
  decks

});

export function createDeck(deck) {
  console.log('createDeck action');
  return {
    type: 'ADD_DECK',
    deck,
  };
}
