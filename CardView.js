import React, {Component} from 'react';
import { View, Text, Button , TouchableOpacity, TouchableWithoutFeedback, Animated} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {Card} from 'react-native-paper';
import {connect} from 'react-redux';
import {clearLocalNotification, setLocalNotification} from './utils/helpers';
import {styles} from './styles/QuizStyles'

import CardFlip from 'react-native-card-flip';

class Quiz extends Component {
  state = {
    showQuestion: true,
    cards: this.shuffleCards(),
    thisQuestion: 0,
    thisFlip:true,
    correctAnswers: 0,
    isFlipped: false,
    enabledButtons: false,
    diabledButton: false,
  };


  static navigationOptions = ({ route }) => ({
      name: route.params.name,

    });


  resetQuiz() {
    this.setState(() =>{
      return {
        showQuestion: true,
          cards: this.shuffleCards(),
        thisQuestion: 0,
        correctAnswers: 0
      }


    });
    //this.resetNotification()
  }
  goBack(){
    this.resetQuiz();
    this.props.navigation.goBack();
    

  }

  showButtons() {
    this.setState(() =>{
      return {
        enabledButtons: true,

      }
    });
    //this.resetNotification()
  }

  hideButtons() {
    this.setState(() =>{
      return {
        enabledButtons: false,
        thisFlip :false
      }
    });
    //this.resetNotification()
  };
  _Deck = () => {
    return this.props.route.params.deck;
  };

  shuffleCards() {
    const deck = this.props.route.params.deck;
    //const {deck, deckId}= this.props;
    console.log("\n\n 66666 new --- ** HIII - deck in Quiz  -cardView => ", deck);

    const cards = deck.cards;
    console.log("\n\n cards => ", cards);

    let i = cards.length-1;

    do {
      const randomIndex = Math.floor(Math.random()*(cards.length-1));
      const swapTarget = cards[randomIndex];
      cards[randomIndex] = cards[i];
      cards[i] = swapTarget;
      i--;
    } while (i >= 0);

    return cards;
  };

renderCard() {
    const {
      cards,
      thisQuestion,
      thisFlip,
      correctAnswers,
      enabledButtons,
    } = this.state;

    const score = parseInt(( correctAnswers/cards.length) * 100);

    if (thisQuestion < cards.length) {
      return (
        <View>
        <Card
            title={`Q: ${cards[thisQuestion].question}`}
            style={styles.card10}
          >
          <Text style={{marginBottom: 15, textAlign: 'left', fontSize:20}}>
          {cards[thisQuestion].question
            ?`Q: ${cards[thisQuestion].question} `
            : `..`
          }
            </Text>
          </Card>

          <View>
            <CardFlip style={styles.flipCard} duration={300} ref={card => (this.card = card)}>

              <View>
                  <TouchableOpacity
                      activeOpacity={1}
                      style={[styles.card, styles.card2]}
                      onPress={() => {this.card.flip();this.showButtons()}}>
                      <Text style={styles.label}>Answer</Text>
                  </TouchableOpacity>
                </View>

                <View>
                {enabledButtons===true
                ?
                <View>
                <Text style={styles.label1}>A: {cards[thisQuestion].answer}</Text>
                  <View style={styles.container}>

                    <TouchableOpacity
                        style={styles.buttonStyle1}
                        onPress={() => {
                          this.setState({
                            thisQuestion: thisQuestion+1,
                            correctAnswers: correctAnswers+1,
                            enabledButtons: false,
                          });
                          this.card.flip()
                        }}
                      >
                      <Text style = { styles.submitButtonText1}>Correct</Text>
                    </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.buttonStyle10}
                        onPress={() => {this.setState({
                          thisQuestion: thisQuestion+1,
                          enabledButtons: false,
                          })
                          this.card.flip()
                        }
                       }
                          >
                        <Text style = { styles.submitButtonText1}>Incorrect</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                :null
                }
                </View>

                <View>
                <TouchableOpacity
                      activeOpacity={1}
                      style={[styles.card, styles.card2]}
                      onPress={() => {this.card.flip();this.hideButtons()}}>
                      <Text style={styles.label}>A: {cards[thisQuestion].answer}</Text>
                </TouchableOpacity>
                </View>

          </CardFlip>

        </View>


        <View>
          <Text
            style={styles.numberRemaining}
          >
            {`Question ${thisQuestion+1} of ${cards.length}`}
          </Text>
        </View>

      </View>

      );
    }
    return (
      clearLocalNotification()
        .then(setLocalNotification)

    );
  }

  render() {
    const {
      cards,
      thisQuestion,
      thisFlip,
      correctAnswers
    } = this.state;
    const score = parseInt(( correctAnswers/cards.length) * 100);


    if (cards[thisQuestion] ===undefined){
      return (
      <View>

        <View style={styles.result}>
             <Text style={styles.resultText}>You got {correctAnswers} out of {cards.length}</Text>
             <Text style={styles.resultText}>Your Score: {score}%</Text>
        </View>


        <TouchableOpacity
            style={styles.buttonStyle2}
            onPress ={()=> this.resetQuiz()}>
            <Text style = { styles.submitButtonTextResult}>Reset Quiz</Text>

        </TouchableOpacity>

        <TouchableOpacity
            style={styles.buttonStyle3}
            onPress ={()=> this.goBack()}>
            <Text style = { styles.submitButtonTextResult}>Back To Deck</Text>

        </TouchableOpacity>

       </View>
      );
    }

    return (

      <View>
            {this.renderCard()}
            </View>

    );
  }
}

const mapStateToProps = deck => ({
  deck,

});

export default connect(mapStateToProps,null)(Quiz);
