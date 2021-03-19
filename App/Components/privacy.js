import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, TouchableOpacity, Switch} from 'react-native';
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

export default function Privacy({navigation, route}) {

    let [fontsLoaded] = useFonts({
        Comfortaa_300Light,
        Comfortaa_400Regular,
        Comfortaa_500Medium,
        Comfortaa_600SemiBold,
        Comfortaa_700Bold,
      });

    const [isEnabledMap, setIsEnabledMap] = useState(true);
    const [isEnabledProfile, setIsEnabledProfile] = useState(true);
    const [isEnabledPronouns, setIsEnabledPronouns] = useState(route.params.ShowPronouns);
    const [isEnabledInterests, setIsEnabledInterests] = useState(route.params.ShowInterests);
    const [userInterests, setuserInterests] = useState(route.params.Interests);
    const [userPronouns, setuserPronouns] = useState(route.params.Pronouns);

    const toggleMapSwitch = () => 
        setIsEnabledMap(previousState => !previousState);

    const toggleProfileSwitch = () => 
        setIsEnabledProfile(previousState => !previousState);

    const togglePronounsSwitch = () => 
        setIsEnabledPronouns(previousState => !previousState);

    const toggleInterestsSwitch = () => 
        setIsEnabledInterests(previousState => !previousState);

  function update() {
  //handle if one is switched off
  if (isEnabledPronouns === false) {
    setuserPronouns("none");
  }
  if (isEnabledInterests === false) {
    setuserInterests("none");
  }
  
  //override user info in firebase with any changes
  firestore.collection("users").doc("123-456-7890").update({
    showPronouns: isEnabledPronouns , 
    showInterests: isEnabledInterests ,
    pronouns: userPronouns, 
    interests: userInterests, 
  })
  .then(() => {
    console.log("New user successfully updated!");
  })
  .catch((error) => {
    console.error("Error updating user: ", error);
  }); 
}

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

  function showInterests() {
    return (
        <View style = {styles.options}>
        <Text style = {styles.informationText}>Show interests?                        </Text>
        <Switch
        trackColor={{ false: "#E5E5E5", true: "#89FF95" }}
        thumbColor= "#FFFFFF"
        ios_backgroundColor="#E5E5E5"
        onValueChange={toggleInterestsSwitch}
        value={isEnabledInterests}
      />
      </View>
    );
  }

  function save() {
    return (
      <TouchableOpacity style = {styles.saveButton} onPress = { () => {
        update();
        navigation.push("Profile");
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
        {showInterests()}
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
  maplocationstuff: {
    flex: 1
  },
  saveButton: {
    marginTop: Dimensions.get('window').height * .32,
    alignItems: "center",
    backgroundColor: "#FFF0C1",
    borderRadius: Dimensions.get('window').height * .08 * .5,
    justifyContent: "center",
    height: Dimensions.get('window').height * .08,
    width: Dimensions.get('window').width * .8,
    alignSelf: 'center',
  },
  buttonText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: Dimensions.get('window').height * .033,
    color: '#4A4A4A',
  },
  save: {
    flex: 2
  },
  options: {
    margin: Dimensions.get('window').height * .025,
    flexDirection: 'row',
  },
  optionsProfile: {
    width: Dimensions.get('window').width * .69,
  },
  optionsTogether: {
    justifyContent: 'space-evenly', 
    marginLeft: Dimensions.get('window').height * .015,
    flex: 1,
    marginTop: Dimensions.get('window').height * .04,
  },
  informationText: {
    fontFamily: 'Comfortaa_400Regular',
    fontSize: Dimensions.get('window').width * .046,
  },
  
});