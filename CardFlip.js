import React from 'react';
import { View, StyleSheet, Animated, TouchableWithoutFeedback, Text } from 'react-native';

const CardFlip = () => {

        let animatedValue = new Animated.Value(0);
        let value = 0;

        animatedValue.addListener(({ value }) => {
            this.value = value;
        })

        let frontInterpolate = animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'],
        })
        let backInterpolate = animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        })
        let frontOpacity = animatedValue.interpolate({
        inputRange: [89, 90],
        outputRange: [1, 0]
        });

        let backOpacity = animatedValue.interpolate({
        inputRange: [89, 90],
        outputRange: [0, 1]
        });

        let elevationFront = animatedValue.interpolate({
          inputRange: [0, 25],
          outputRange: [10, 0]
          })

        let elevationBack = animatedValue.interpolate({
          inputRange: [155, 180],
          outputRange: [0, 10]
          })

        const flipCard = () => {
          if (this.value >= 90) {
            Animated.spring(animatedValue,{
              toValue: 0,
              friction: 8,
              tension: 10
            }).start();
          } else {
            Animated.spring(animatedValue,{
              toValue: 180,
              friction: 8,
              tension: 10
            }).start();
          }
        }


        const frontAnimatedStyle = {
        transform: [{ rotateY: frontInterpolate}]
        }
        const backAnimatedStyle = {
        transform: [{ rotateY: backInterpolate }]
        }

}
export default CardFlip

const styles = StyleSheet.create({
    paperFront : {
      marginHorizontal: 15,
      backgroundColor: "white",
      minHeight: 200,
      borderRadius: 5,
      marginBottom: 15,

    },
    paperBack : {
      top: -215,
      marginHorizontal: 15,
      backgroundColor: "white",
      minHeight: 200,
      borderRadius: 5,
      marginBottom: 15,
    }
});
