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


export default function ConnectFriends({navigation}) {
  const [text, setText] = useState("");

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  function searchCircle(connectionProfile) {
    return (
      <TouchableOpacity style = {styles.button} onPress = { () => {
        navigation.navigate(connectionProfile);
      }}>
        <Text style = {styles.buttonText}> search your circle </Text>
       
      </TouchableOpacity>
    );
  }

  function notification(first, text, image, connectionProfile) {
    if (first === true){
      return (
      <View style = {styles.firstNotification}>
      <View style = {styles.notificationInside}>
        <Image style = {styles.profileImages} source = {image}/>
          <Text style = {styles.notificationText}>{text}</Text>
          </View>
          {searchCircle(connectionProfile)}
      </View>
    );
    } else{
      return (
      <View style = {styles.notification}>
      <View style = {styles.notificationInside}>
        <Image style = {styles.profileImages} source = {image}/>
          <Text style = {styles.notificationText}>{text}</Text>
          </View>
          {searchCircle(connectionProfile)}
      </View>
    );
    }
    
  }

  return (      
    <View style = {styles.container}>
    <Text style = {styles.titleText} > connect friends </Text>
    <ScrollView>
      {notification(true, 'Isa is asking for connections in Newport Beach, CA', Images.isa, "IsaProfileConnect")}

  
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

  button: {
    marginTop: 15,
    alignItems: "center",
    backgroundColor: "#FED254",
    borderRadius: 30,
    height: 55,
    width: 254,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 18,
    color: '#4A4A4A',

  },
  icon: {
    fontSize: 25,
    tintColor: '#939393'
  }, 
  profileImages:{
    width: 60, 
    height: 60,
    borderRadius: 30,
  },
  secondImage:{
    width: 60, 
    height: 60,
    borderRadius: 30,
    marginLeft: -15
  },
  notification: {
    height: 210,
    width: Dimensions.get('window').width * .8,
    borderBottomWidth: 2,
    borderColor: "#E5E5E5",
    alignSelf: 'center',
    justifyContent: "center",
    padding: 10
  },
  firstNotification: {
    height: 210,
    width: Dimensions.get('window').width * .8,
    borderTopWidth: 2,
    borderColor: "#E5E5E5",
    alignSelf: 'center',
    justifyContent: "center",
    borderBottomWidth: 2,

  },
  navigationBar: {
    alignSelf: 'center',
    width: Dimensions.get('window').width * .5,
    height: Dimensions.get('window').height * 0.05,
    resizeMode: 'contain'
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
    padding: 10
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