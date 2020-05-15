
import { combineReducers } from 'redux';
import DeckR from './DeckR';
import Deck from './Deck';
import AddCard from './AddCard'
import Entries from './AddDeck'

export default combineReducers({
  decks: DeckR,
  deckDetail: Deck,
  addCARDs: AddCard,
  addEntry: Entries,

});
