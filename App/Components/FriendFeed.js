import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import NavigationBar from './NavigationBar';
import NotificationBar from './NotificationBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firestore from '../../firebase';
import firebase from 'firebase';

import {
    useFonts,
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  } from '@expo-google-fonts/comfortaa'; 


export default function FriendFeed({navigation}) {
  const [currUserName, setUserName] = useState(null);
  const [currUserImage, setUserImage] = useState(null);

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  useEffect(() => {
      //get user info from firebase
      var currUser = firestore.collection("users").doc("123-456-7890");
      
        currUser.get().then((user) => {
            if (user.exists) {
                console.log("Document data:", user.data());
                const data = (user.data());
                setUserName(data.name);
                setUserImage(data.image);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
  });

  function notification(text, image) {
    return (
      <View style = {styles.notification}>
      <View style = {styles.notificationInside}>
      <Image style = {styles.profileImages} source = {image}/>
        <Text style = {styles.notificationText}>{text} </Text>
        </View>
      </View>
    );
  }

  return (      
    <View style = {styles.container}>
    <Text style = {styles.titleText} > newsfeed </Text>
    <ScrollView>
    <TouchableOpacity onPress={() => { 
              navigation.navigate('UserProfile', { user: Profiles.eden, message: "", buttonMessage: ""})}
              }>
      {notification('Eden M. was connected with someone in Stanford, CA!', Images.eden,)}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { 
              navigation.navigate('UserProfile', { user: Profiles.cal, message: "", buttonMessage: ""})}
              }>
      {notification("Cal T. created a connection in Santa Cruz, CA!", Images.cal)}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { 
              navigation.navigate('UserProfile', { user: Profiles.kara, message: "", buttonMessage: ""})}
              }>
      {notification("Kara E. moved to Los Angeles, CA!", Images.kara)}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { 
              navigation.navigate('UserProfile', { user: Profiles.eden, message: "", buttonMessage: ""})}
              }>
      {notification("Eden M. created a  connection in Newport Beach, CA!", Images.eden)}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { 
              navigation.navigate('UserProfile', { user: Profiles.marie, message: "", buttonMessage: ""})}
              }>
      {notification("Marie B. moved to Newport Beach, CA!", Images.marie)}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { 
              navigation.navigate('UserProfile', { user: Profiles.cat})}
              }>
      {notification(currUserName + " created a connection in London!", currUserImage)}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { 
              navigation.navigate('UserProfile', { user: Profiles.wilder, message: "", buttonMessage: ""})}
              }>
      {notification("Wilder F. joined ven!", Images.wilder)}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { 
              navigation.navigate('UserProfile', { user: Profiles.christian, message: "", buttonMessage: ""})}
              }>
      {notification("Christian D. joined ven!", Images.christian)}
      </TouchableOpacity>
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
    width: Dimensions.get('window').width * .8,
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