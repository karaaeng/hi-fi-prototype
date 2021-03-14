import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import ButtonBar from './ButtonBar';
import NavigationBar from './NavigationBar';
import NotificationBar from './NotificationBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function Chat({navigation}) {
  const [text, setText] = useState("");


  function notification(image1, image2, name1, name2, preview, first, chatName) {
    if (first ===true){
       return (
      <TouchableOpacity style = {styles.firstNotification} onPress = { () => {
        navigation.navigate(chatName)
      }}>
      <View style = {styles.notificationInside}>

      <Image style = {styles.profileImages} source = {image1}/>
      <Image style = {styles.secondImage} source = {image2}/>
      <View style = {styles.chat}>
        <Text style = {styles.peopleInChat}> {name1} & {name2} </Text>
        <Text style = {styles.chatPreview}> {preview} </Text>
      </View>
      </View>
      </TouchableOpacity>
    );
    }else{
      return (
      <TouchableOpacity style = {styles.notification} onPress = { () => {
        navigation.navigate(chatName)
      }}>
      <View style = {styles.notificationInside}>
      <Image style = {styles.profileImages} source = {image1}/>
      <Image style = {styles.secondImage} source = {image2}/>
      <View style = {styles.chat}>
        <Text style = {styles.peopleInChat}> {name1} & {name2} </Text>
        <Text style = {styles.chatPreview}> {preview} </Text>
      </View>
        </View>
      </TouchableOpacity>
    );
    }

   
  }


  return (      
    <View style = {styles.container}>
    <Text style = {styles.titleText} > chat </Text>
    <ScrollView>
      {notification(Images.harold, Images.eden, "Isa", "Eden", 
        "Hey Cat & Eden!  I love you both so much and know you’d make the cutest friends! Now go...", 
        true, "CatEdenChat")}
      {notification(Images.wilder, Images.christian, "Wilder", "Christian", 
        "You both have absolutley incredible sisters, so...", 
        false, "WilderChristianChat")}
      {notification(Images.kara, Images.harold, "Kara", "Isa", 
        "If you get along well, Kara might  knit you a custom sweater...", 
        false, "KaraIsaChat")}


  
      </ScrollView>
      <ButtonBar navigation = {navigation} which = {"chat"}/>
    </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center', 
    justifyContent: 'space-evenly'
  },
  chat:{
    flexDirection: 'column'
  },
  icon: {
    fontSize: 25,
    tintColor: '#939393'
  }, 
 
  profileImages:{
    width: 40, 
    height: 40,
    borderRadius: 20,
  },
  secondImage:{
    width: 40, 
    height: 40,
    borderRadius: 20,
    marginLeft: -10
  },

  notification: {
    marginTop: 10,
    
    borderRadius: 30,
    padding: 20,
    height: 150,
    width: 400,
    borderBottomWidth: 2,
    borderColor: "#939393",
    alignSelf: 'center',
  },
  firstNotification: {
    marginTop: 10,
    
    borderRadius: 30,
    padding: 20,
    height: 150,
    width: 400,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#939393",
    alignSelf: 'center',
  },
  peopleInChat:{
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 18,
    color: '#4A4A4A',
    marginLeft: 10,
    marginRight: 15,
    alignSelf: 'baseline'
  },
  chatPreview:{
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 14,
    color: '#4A4A4A',
    marginLeft: 10,
    marginRight: 15,
    alignSelf: 'baseline'
  },
  navigationBar: {
    alignSelf: 'center',
    width: Dimensions.get('window').width * .4,
    height: Dimensions.get('window').height * 0.05,
    resizeMode: 'contain'
  },
  notificationInside: {
    flexDirection: 'row', 
    alignItems: 'baseline',
    alignContent: 'space-around',
    color: '#939393',
  },

  titleText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 30,
    color: '#4A4A4A',
    marginBottom: 5,
    alignSelf: 'center',
  },
  
});