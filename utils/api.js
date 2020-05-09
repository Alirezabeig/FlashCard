// utils/helpers.js
import React from "react";
import {AsyncStorage} from "react-native";

export function submitEntry(id, entry) {
return AsyncStorage.mergeItem ( id, JSON.stringify(entry) )
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
