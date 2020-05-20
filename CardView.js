import React, {Component} from 'react';
import { View, Text, Button , TouchableOpacity, TouchableWithoutFeedback, Animated} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {Card} from 'react-native-paper';
import {connect} from 'react-redux'

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
    //const deck = this.props.route.params.deck;
    const deck= this.props;
    console.log("\n\n deck in Quiz  -cardView => ", deck);

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
      <Text>Good Job</Text>
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


const styles = {


  numberRemaining: {
    flex:3,
    width: '100%',
    height: 100,
    padding: 50,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: -200,

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
     margin:15,
     height: 50,
     borderRadius:5,
     flex: 2,
     flexDirection: 'row',
     justifyContent: 'space-between',

  },

  buttonStyle10: {

     backgroundColor: '#ffa07a',
     padding: 15,
     margin: 5,
     height: 50,
     borderRadius:5,
     flex: 2,
     flexDirection: 'row',
     justifyContent: 'space-between',

  },

  buttonStyle2: {

     backgroundColor: '#ffa07a',
     padding: 15,
     margin: 10,
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

  card10: {
    margin: 10,
    backgroundColor: '#f0f8ff',
    borderRadius: 5,
    padding: 20,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.5,
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
  submitButtonText1:{
     color: 'white',
     marginLeft: 15,
     justifyContent : "center",
  },

  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop:50,
    marginBottom:50,
    backgroundColor: '#F5FCFF',
  },
  flipCard: {
    width: 360,
    height: 250,
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
    padding:40,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  label1: {
    textAlign: 'center',
    fontSize: 20,
    padding:50,
    fontFamily: 'System',
    color: '#000000',
    backgroundColor: 'transparent',
  },

  result: {
    width: 340,
    height: 200,
    paddding: 50,
    backgroundColor: '#F5FCFF',
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

  submitButtonTextResult: {
    color: 'white',
    marginLeft: 122,
    justifyContent : "center",
  },

  resultText: {
    marginLeft: 85,
    marginTop: 50,
    fontSize: 20,
    color: 'black',
    borderRadius:20,
  },
  cont: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-around',
}


};

const mapStateToProps = deck => ({
  deck,
});

export default connect(mapStateToProps,null)(Quiz);
