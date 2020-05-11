
import {AsyncStorage} from "react-native";

export function submitEntry(id, entry) {
return AsyncStorage.mergeItem ( id, JSON.stringify(entry) )
}

export function getDecks() {
  return AsyncStorage.getAllKeys().then(keys => {
    return AsyncStorage.multiGet(keys).then(stores => {
      return stores.map((result, i, store) => {
        let key = store[i][0];
        let value = JSON.parse(store[i][1]);
        if (value) {
          return {
            key,
            title: value.title,
            questions: value.questions
          };
        }
      }).filter(items => {
        if (items) {
          return typeof items.questions !== 'undefined'
        }
      });
    });
  });
}

export function getDeck(id) {
  return AsyncStorage.getItem(id);
}


export function removeEntry(){

}

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
