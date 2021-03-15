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



export default function Home({navigation}) {
 const [text, setText] = useState("");


  function notification(text, image, profileName) {
    return (
      <TouchableOpacity style = {styles.notification} onPress = { () => {
        navigation.navigate(profileName)
      }}>
      <View style = {styles.notificationInside}>
      <Image style = {styles.profileImages} source = {image}/>
        <Text style = {styles.notificationText}> {text} </Text>
        </View>
      </TouchableOpacity>
    );
  }

 function notificationBar(){
      return(
      <View >
      <TouchableOpacity onPress = { () => {
        navigation.navigate('MapFeed')
      }}>
        <Image style = {styles.navigationBar} source = {Images.map}/>   
      </TouchableOpacity>
                  
      </View>);
    }

  return (      
    <View style = {styles.container}>
    {notificationBar()}
    <Text style = {styles.titleText} > connect me </Text>
    <ScrollView>
      {notification("Eden created a connection in New York, NY!", Images.eden, "EdenProfile")}
      {notification("Cal was connected with someone in Santa Cruz, CA!", Images.cal, "CalProfile")}
      {notification("Kara moved to Los Angeles, CA!", Images.kara, "KaraProfile")}
      {notification("Marie moved to Newport Beach, CA!", Images.marie, "MarieProfile")}
      {notification("Eden created a  connection in Newport Beach, CA!", Images.eden, "EdenProfile")}
      {notification("Wilder joined ven!", Images.wilder, "WilderProfile")}
      {notification("Christian joined ven!", Images.christian, "ChristianProfile")}
  
      </ScrollView>
      <ButtonBar navigation = {navigation} which = {"home"}/>
    </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center', 
    justifyContent: 'space-between'
  },
  icon: {
    fontSize: 25,
    tintColor: '#939393'
  }, 
  addButton: {
    marginTop: 100,
    alignItems: "center",
    alignSelf: 'flex-end', 
    padding: 10,
    height: 50,
    width: 150,
    marginRight: 47,
    backgroundColor: "#FFF0C1",
    borderRadius: 30,
  },
  profileImages:{
    width: 40, 
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 30,
    marginBottom: 65,
  },

  addText: {
    fontSize: 20,
    color: '#939393',
  },
  notification: {
    marginTop: 20,
    
    borderRadius: 30,
    padding: 20,
    height: 150,
    width: 336,
    borderWidth: 2,
    borderColor: "#FFF0C1",
    alignSelf: 'center',
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
    color: '#939393',
  },
  notificationText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 20,
    color: '#939393',
    marginLeft: 10,
    marginRight: 15,
    alignSelf: 'baseline'
  },
  titleText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 30,
    color: '#4A4A4A',
    marginBottom: 5,
    alignSelf: 'center',
  },
  
});