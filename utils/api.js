
import {AsyncStorage} from "react-native";
export const STORAGE_KEY = "FlashCards";

export function getDeck(id) {
  return AsyncStorage.getItem(id);
}

export const saveDeck = deck => {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({ [deck.id]: deck })
  );
};

export const saveCard = (deckId, card) => {
  return AsyncStorage.mergeItem(STORAGE_KEY).then(results => {
    const data = JSON.parse(results);

    // Add card to existing deck data.
    data[deckId] = {
      ...data[deckId],
      cards: [
        ...data[deckId].cards,
        { question: card.question, answer: card.answer }
      ]
    };
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  });
};



export function saveDeckTitle(title) {
  try {
    return AsyncStorage.setItem(title, JSON.stringify ({title,questions:[]}));
    } catch (error){
  console.log(error)
  }
}

export function cardAddDeck(title, card){
  try {
  return AsyncStorage.getItem(title).then(result=>{
    const data = JSON.parse(result);

    let questions= data.questions;
    questions.push(card);

    AsyncStorage.mergeItem(title,JSON.stringify({
        questions
      }));
    });
  }catch (error){
    console.log(error);
  }
  return "You got your card added!"
}

//Used in DeckList
export const retrieveDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    return data;
  });
};

export const addCardToDeckk = (deckId, card) => {
  return AsyncStorage.getItem(STORAGE_KEY).then(results => {
    const data = JSON.parse(results);

    data[deckId] = {
      ...data[deckId],
      cards: [
        ...data[deckId].cards,
        { question: card.question, answer: card.answer }
      ]
    };
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  });
};
