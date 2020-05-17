
import {   AsyncStorage } from 'react-native';
import {saveDeck, getDecks, saveDeckTitle} from '../utils/api'

export const ADD_DECK = 'ADD_DECK';
export const DECK_DB ='DECK_DB';
export const ADD_CARD='ADD_CARD';


export function handleGetAllDecks (){
  return (dispatch)=> {
    return getDecks()
      .then((decks)=>{
        dispatch(getAllDecks(decks));
      })
  }
}
export function getAllDecks (decks) {
  console.log('GEEEET All DECKS to show in Home');
  return{
    type: DECK_DB,
    decks
  }
};

export function handleAddDecks(deckTitle){
return (dispatch)=>{
  return saveDeckTitle(deckTitle)
    .then((deck)=> {
      dispatch(createDeck(deck));
    })
}}

export function createDeck(deck) {
  console.log('createDeck action');
  return {
    type: 'ADD_DECK',
    deck,
  };
};

export function createCard(card){
  return{
    type:'ADD_CARD',
    card,
    }
  }
