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


export default function Home({navigation}) {
  const [text, setText] = useState("");

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  function acceptOrRejct(connectionProfile, connectAccept){
    return (
    <View style = {styles.acceptOrReject}>
      <TouchableOpacity style = {styles.buttonAccept} onPress = { () => {
        navigation.navigate(connectAccept)
      }}>
        <Text style = {styles.buttonText}> accept </Text>
       
      </TouchableOpacity>

      <TouchableOpacity style = {styles.buttonMoreInfo} onPress = { () => {
        navigation.navigate(connectionProfile)
      }}>
        <Text style = {styles.buttonText}> more info </Text>
       
      </TouchableOpacity>
      </View>
    );
  }

  function notification(first, text, connector, connectionImage, connectionProfile, chatName) {
    if (first === true){
      return (
      <View style = {styles.firstNotification}>
      <View style = {styles.notificationInside}>
        <Image style = {styles.profileImages} source = {connector}/>
        <Image style = {styles.secondImage} source = {connectionImage}/>
          <Text style = {styles.notificationText}>{text}</Text>
          </View>
          {acceptOrRejct(connectionProfile, chatName)}
      </View>
    );
    } else{
      return (
      <View style = {styles.notification}>
      <View style = {styles.notificationInside}>
        <Image style = {styles.profileImages} source = {connector}/>
        <Image style = {styles.secondImage} source = {connectionImage}/>
          <Text style = {styles.notificationText}>{text}</Text>
          </View>
          {acceptOrRejct(connectionProfile, chatName)}
      </View>
    );
    }
    
  }

  return (      
    <View style = {styles.container}>
    <Text style = {styles.titleText} > connect me </Text>
    <ScrollView>
      {notification(true, 'Isa connected you with Eden', Images.isa, Images.eden, "EdenProfileSuggested", "CatEdenConnect")}
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
  buttonText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 18,
    color: '#4A4A4A',
  }
  
});