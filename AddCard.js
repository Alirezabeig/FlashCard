import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
//import {} from './utils/helper'


export default class AddDeck extends Component {



  render (){
    return (
      <View>

      <KeyboardAvoidingView style={{
              flex: 1,
                justifyContent: 'center',
                alignContent: 'center'
              }}/>
          <Text style= {styles.cardName}>
          Add Card
          </Text>

          <TextInput
          style={styles.input}
          placeholder="  Type your question: "
        />




      <TouchableOpacity
      style={styles.submitButton}>
      <Text style = { styles.submitButtonText}> Submit </Text>

      </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   text : {
     margin: 10,
     marginLeft: 30,
     height: 40,
     fontSize: 20,
     marginTop: 150,

   },
   cardName : {
     margin: 15,
     marginLeft: 30,
     height: 40,
     fontSize: 20,
     marginTop: 30,
   },


   input: {
      margin: 20,
      height: 50,
      borderColor: '#7a42f4',
      borderWidth: 1,
      borderRadius:20,

   },
   submitButton: {

      backgroundColor: '#7a42f4',
      padding: 15,
      margin: 25,
      height: 50,
      borderRadius:20,
   },
   submitButtonText:{
      color: 'white',
      marginLeft: 120,
      justifyContent : "center",
   }
});
