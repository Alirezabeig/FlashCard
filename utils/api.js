
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

    // Add a new card to the exisiting cards-
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

//This is for receiving the decks from AsyncStorage and show in DeckList
export const retrieveDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    return data;
  });
};

export const addCardToDeck = (deckId, card) => {
  return AsyncStorage.getItem(STORAGE_KEY).then(results => {
    const data = JSON.parse(results);

    data[deckId] = {
      ...data[deckId],
      cards: [
        ...data[deckId].cards,
        { question: card.questionInput, answer: card.answerInput }
      ]
    };
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  });
};

export async function removeDeck(deckId) {
    const results = await AsyncStorage.getItem(STORAGE_KEY);
    if (results) {
        const data = JSON.parse(results);
        delete data[deckId];
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        return data;
    }
    return {};
}
