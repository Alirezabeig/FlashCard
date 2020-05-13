import React, { Component } from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
//import {} from './utils/helper'
import {fetchDeckDB} from './actions/index';
import {Card} from 'react-native-paper';

class DeckList extends Component {

  componentDidMount(){
    this.props.fetchDeckDB();
  }

  componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.data !== prevProps.data) {
    this.fetchDeckDB(this.props.data);
  }

}

  renderItem = ({ item }) =>
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate(
              'Deck',
              {
                entryId: item.key,
                navTitle: item.title
              }
            )}
    >
      <Card

        style={styles.card10}
      >
      <Text style={styles.tt}>{item.title}</Text>

          <Text style={styles.tt2}>
            {
              (item.questions.length>1 || item.questions.length==0)
              ?`${item.questions.length} cards`
              : `1 card`
            }
          </Text>



      </Card>

    </TouchableOpacity>;

  render (){
    return (
      <View style={styles.containerStyle} >
        {this.props.DBdata.length > 0
          ?
          <FlatList
            data={this.props.DBdata}
            renderItem={this.renderItem}
          />
          : <Card title="Create a deck to get started!"/>
        }
      </View>
    );
  }
};

const mapStateToProps = state => {
  const DBdata = state.decks;

  return { DBdata };
};

export default connect(mapStateToProps, { fetchDeckDB })(DeckList);


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
   card: {
     padding: 10,
     margin: 2,
     backgroundColor:'#a52a2a',
     borderRadius:4,
   },
   cardName : {
     margin: 15,
     marginLeft: 30,
     height: 40,
     fontSize: 20,
     marginTop: 30,
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
   },

   tt:{
     fontSize: 30,
     margin:10,

   },

   tt2:{
     fontSize: 15,
     margin:10,

   },
});
