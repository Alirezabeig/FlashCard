import React, { Component } from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
//import {} from './utils/helper'
import {fetchDeckDB} from './actions/index'
import { Card, Badge } from 'react-native-elements';

class DeckList extends Component {

  componentDidMount(){
    this.props.fetchDeckDB();
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
        style={styles.card}
        title={item.title}
        subtitle={`${item.questions.length} cards`}

      >

          <Text>
            {`${item.questions.length} cards`}
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
     backgroundColor:'#a52a2a'
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
