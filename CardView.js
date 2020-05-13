import React, {Component} from 'react';
import { View, Text, Button , TouchableOpacity, TouchableWithoutFeedback, Animated} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  Badge,
  Card
} from 'react-native-elements';

import {
  frontOpacity,
  frontAnimatedStyle,
  elevation,
  elevationBack,elevationFront, backAnimatedStyle, backOpacity, value, flipCard} from './CardFlip';


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




  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }



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
    //const answer= questions[thisQuestion].answer;
    //const question =questions[thisQuestion].question;

    if (thisQuestion < questions.length) {
      return (
        <View>



        <Card
          title={
            this.state.showQuestion
              ? `A: ${questions[thisQuestion].question}`
              : `Q: ${questions[thisQuestion].answer}`
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

      <Card
        title={`You got ${correctAnswers} out of ${questions.length}
        Score: ${score}%`}
      >
        <Button
          buttonStyle={styles.buttonStyle3}
          title="Back To Deck"
          onPress={() => this.props.navigation.navigate('Deck')}
        />

        <TouchableWithoutFeedback onPress={() => flipCard()} >
            <View>
                  <Animated.View style={[frontAnimatedStyle, styles.paperFront,{elevation: elevationFront}, {opacity: frontOpacity}]}>
                    <Text style={{fontSize: 20,marginTop: 50, paddingLeft: 8, color: 'black',lineHeight: 20}}>
                     Testing  Front {value} - <Text style={{fontSize: 8}}>KPI</Text>
                    </Text>
                      <View style={{position: "absolute", paddingTop: 3, right: 8}}>

                      </View>
                  </Animated.View>

                  <Animated.View style={[backAnimatedStyle, styles.paperBack, {elevation: elevationBack}, {opacity: backOpacity}]}>
                    <Text style={{fontSize: 20,marginTop: 50}}>Testing Back title {value}</Text>
                  </Animated.View>
              </View>
        </TouchableWithoutFeedback>

      </Card>

    );
  }

  render() {
    return (
      <View style={styles.cardContainer} ref={(card) => this.card = card} >

        {this.renderCard()}


         </View>

    );
  }
}

const styles = {

  cardContainer:{
    backgroundColor: '#20b2aa',
    flex: 1,
  },
  numberRemaining: {
    textAlign: 'center',
    marginBottom: 10,
    margin: 10,
  },

  card:{
    fontSize: 40,
    marginTop: 50,
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
  }


};
export default Quiz;
