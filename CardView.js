import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
//import {} from './utils/helper'
import { Card } from 'react-native-elements';


export default class Quiz extends Component {

    state = {
      showQuestion: true,
      questions: '',
      currentQuestion:0,
      correctAnswers:0,
    };

ShowCard(){
  const {
    questions,
    currentQuestion,
    correctAnswers,
  } = this.state;

return (
  <Card
    title={
    this.state.showQuestion
    ? `Q:{questions[currentQuestion].question}`
    : `A:{questions[currentQuestion]}.answer}`
  }
  >
    <Text>hey there</Text>

 </Card>
)

  }

  render (){
    return (
      <View>

          {this.ShowCard()}

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
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1

   },
   submitButtonCorrect: {

      backgroundColor:'#32cd32',
      padding: 15,
      width: 320,
      marginLeft: 25,

      height: 50,
      borderRadius:20,
   },

   submitButtonIncorrect:{
     backgroundColor:'#800000',
     margin:20,
     padding: 15,
     width: 320,
     marginLeft: 25,
     height: 50,
     borderRadius:20,
   },

   submitButtonText:{
      color: 'white',
      marginLeft: 115,
      justifyContent : "center",
   }
});
