import React, { Component } from 'react';
import {View,TouchableWithoutFeedback, Keyboard, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
//import {} from './utils/helper'
import {addCardToDeck} from './utils/api'
import {connect} from 'react-redux'
import {createNewCard} from './actions/index'
import {styles} from './styles/AddCardStyles'


class AddCard extends Component {

  static navigationOptions = () => ({
    title: "Add Card",
  });
      state= {
          questionInput:'',
          answerInput:'',
      }



      submit=() => {
        console.log("\nbefore deconstruction deckId => ",this.props);
         deckId = this.props.route.params.deckId;
         const id= deckId;
          const {questionInput,answerInput}=this.state;


          //cardAddDeck(deckId, card);
          //Add this card to Util/API
          console.log("\n\n deckId, questionInput, answerInput => ", deckId, questionInput, answerInput);

          this.props.createNewCard(deckId, questionInput, answerInput);
          //Add this to redux store

          // Add to AsyncStorage
          addCardToDeck(deckId, {questionInput,answerInput});

          this.setState({
            questionInput:'',
            answerInput:'',
          });

          this.props.navigation.goBack();
            //  this.props.navigation.navigate("Deck", { deckId: id })

      }

  render (){
    const {questionInput, answerInput} = this.state;

    return (
      <View style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>

            <View>
                  <Text style= {styles.cardName}>
                  Add a New Question Card... !
                  </Text>

                  <TextInput
                      style={styles.input}
                      placeholder="  Enter your question: "
                      onChangeText={questionInput => this.setState({questionInput})}
                      value={questionInput}
                    />

                 <TextInput
                    style={styles.input}
                    placeholder="  Enter the answer "
                    onChangeText={answerInput=> this.setState({answerInput})}
                    value= {answerInput}
                  />

               <TouchableOpacity
                  style={styles.submitButton}
                  onPress={this.submit}>
                  <Text style = { styles.submitButtonText}> Submit </Text>
               </TouchableOpacity>

              </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createNewCard: (deckId, question, answer) =>
    dispatch(createNewCard(deckId, question, answer))
});



export default connect (null,mapDispatchToProps)(AddCard)
