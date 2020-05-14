
import { combineReducers } from 'redux';
import DeckR from './DeckR';
import Deck from './Deck';
import AddDeck from './AddDeck'
import AddCard from './AddCard'



export default combineReducers({
  decks: DeckR,
  deckDetail: Deck,
  addDecks: AddDeck,
  addCARDs: AddCard,

});
