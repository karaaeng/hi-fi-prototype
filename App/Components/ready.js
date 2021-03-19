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
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Dimensions} from 'react-native';
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
      height: Dimensions.get('window').height * 0.21,
      width: Dimensions.get('window').height * 0.34,
      alignSelf: 'center',
      marginTop: Dimensions.get('window').height * 0.1,
      marginBottom: Dimensions.get('window').height * 0.05,
    },
    tagline: {
      alignSelf: 'center',
      fontFamily: 'Comfortaa_700Bold',
      fontSize: Dimensions.get('window').height * 0.03,
      color: '#4A4A4A',
    },
    forwardready: {
      height: Dimensions.get('window').height * 0.31,
      width: Dimensions.get('window').height * 0.31,
      marginLeft: Dimensions.get('window').height * 0.31,
      marginTop: Dimensions.get('window').height * 0.16,
    },
    progressbar: {
      height: Dimensions.get('window').height * 0.03,
      width: Dimensions.get('window').width * 0.7,
      alignSelf: "center",
      marginTop: Dimensions.get('window').height * 0.065,
    },
});
