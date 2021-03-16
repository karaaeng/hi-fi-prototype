import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, TouchableOpacity, Switch} from 'react-native';
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

export default function Privacy({navigation}) {

    let [fontsLoaded] = useFonts({
        Comfortaa_300Light,
        Comfortaa_400Regular,
        Comfortaa_500Medium,
        Comfortaa_600SemiBold,
        Comfortaa_700Bold,
      });

    const [isEnabledMap, setIsEnabledMap] = useState(true);
    const [isEnabledProfile, setIsEnabledProfile] = useState(true);
    const [isEnabledPronouns, setIsEnabledPronouns] = useState(true);

    const toggleMapSwitch = () => 
        setIsEnabledMap(previousState => !previousState);

    const toggleProfileSwitch = () => 
        setIsEnabledProfile(previousState => !previousState);

    const togglePronounsSwitch = () => 
        setIsEnabledPronouns(previousState => !previousState);

  function mapLocation() {
    return (
        <View style = {styles.options}>
        <Text style = {styles.informationText}>Show location on map?          </Text>
        <Switch
      trackColor={{ false: "#E5E5E5", true: "#89FF95" }}
      thumbColor= "#FFFFFF"
      ios_backgroundColor="#E5E5E5"
      onValueChange={toggleMapSwitch}
      value={isEnabledMap}
      />
      </View>
    );
  }

  function showProfile() {
    return (
        <View style = {styles.options}>
            <View style = {styles.optionsProfile}>
                <Text style = {styles.informationText}>Show profile to new connections? </Text>
            </View>
            <Switch
            trackColor={{ false: "#E5E5E5", true: "#89FF95" }}
            thumbColor= "#FFFFFF"
            ios_backgroundColor="#E5E5E5"
            onValueChange={toggleProfileSwitch}
            value={isEnabledProfile}
            />
      </View>
    );
  }

  function showPronouns() {
    return (
        <View style = {styles.options}>
        <Text style = {styles.informationText}>Show pronouns?                      </Text>
        <Switch
        trackColor={{ false: "#E5E5E5", true: "#89FF95" }}
        thumbColor= "#FFFFFF"
        ios_backgroundColor="#E5E5E5"
        onValueChange={togglePronounsSwitch}
        value={isEnabledPronouns}
      />
      </View>
    );
  }

  function save() {
    return (
      <TouchableOpacity style = {styles.saveButton} onPress = { () => {
        navigation.navigate("Profile");
      }}>
        <Text style = {styles.buttonText}> save </Text>
       
      </TouchableOpacity>
    );
  }
    
    return (      
    <View style = {styles.container}>
    <View style = {styles.maplocationstuff}>
      <View style = {styles.optionsTogether}>
        {mapLocation()}
        {showProfile()}
        {showPronouns()}
      </View>

      <View style = {styles.save}> 
        {save()}
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
  maplocationstuff: {
    flex: 1
  },
  saveButton: {
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
  save: {
    flex: 2
  },
  options: {
    margin: 20, 
    flexDirection: 'row',
  },
  optionsProfile: {
    width: 300,
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