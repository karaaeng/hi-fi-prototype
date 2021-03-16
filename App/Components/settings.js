import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, TouchableOpacity } from 'react-native';
import NavigationBar from './NavigationBar';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    useFonts,
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  } from '@expo-google-fonts/comfortaa'; 

export default function SettingsPage({navigation}) {

    let [fontsLoaded] = useFonts({
        Comfortaa_300Light,
        Comfortaa_400Regular,
        Comfortaa_500Medium,
        Comfortaa_600SemiBold,
        Comfortaa_700Bold,
      });

  function editProfile() {
    return (
       <TouchableOpacity style = {styles.options} onPress = { () => {
        navigation.navigate("EditProfile");
      }}>
      <Icon name="pencil" style={styles.icon} />
        <Text style = {styles.informationText}> edit profile </Text>
       
        <Icon name="arrow-right" style={styles.arrowicon1}/>
        </TouchableOpacity>
    );
  }

  function privacy() {
    return (
     <TouchableOpacity style = {styles.options} onPress = { () => {
        navigation.navigate("Privacy");
      }}>
      <Icon name="chain" style={styles.icon}/>
        <Text style = {styles.informationText}> privacy settings </Text>
        
        <Icon name="arrow-right" style={styles.arrowicon2}/>
      </TouchableOpacity>
    );
  }

  function about() {
    return (
      <TouchableOpacity style = {styles.options} onPress = { () => {
        navigation.navigate("About");
      }}>
       <Icon name="info-circle" style={styles.icon} />
        <Text style = {styles.informationText}> about </Text>
       <Icon name="arrow-right" style={styles.arrowicon3}/>
       
      </TouchableOpacity>
    );
  }

  function logout() {
    return (
      <TouchableOpacity style = {styles.logoutButton} onPress = { () => {
        navigation.navigate("Login");
      }}>
        <Text style = {styles.buttonText}> logout </Text>
       
      </TouchableOpacity>
    );
  }
    
    return (      
    <View style = {styles.container}>
    <View style = {styles.editprofilestuff}>
      <View style = {styles.optionsTogether}>
        {editProfile()}
        {privacy()}
        {about()}
      </View>

      <View style = {styles.logout}> 
        {logout()}
      </View>
      </View>
    </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center', 
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  icon: {
    fontSize: 25,
    color: '#4A4A4A',
    marginRight: 5,
    marginLeft: 5,
  }, 
  arrowicon1: {
    fontSize: 25,
    color: '#4A4A4A',
    marginLeft: 180,
  }, 
  arrowicon2: {
    fontSize: 25,
    color: '#4A4A4A',
    marginLeft: 125,
  }, 
  arrowicon3: {
    fontSize: 25,
    color: '#4A4A4A',
    marginLeft: 230,
  }, 
  editprofilestuff: {
    flex: 1
  },
  logoutButton: {
    marginTop: 290,
    alignItems: "center",
    backgroundColor: "#FFF0C1",
    borderRadius: 30,
    padding: 20,
    height: 73,
    width: 336,
    alignSelf: 'center',
  },
  buttonText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 30,
    color: '#4A4A4A',
  },
  logout: {
    flex: 2
  },

  options: {
    margin: 20, 
    flexDirection: 'row',
  },
  optionsTogether: {
    justifyContent: 'space-evenly', 
    marginLeft: 15,
    flex: 1,
    marginTop: 50,
  },
  butttonBar: {
    alignSelf: 'flex-end'
  },
  category: {
    color: '#FED254', 
    fontSize: 15
  },
  informationText: {
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 20,
  },
  
});