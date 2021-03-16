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
    
    return (      
    <View style = {styles.container}>
        <View style = {styles.textcontainer}>
            <Text style = {styles.text}>
                It’s hard to make new friends in new places, and meeting people with the potential for a genuine connection is even harder.
            </Text>
        </View>
        <View style = {styles.textcontainer}>
            <Text style = {styles.text}>
                Overlap your social circles with ven. Ask your friends to connect you with their friends, and connect your friends with each other.
            </Text>
        </View>
        <View style = {styles.textcontainer}>
            <Text style = {styles.text}>
                Nothing makes creating friendships easier than a trusted friend recommendation!
            </Text>
        </View>
        <View style = {styles.editprofilestuff}>
            <TouchableOpacity style = {styles.options} onPress = { () => {
                console.log("terms of use clicked");
            }}>
                <Text style = {styles.informationText}> Terms of Use </Text>
                <Icon name="arrow-right" style={styles.arrowicon1}/>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.options} onPress = { () => {
                console.log("data policy clicked");
            }}>
                <Text style = {styles.informationText}> Data Policy </Text>
                <Icon name="arrow-right" style={styles.arrowicon2}/>
            </TouchableOpacity>
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
    marginLeft: 198,
  }, 
  editprofilestuff: {
    flex: 1,
    marginTop: 100,
  },
  options: {
    marginTop: 20, 
    marginBottom: 20, 
    marginLeft: 20, 
    marginLeft: 30, 
    flexDirection: 'row',
  },
  informationText: {
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 20,
  },
  text: {
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 24,
    textAlign: "center",
    color: '#4A4A4A',
  },
  textcontainer: {
    alignSelf: "center",
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
  },
  
});