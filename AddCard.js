import React, { Component } from 'react';
import {View,TouchableWithoutFeedback, Keyboard, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
//import {} from './utils/helper'
import {cardAddDeck} from './utils/api'
import {connect} from 'react-redux'
import {createCard} from './actions/index'


class AddCard extends Component {

  static navigationOptions = () => ({
    title: "Add Card",
  });
      state= {
          questionInput:'',
          answerInput:'',
      }



      submit=() => {

         deckId = this.route.params.deckId;
          const {questionInput,answerInput}=this.state;


          //cardAddDeck(deckId, card);
          //Add this card to Util/API
          console.log("\n\n  questionInput, answerInput => ", deckId, questionInput, answerInput);

          this.props.createCard(deckId, questionInput, answerInput);
          //Add this to redux store

          this.setState({
            questionInput:'',
            answerInput:'',
          });


              this.props.navigation.navigate("Deck", { deckId: id, name:name  })

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
  createCard: (deckId, question, answer) =>
    dispatch(createCard(deckId, question, answer))
});

const mapStateToProps = (state, props) => {
  console.log("\nmapStateToProps 1 state => ", state);
  console.log("\nmapStateToProps 2 props => ", props);
  const {route} = props;
  return {

       deck: state[route.params.deckId]
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(AddCard)

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
