import React, { useState , useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, TouchableOpacity } from 'react-native';
import NavigationBar from './NavigationBar';
import Icon from 'react-native-vector-icons/FontAwesome';
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

export default function SettingsPage({navigation}) {

    let [fontsLoaded] = useFonts({
        Comfortaa_300Light,
        Comfortaa_400Regular,
        Comfortaa_500Medium,
        Comfortaa_600SemiBold,
        Comfortaa_700Bold,
      });

  //profile information
  const [userPhoto, setuserPhoto] = useState("");
  const [userName, setuserName] = useState("");
  const [userInterests, setuserInterests] = useState("");
  const [userLocation, setuserLocation] = useState("");
  const [userNumber, setuserNumber] = useState("");
  const [userPronouns, setuserPronouns] = useState("");
  const [userStatus, setuserStatus] = useState("");
  const [currShowPronouns, setShowPronouns] = useState(null);
  const [currShowInterests, setShowInterests] = useState(null);

//get current user info from firebase
var currUser = firestore.collection("users").doc("123-456-7890");
      useEffect (() => {
        currUser.get().then((user) => {
            if (user.exists) {
                console.log("Document data:", user.data());
                const data = (user.data());
                setuserName(data.name);
                setuserNumber(data.number);
                setuserPhoto(data.image);
                setuserPronouns(data.pronouns);
                setuserStatus(data.status);
                setuserLocation(data.location);
                setuserInterests(data.interests);
                setShowInterests(data.showInterests);
                setShowPronouns(data.showPronouns);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        })

  function editProfile() {
    return (
       <TouchableOpacity style = {styles.options} onPress = { () => {
        navigation.navigate("EditProfile", {Name: userName, Number: userNumber, Location: userLocation, Photo: userPhoto, Pronouns: userPronouns, Interests: userInterests, Status: userStatus, ShowInterests: currShowInterests, ShowPronouns: currShowPronouns});
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
        navigation.navigate("Privacy", {ShowInterests: currShowInterests, ShowPronouns: currShowPronouns, Pronouns: userPronouns, Interests: userInterests});
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
//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center', 
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  icon: {
    fontSize: Dimensions.get('window').height * .03,
    color: '#4A4A4A',
    marginRight: Dimensions.get('window').height * .005,
    marginLeft: Dimensions.get('window').height * .005,
  }, 
  arrowicon1: {
    fontSize: Dimensions.get('window').height * .03,
    color: '#4A4A4A',
    marginLeft: Dimensions.get('window').width * .42,
  }, 
  arrowicon2: {
    fontSize: Dimensions.get('window').height * .03,
    color: '#4A4A4A',
    marginLeft: Dimensions.get('window').width * .28,
  }, 
  arrowicon3: {
    fontSize: Dimensions.get('window').height * .03,
    color: '#4A4A4A',
    marginLeft: Dimensions.get('window').width * .54,
  }, 
  editprofilestuff: {
    flex: 1
  },
  logoutButton: {
    marginTop: Dimensions.get('window').width * .6,
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
    fontSize: Dimensions.get('window').width * .07,
    color: '#4A4A4A',
  },
  logout: {
    flex: 2
  },
  options: {
    marginTop: Dimensions.get('window').width * .025, 
    marginBottom: Dimensions.get('window').width * .025, 
    flexDirection: 'row',
  },
  optionsTogether: {
    justifyContent: 'space-evenly', 
    alignSelf: 'center',
    flex: 1,
    marginTop: Dimensions.get('window').width * .1,
  },
  butttonBar: {
    alignSelf: 'flex-end'
  },
  informationText: {
    fontFamily: 'Comfortaa_400Regular',
    fontSize: Dimensions.get('window').width * .05,
  },
  
});