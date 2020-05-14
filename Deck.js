import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import App from './app'
//import {} from './utils/helper'
import {connect} from 'react-redux';
import {getDeckDetails, deleteDeck} from './actions/index';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Select from 'react-select';
import {Card} from 'react-native-paper'



 AddCard = ()=> {
 this.props.navigation.navigate(
   'AddCard',
   {
    navTitle: this.props.title,
    title: this.props.title
        }
 );
}

class Deck extends Component {


  componentDidMount() {
    this.props.getDeckDetails(this.props.route.params.entryId);
  }


  deleteThisDeck() {
     const title = this.props.title;
    this.props.deleteDeck(title);
     this.props.navigation.navigate('Home')

   }

  static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.state.params.navTitle
      }
    };

  render (){
    return (

      <View  >

        <Card title={this.props.title} style={styles.card10}>

              <Text style={{marginBottom: 10, textAlign: 'center'}}>

                  {this.props.questions && (this.props.questions.length>1 || this.props.questions.length==0)
                    ?`There are ${this.props.questions.length} Cards in this Deck.`
                    : `There is 1 Card in thi Deck.`
                  }
                </Text>



      <TouchableOpacity
          style={styles.submitButton}
          onPress={()=>{
            this.props.navigation.navigate(
            'AddCard',
            {
              navTitle: this.props.title,
              title:this.props.title,
            }
          );
        }
      }
          >
          <Text style = { styles.submitButtonText}> Add Card </Text>
      </TouchableOpacity>

    <View>
      {this.props.questions && this.props.questions.length>0
        ? (

          <TouchableOpacity
              style={styles.submitButton2}
              onPress={()=>{
                this.props.navigation.navigate(
                'Quiz',
                {
                navTitle: this.props.title,
                questions: this.props.questions}
              );
            }
          } >
          <Text style = {styles.submitButtonText2}> Start Quiz </Text>
            </TouchableOpacity>
          ): <Text style={styles.tt}>     Add Cards so you can quize yourself.</Text>
          }
      </View>

        <Button
          title="Delete Deck"
          type="clear"
          onPress={() => this.deleteThisDeck()}
        />

        </Card>

      </View>

    )
  }
}
const mapStateToProps = state => {
  const { title, questions } = state.deckDetail ? state.deckDetail : ('', []);
  return { title, questions };
};


export default connect(mapStateToProps,{ deleteDeck, getDeckDetails})(Deck)

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   card: {
     padding: 10,
     margin: 10,
     backgroundColor:'#faebd7',
     borderRadius: 20,
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

   deckName : {
     margin: 5,
     marginLeft: 30,
     height: 40,
     fontSize: 20,
     marginTop: 20,
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
   iftexts : {
     margin: 10,
     marginLeft: 15,
     marginBottom:50,
     height: 50,
     fontSize: 30,
     marginTop: 30,
     borderRadius:20,

   },

   deleteButton:{
     marginTop:100,
   },

   submitButton: {

      backgroundColor: '#ffa07a',
      padding: 15,
      margin: 15,
      marginBottom: 10 ,
      height: 50,
      borderRadius:5,
   },

   submitButton2: {

      backgroundColor: '#20b2aa',
      padding: 15,
      margin: 15,
      height: 50,
      marginBottom: 50 ,
      borderRadius:5,
      fontSize:10,
   },
   submitButtonText:{
      color: 'white',
      marginLeft: 95,
      justifyContent : "center",
   },
   submitButtonText2:{
      color: 'black',
      marginLeft: 95,
      justifyContent : "center",
   },
   tt:{
      color: 'black',
      marginLeft: 100,
      justifyContent : "center",
   }
});
