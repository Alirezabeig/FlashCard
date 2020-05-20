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
import {connect} from 'react-redux';
import {createNewDeck} from './actions/index';
import {saveDeck} from './utils/api'
import {styles} from './styles/AddDeckStyles'

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
      name: this.state.titleText,
      cards: []
    })


    handleInputChange = titleText => {
      this.setState(() => ({
          titleText
        }));
 };

  Submit = () => {
      deck = this._DeckObject();
      this.props.createNewDeck(deck.id, deck.name);
      saveDeck(deck);
       this.props.navigation.navigate("Deck",{
       deckId: deck.id,
      name: deck.name
    }
     );

         clearLocalNotification()
           .then(setLocalNotification)

           this.setState(() => ({
         titleText: ""
       }));
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
  createNewDeck: (id, deckName) => dispatch(createNewDeck(id, deckName))
});

export default connect(
  null,
  mapDispatchToProps
)(AddDeck);
