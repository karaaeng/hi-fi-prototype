import ForwardButton from './ForwardButton';
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

import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Images, Profiles } from '../Themes';

export default function Ready({navigation, route}) {

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  console.log(route.params.Name);
  console.log(route.params.Number);
  console.log(route.params.Location);
  console.log(route.params.Photo);
  console.log(route.params.Pronouns);
  console.log(route.params.Interests);
  console.log(route.params.Status);

  let userName = route.params.Name;
  let userNumber = route.params.Number;
  let userLocation = route.params.Location;
  let userPhoto = route.params.Photo;
  let userPronouns = route.params.Pronouns;
  let userInterests = route.params.Interests;
  let userStatus = route.params.Status;
  let showUserInterests = true;
  let showUserPronouns = true;

  //account for interests and/or pronounds skipped
  if (userPronouns === "none") {
    showUserPronouns = false;
  } if (userInterests === "none") {
    showUserInterests = false;
  }

//after user information is passed through the setup process, store in collection "users" (firebase)
  firestore.collection("users").doc(userNumber).set({
    name: userName,
    location: userLocation, 
    pronouns: userPronouns, 
    interests: userInterests, 
    status: userStatus, 
    image: userPhoto, 
    number: userNumber,
    showInterests: showUserInterests,
    showPronouns: showUserPronouns
  })
  .then(() => {
    console.log("New user successfully added!");
  })
  .catch((error) => {
    console.error("Error adding user: ", error);
  });
      
    return(
      <View style={styles.container}>
        <View>
        <Image style = {styles.progressbar} source={Images.progress_ready}/>
        </View>
        <View>
        <Image style = {styles.logo} source={Images.logo}/>
        </View>
        <View>
        <Text style = {styles.tagline}>you're ready to</Text>
        <Text style = {styles.tagline}>overlap your</Text>
        <Text style = {styles.tagline}>social circles!</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => 
            navigation.navigate('Main')
            }>
          <View style = {styles.forwardready}>
                 <ForwardButton/>
              </View>
        </TouchableOpacity>
        </View>
    </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
    },
    logo: {
      height: 173,
      width: 274,
      alignSelf: 'center',
      marginTop: 120,
      marginBottom: 40,
    },
    tagline: {
      alignSelf: 'center',
      fontFamily: 'Comfortaa_700Bold',
      fontSize: 28,
      color: '#4A4A4A',
    },
    header: {
      marginTop: 60,
      height: 58,
      width: 89,
      alignSelf: 'center',
    },
    forwardready: {
      height: 80,
      width: 80,
      marginLeft: 310,
      marginTop: 185,
    },
    progressbar: {
      height: 17,
      width: 325,
      alignSelf: "center",
      marginTop: 70,
    },
});
