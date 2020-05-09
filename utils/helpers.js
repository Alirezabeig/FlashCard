// utils/helpers.js
import React from "react";
import {View, StyleSheet} from "react-native"
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import {white, red, orange, blue, lightPurp, pink} from './colors'

const styles = StyleSheet.create({
  iconContainer: {
    padding: 5,
    borderRadius: 8,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  },
})

export function getDeckInfo(metric){
    const info = {
        run : {
            displayName: "Run",
            max: 50,
            unti: "miles",
            step:1,
            type:"steppers",
            getIcon(){
                return (
                    <View style={[styles.iconContainer, {backgroundColor: red}]}>
                        <MaterialIcons
                        name ="directions-run"
                        color="white"
                        size={35}/>
                    </View>
                );
            }
    },


};

return typeof metric === "undefined"
    ? info
    : info[metric];
}
