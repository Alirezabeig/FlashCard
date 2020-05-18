
import {   AsyncStorage } from 'react-native';
import {saveDeck, getDecks, saveDeckTitle, cardAddDeck} from '../utils/api'

export const ADD_DECK = 'ADD_DECK';
export const DECK_DB ='DECK_DB';
export const ADD_CARD='ADD_CARD';
export const DELETE_DECK='DELETE_DECK';


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

export function createCard(deckId, card){
  console.log('Card Create action');
  return{
    type:'ADD_CARD',
    deckId,
    card,
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
