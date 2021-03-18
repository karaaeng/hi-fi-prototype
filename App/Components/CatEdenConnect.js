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
    Comfortaa_400Bold,
  } from '@expo-google-fonts/comfortaa'; 


export default function CatEdenConnect({navigation}) {
  const [text, setText] = useState("");

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_400Bold,
  });

  function chatOrReject(){
    return (
    <View style = {styles.acceptOrReject}>
      <TouchableOpacity style = {styles.buttonViewChat} onPress = { () => {
        navigation.navigate("CatEdenChat")
      }}>
        <Text style = {styles.buttonText}> View Chat </Text>
       
      </TouchableOpacity>

      <TouchableOpacity style = {styles.buttonIgnore} onPress = { () => {
        navigation.navigate("Home")
      }}>
        <Text style = {styles.buttonText}> ignore </Text>
       
      </TouchableOpacity>
      </View>
    );
  }

  function notification(text) {
    return (
      <View style = {styles.notification}>
        
        <View style = {styles.notificationInside}>
        
          <Text style = {styles.notificationText}>{text}</Text>
          </View>
          {chatOrReject()}
      </View>
    );

    
  }

 function notificationBar(){
      return(
      <View >
      <TouchableOpacity onPress = { () => {
        navigation.navigate('ConnectFriends')
      }}>
        <Image style = {styles.navigationBar} source = {Images.map}/>   
      </TouchableOpacity>
                  
      </View>);
    }

  return (      
    <View style = {styles.container}>
    <View style = {styles.images}>
        <Image style = {styles.profileImages} source = {Images.cat}/>
        <Image style = {styles.secondImage} source = {Images.eden}/>
        </View>
    <ScrollView>
      {notification('Congrats! You and Eden are now connected.')}

  
      </ScrollView>
      <ButtonBar navigation = {navigation} which = {"home"}/>
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
    flexDirection: 'column', 
    alignItems: 'center'
  },
  buttonViewChat: {
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
  buttonIgnore: {
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 20,
    marginTop: 10,
    alignItems: "center",
    alignContent: 'center',
    backgroundColor: "#E5E5E5",
    borderRadius: 30,
    height: 55,
    width: 152,
    justifyContent: 'center'
 },
 images: {
  flexDirection: 'row', 
  justifyContent: 'center', 
  margin: 80
 },
  icon: {
    fontSize: 25,
    tintColor: '#939393'
  }, 
  profileImages:{
    width: 102, 
    height: 102,
    borderRadius: 51,
  },
  secondImage:{
    width: 102, 
    height: 102,
    borderRadius: 51,
    marginLeft: -15
  },
  notification: {
    height: 270,
    width: 357,
    borderRadius: 20,
    backgroundColor: "#FFF0C1",
    borderColor: "#E5E5E5",
    alignSelf: 'center',
    justifyContent: "center",
    padding: 10
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