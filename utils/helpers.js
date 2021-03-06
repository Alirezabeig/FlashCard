// utils/helpers.js
import React from "react";
import {View, StyleSheet, AsyncStorage} from "react-native"

import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

const NOTIFICATION_KEY = 'UdaciFitness:notifications'

export function getDailyReminderValue () {
  return {
    today: "👋 Don't forget to log your data today!"
  }
}

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
export function generateId () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(async () => {
    try {
      Notifications.cancelAllScheduledNotificationsAsync();
    } catch (error) {
      // treat error here
      console.log(error);
    }
  });
}

function createNotification () {
  return {
    title: 'Log your stats!',
    body: "👋 don't forget to log your stats for today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}
