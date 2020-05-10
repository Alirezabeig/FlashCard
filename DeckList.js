import React, { Component } from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
//import {} from './utils/helper'
import {fetchDeckDB} from './actions/index'

class DeckList extends Component {

  componentDidMount(){
    this.props.fetchDeckDB();
  }

  renderItem = ({ item }) =>
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate(
              'DeckDetail',
              {
                entryId: item.key,
                navTitle: item.title
              }
            )}
    >
      <View>
        <Card
          title={item.title}
          subtitle={`${item.questions.length} cards`}
        >
          <Badge
            containerStyle={{ backgroundColor: 'lightblue'}}
          >
            <Text>
              {`${item.questions.length} cards`}
            </Text>
          </Badge>
        </Card>
      </View>
    </TouchableOpacity>;

  render (){
    return (
      <View>
        <FlatList
        data={this.props.DBData}
        renderItem={this.renderItem}
        />

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
