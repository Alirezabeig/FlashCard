import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './DeckList';


export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckList {...this.props} />
        <Text style={styles.text}>
        This is Home
        </Text>
      </View>
    );
  }
};

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
});
