
import { combineReducers } from 'redux';
import DeckR from './DeckR';
import Deck from './Deck';
import Entries from './AddDeck'

export default combineReducers({
  deckR: DeckR,
  deckDetail: Deck,
  addEntry: Entries,

});
