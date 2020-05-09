import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
//import {} from './utils/helper'


export default class AddDeck extends Component {



  render (){
    return (
      <View>
          <Text style= {styles.deckName}>
          Deck Name
          </Text>

        <Text style={styles.text}>
        Number of cards
        </Text>


      <TouchableOpacity
      style={styles.submitButton}>
      <Text style = { styles.submitButtonText}> Add Card </Text>

      </TouchableOpacity>

      <TouchableOpacity
      style={styles.submitButton}>
      <Text style = { styles.submitButtonText}> Start Quiz </Text>

      </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   deckName : {
     margin: 5,
     marginLeft: 30,
     height: 40,
     fontSize: 20,
     marginTop: 20,
   },

   text : {
     margin: 10,
     marginLeft: 30,
     height: 40,
     fontSize: 15,
     marginTop: 10,
     opacity: .5,

   },

   submitButton: {

      backgroundColor: '#7a42f4',
      padding: 15,
      margin: 15,
      height: 50,
   },
   submitButtonText:{
      color: 'white',
      marginLeft: 120,
      justifyContent : "center",
   }
});
