import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import NavigationBar from './NavigationBar';
import NotificationBar from './NotificationBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    useFonts,
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  } from '@expo-google-fonts/comfortaa'; 


export default function FriendFeed({navigation}) {
  const [text, setText] = useState("");

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  function notification(text, image, profileName) {
    return (
      <TouchableOpacity style = {styles.notification} onPress = { () => {
        navigation.navigate(profileName)
      }}>
      <View style = {styles.notificationInside}>
      <Image style = {styles.profileImages} source = {image}/>
        <Text style = {styles.notificationText}>{text} </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (      
    <View style = {styles.container}>
    <Text style = {styles.titleText} > newsfeed </Text>
    <ScrollView>
      {notification('Eden created a connection in New York, NY!', Images.eden, "EdenProfile")}
      {notification("Cal was connected with someone in Santa Cruz, CA!", Images.cal, "CalProfile")}
      {notification("Kara moved to Los Angeles, CA!", Images.kara, "KaraProfile")}
      {notification("Marie moved to Newport Beach, CA!", Images.marie, "MarieProfile")}
      {notification("Eden created a  connection in Newport Beach, CA!", Images.eden, "EdenProfile")}
      {notification("Wilder joined ven!", Images.wilder, "WilderProfile")}
      {notification("Christian joined ven!", Images.christian, "ChristianProfile")}
  
      </ScrollView>
    </View>
    );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    flexDirection: 'column',
  },
  icon: {
    fontSize: 25,
    tintColor: '#939393'
  }, 
  profileImages:{
    width: 60, 
    height: 60,
    borderRadius: 115,
    marginLeft: 10,
  },
  notification: {
    height: 150,
    width: 336,
    borderTopWidth: 1,
    borderColor: "#E5E5E5",
    alignSelf: 'center',
    justifyContent: "center",
  },
  notificationInside: {
    flexDirection: 'row', 
    alignItems: 'center',
    color: '#939393',
  },
  notificationText: {
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 23,
    color: '#4A4A4A',
    marginLeft: 20,
    marginRight: 50,
    textAlignVertical: "center",
  },
titleText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 30,
    color: '#4A4A4A',
    marginBottom: 5,
    marginTop: 20,
    marginBottom: 25,
    alignSelf: 'center',
  },
  
});