import React, { Component } from 'react';
import {View,TouchableWithoutFeedback, Keyboard, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
//import {} from './utils/helper'
import {cardAddDeck} from './utils/api'
import {connect} from 'react-redux'
import {createCard} from './actions/index'


class AddCard extends Component {

      state= {
          questionInput:'',
          answerInput:'',
      }



      submit=() => {

         deckId = this.props.route.deckId;

        if (this.state.questionInput && this.state.answerInput){
          const {questionInput,answerInput}=this.state;
          const title= this.props.route.params.title;


          const card = {
            question: questionInput,
            answer: answerInput
          };

          //cardAddDeck(deckId, card);
          //Add this card to Util/API

          this.props.createCard(deckId, card);
          //Add this to redux store

          this.setState({
            questionInput:'',
            answerInput:'',
          });

          this.props.navigation.navigate("Deck", { deckId: id, title: title  })
        }
      }

  render (){
    return (
      <View style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>

            <View>
                  <Text style= {styles.cardName}>
                  Add a New Card... !
                  </Text>

                  <TextInput
                      style={styles.input}
                      placeholder="  Enter your question: "
                      onChangeText={questionInput => this.setState({questionInput})}
                      value={this.state.questionInput}
                    />

                 <TextInput
                    style={styles.input}
                    placeholder="  Enter the answer "
                    onChangeText={answerInput=> this.setState({answerInput})}
                    value= {this.state.answerInput}
                  />

               <TouchableOpacity
                  style={styles.submitButton}
                  onPress={this.submit}>
                  <Text style = { styles.submitButtonText}> Submit </Text>
               </TouchableOpacity>

              </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const mapStateToProps = (state, { route }) => ({
  deck: state[route.params.deckId]
});
const mapDispatchToProps = dispatch => ({
  createCard : (deckId, card) => dispatch(createCard(deckId, card))
});

export default connect (null,mapDispatchToProps)(AddCard)

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#f0f8ff',
      height: 800,
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
      padding: 10,
      borderColor: '#7a42f4',
      borderWidth: 1,
      borderRadius:5,
      backgroundColor: '#ffffff'

   },
   submitButton: {

      backgroundColor: '#000000',
      padding: 15,
      margin: 25,
      height: 50,
      borderRadius:5,
   },
   submitButtonText:{
      color: 'white',
      marginLeft: 120,
      justifyContent : "center",
   }
});
