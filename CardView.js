import React, {Component} from 'react';
import { View, Text, Button , TouchableOpacity, TouchableWithoutFeedback, Animated} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {Card, Badge} from 'react-native-elements';

import CardFlip from 'react-native-card-flip';

class Quiz extends Component {
  state = {
    showQuestion: true,
    questions: this.shuffleQuestions(),
    thisQuestion: 0,
    correctAnswers: 0,
    isFlipped: false
  };


  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.navTitle
    }
  };

  resetQuiz() {
    this.setState(() =>{
      return {
        showQuestion: true,
          questions: this.shuffleQuestions(),
        thisQuestion: 0,
        correctAnswers: 0
      }
    });
    this.resetNotification()
  }

  backToDeck() {
    const backAction = NavigationActions.back();
    this.resetQuiz();
    this.props.navigation.dispatch(backAction);
    this.resetNotification()
  }

  shuffleQuestions() {
    const questions = this.props.route.params.questions;
    let i = questions.length-1;

    do {
      const randomIndex = Math.floor(Math.random()*(questions.length-1));
      const swapTarget = questions[randomIndex];
      questions[randomIndex] = questions[i];
      questions[i] = swapTarget;
      i--;
    } while (i >= 0);

    return questions;
  }

renderCard() {
    const {
      questions,
      thisQuestion,
      correctAnswers
    } = this.state;

    const score = parseInt(( correctAnswers/questions.length) * 100);

    if (thisQuestion < questions.length) {
      return (
        <View>
        <Card
            title={

                `Q: ${questions[thisQuestion].question}`
            }
          >

          <TouchableOpacity
          style={styles.buttonStyle1}
          onPress={() => {
            this.setState({
              thisQuestion: thisQuestion+1,
              correctAnswers: correctAnswers+1
            });
          }}
        >
                <Text style = { styles.submitButtonText}>Correct</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonStyle2}
                  onPress={() => this.setState({ thisQuestion: thisQuestion+1 })}
                >
                <Text style = { styles.submitButtonText}>Incorrect</Text>
                </TouchableOpacity>
          </Card>


        <View>
          <Text
            style={styles.numberRemaining}
          >
            {`Question ${thisQuestion+1} of ${questions.length}`}
          </Text>
        </View>

        </View>

      );
    }
    return (
      <Text>Good Job</Text>
    );
  }

  render() {
    const {
      questions,
      thisQuestion,
      correctAnswers
    } = this.state;
    const score = parseInt(( correctAnswers/questions.length) * 100);


    if (questions[thisQuestion] ===undefined){
      return (
        <View>
         <Text style={styles.text}>You got {correctAnswers} out of {questions.length}</Text>
         <Text style={styles.text}>Your Score: {score}%</Text>
        </View>
      );
    }

    return (
      <View>


    {this.renderCard()}
    <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
      <TouchableOpacity
          activeOpacity={1}
          style={[styles.card, styles.card2]}
          onPress={() => this.card.flip()}>
          <Text style={styles.label}>Answer</Text>
    </TouchableOpacity>
    <TouchableOpacity
          activeOpacity={1}
          style={[styles.card, styles.card2]}
          onPress={() => this.card.flip()}>
          <Text style={styles.label}>A: {questions[thisQuestion].answer}</Text>
    </TouchableOpacity>
  </CardFlip>


         </View>

    );
  }
}

const styles = {


  numberRemaining: {
    textAlign: 'center',
    marginBottom: 10,
    margin: 10,
  },
  text : {
    margin: 10,
    marginLeft: 20,
    height: 40,
    fontSize: 15,
    marginTop: 10,
    opacity: .5,
    borderRadius:20,

  },

  cards:{
    fontSize: 40,
    marginTop: 30,
  },

  buttonStyle1: {

     backgroundColor: '#20b2aa',
     padding: 15,
     margin: 15,
     height: 50,
     borderRadius:5,
  },

  buttonStyle2: {

     backgroundColor: '#ffa07a',
     padding: 15,
     margin: 15,
     height: 50,
     borderRadius:5,
  },

  buttonStyle3: {

     backgroundColor: '#ffa07a',
     padding: 15,
     margin: 15,
     height: 50,
     borderRadius:20,
  },
  buttonStyle4: {

     backgroundColor: '#20b2aa',
     padding: 15,
     margin: 15,
     height: 50,
     borderRadius:20,
  },
  submitButtonText:{
     color: 'white',
     marginLeft: 95,
     justifyContent : "center",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cardContainer: {
    width: 320,
    height: 500,
  },
  card: {
    width: 340,
    height: 200,
    paddding: 50,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    marginLeft:15,
    margin:20,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    textAlign: 'center',
    fontSize: 20,
    padding:50,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },


};
export default Quiz;
