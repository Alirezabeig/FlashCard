import React, { Component } from 'react';
import {View,
  Text,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView} from 'react-native'
//import {} from './utils/helper'
import {saveDeck} from './utils/api'
import {getDeckDetails} from './actions/index';
import {connect} from 'react-redux';
import {addEntry} from './actions/index';

import {
  getDailyReminderValue,
  clearLocalNotification,
  setLocalNotification
} from './utils/helpers'

import { generateId } from './utils/helpers'


class AddDeck extends Component {

  state= {
    titleText: '',

  };
  _DeckObject = () => ({
      id: generateId(),
      title: this.state.input,
      cards: []
    })


    handleInputChange = titleText => {
      this.setState(() => ({
          titleText
        }));
 };

  Submit = () => {
      deck = this._DeckObject();
      this.props.addEntry(deck.id,deck.title);
      saveDeck(deck);
       this.props.navigation.navigate('Home');


         clearLocalNotification()
           .then(setLocalNotification)
     };


  render (){
    return (
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1 }}
      >
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>

              <Text style={styles.text}>
              What is the title on your new deck?
              </Text>

                <TextInput
                style={styles.input}
                placeholder=" Enter Deck Name"
                onChangeText = {this.handleInputChange}
                value= {this.state.titleText }
              />

            <TouchableOpacity
              style={styles.submitButton}
              onPress= {this.Submit}>
              <Text style = { styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>

            </View>
           </TouchableWithoutFeedback>

        </SafeAreaView>

    </KeyboardAvoidingView>

    )
  }
}
const mapDispatchToProps = dispatch => ({
  addEntry: (id, deckTitle) => dispatch(addEntry(id, deckTitle))
});
export default connect(null, mapDispatchToProps)(AddDeck);

const styles = StyleSheet.create({
   container: {
      flex:1,
      backgroundColor: '#f0f8ff',
   },
   text : {
     margin: 10,
     marginLeft: 30,
     height: 40,
     fontSize: 20,
     marginTop: 100,

   },


   input: {
      margin: 20,
      height: 50,
      borderColor: '#7a42f4',
      borderWidth: 1,
      marginTop:20,
      padding:10,
      borderRadius:5,
      backgroundColor: '#ffffff'

   },


   submitButton: {

      backgroundColor:  '#000000',
      padding: 15,
      margin: 20,
      height: 50,
      marginTop:5,
      borderRadius:5,
   },
   submitButtonText:{
      color: 'white',
      marginLeft: 120,
      justifyContent : "center",
   }
});
