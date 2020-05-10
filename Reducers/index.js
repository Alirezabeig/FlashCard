import { combineReducers } from 'redux';
import DeckR from './DeckR';
import Deck from './Deck';

export default combineReducers({
  decks: DeckR,
  deckDetail: Deck
});
