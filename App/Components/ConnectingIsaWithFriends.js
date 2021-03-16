import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import ButtonBar from './ButtonBar';
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


export default function ConnectingIsaWithFriends({navigation}) {
  const [text, setText] = useState("");

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  
  function notification(first, name, profileName) {
    if (first === true){
      return (
        <View style = {styles.firstNotification}>
          <View style = {styles.notificationInside}>
            <TouchableOpacity style = {styles.buttonIgnore} onPress = { () => {
                navigation.navigate(profileName)
            }}>
        <Text style = {styles.notificationText}>{name}</Text>
       
      </TouchableOpacity>
            
          </View>
        </View>
      );
    } else{
      return (
        <View style = {styles.notification}>
          <View style = {styles.notificationInside}>
            <Text style = {styles.notificationText}>{name}</Text>
          </View>
        </View>
      );
    }
    
  }


  return (      
    <View style = {styles.container}>
    <ScrollView>
      {notification(true, 'Kara Eng', "KaraProfileConnect")}
      {notification(false, 'George Burnside')}
      {notification(false, 'Elina Thadhani')}
      {notification(false, 'Marie')}
      {notification(false, 'Nat Hojel')}
      {notification(false, 'Cam Horton')}
      {notification(false, 'Pablo McDouglas')}
      {notification(false, 'Thomas Henri')}

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
  acceptOrReject:{
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  buttonAccept: {
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 20,
    marginTop: 10,
    alignItems: "center",
    alignContent: 'center',
    backgroundColor: "#FED254",
    borderRadius: 30,
    height: 55,
    width: 152,
    justifyContent: 'center'
  },
  buttonMoreInfo: {
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 20,
    marginTop: 10,
    alignItems: "center",
    alignContent: 'center',
    backgroundColor: "#FFF0C1",
    borderRadius: 30,
    height: 55,
    width: 152,
    justifyContent: 'center'
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
    height: 84,
    width: 380,
    borderBottomWidth: 2,
    borderColor: "#E5E5E5",
    alignSelf: 'center',
    justifyContent: "center",
    padding: 10
  },
  firstNotification: {
    height: 84,
    width: 380,
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
    justifyContent: 'center'
  },
  notificationText: {
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 23,
    color: '#4A4A4A',
    textAlignVertical: "center",
    padding: 10,

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