import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, TouchableOpacity } from 'react-native';
import EditProfile from './EditProfile';
import NavigationBar from './NavigationBar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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

export default function Profile({navigation, route}) {
  const [currUserName, setUserName] = useState(null);
  const [currUserPronouns, setUserPronouns] = useState(null);
  const [currUserStatus, setUserStatus] = useState(null);
  const [currUserImage, setUserImage] = useState(null);
  const [currUserLocation, setUserLocation] = useState(null);
  const [currUserInterests, setUserInterests] = useState(null);
  const [currShowPronouns, setShowPronouns] = useState(null);
  const [currShowInterests, setShowInterests] = useState(null);

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  let Message = null;
  let ButtonMessage = null;

  useEffect (() => {
  if (route.params.user !== undefined) {
    setUserName(route.params.user.name);
    setUserImage(route.params.user.image);
    setUserPronouns(route.params.user.pronouns);
    setUserStatus(route.params.user.status);
    setUserLocation(route.params.user.location);
    setUserInterests(route.params.user.interests);
    setShowInterests(route.params.user.showInterests);
    setShowPronouns(route.params.user.showPronouns);
  } else {
    //get user info from firebase
    var currUser = firestore.collection("users").doc("123-456-7890");
    
      currUser.get().then((user) => {
          if (user.exists) {
              console.log("Document data:", user.data());
              const data = (user.data());
              setUserName(data.name);
              setUserImage(data.image);
              setUserPronouns(data.pronouns);
              setUserStatus(data.status);
              setUserLocation(data.location);
              setUserInterests(data.interests);
              setShowInterests(data.showInterests);
              setShowPronouns(data.showPronouns);
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
    }
  });

  if (route.params.message !== undefined) {
    Message = route.params.message;
    console.log(Message);
  }

  if (route.params.buttonMessage !== undefined) {
    ButtonMessage = route.params.buttonMessage;
    console.log("Button:" + ButtonMessage);
  }

  function statusIcon(status) {

    if (status ==="asking"){
      return( <View style = {styles.statusContainer}>
        <View style = {styles.statusAsking}>
          <Text style = {styles.statusText}> {status} </Text>
        </View>
        </View>
        );
    } else if (status ==="open"){
      return( <View style = {styles.statusContainer}>
        <View style = {styles.statusOpen}>
          <Text style = {styles.statusText}> {status} </Text>
        </View>
        </View>
        );
      } else if (status ==="on hold"){
        return( <View style = {styles.statusContainer}>
          <View style = {styles.statusHold}>
            <Text style = {styles.statusText}> {status} </Text>
          </View>
          </View>
          );
    } else {
      return( <View style = {styles.statusContainer}>
        <View style = {styles.statusOpen}>
          <Text style = {styles.statusText}> {status} </Text>
        </View>
        </View>
        );
    }
  }

  function location(location){
     return (
      <View style = {styles.informationText}> 
      <Text style={ styles.category}>   location: </Text> 
      <Text style={ styles.theirInfo}>{location} </Text> 
      </View>
     );
  }

  function pronouns(pronouns) {
    if (currShowPronouns === true) {
    return (
      <View style = {styles.informationText}> 
      <Text style={ styles.category}>pronouns: </Text> 
      <Text style={ styles.theirInfo}>{pronouns} </Text> 
      </View>
     );
    } else {
      return null;
    }
  }

  function interests(interests){
    if (currShowInterests === true) {
      return (
      <View style = {styles.informationText}> 
      <Text style={ styles.category}>  interests: </Text> 
      <Text style={ styles.theirInfo}>{interests} </Text> 
      </View>
     );  
    } else {
      return null;
    }
    }

    function acceptOrRejct(){
      if (String(Message).includes("Connection")) {
        return (
          <View>
            <TouchableOpacity style = {styles.buttonAccept} onPress = { () => {
              navigation.navigate("CatEdenChat"); 
            }}>
              <Text style = {styles.buttonText}> accept </Text>
             
            </TouchableOpacity>
      
            <TouchableOpacity style = {styles.buttonIgnore} onPress = { () => {
              navigation.navigate("Home"); 
            }}>
              <Text style = {styles.buttonText}> ignore </Text>
             
            </TouchableOpacity>
            </View>
          );
      } else if (String(Message).includes("Connecting")) {
          if (ButtonMessage === "search your circle") {
            return (
          <TouchableOpacity style = {styles.button} onPress = { () => {
            navigation.navigate("ConnectingIsaWithFriends");
          }}>
            <Text style = {styles.buttonText}>{ButtonMessage}</Text>
           
          </TouchableOpacity>
        );
          } else if (ButtonMessage === "create connection") {
            return (
              <TouchableOpacity style = {styles.button} onPress = { () => {
                navigation.navigate("KaraIsaChat")
              }}>
                <Text style = {styles.buttonText}>{ButtonMessage}</Text>
               
              </TouchableOpacity>
            );
          }
    } else {
      return (
        <View></View>
      );
    }
  }
    
    return (     
    <View style = {styles.container}>
      <Text style = {styles.titleText}>{Message}</Text>
        <View style = {styles.profile}>
          <View style = {styles.profileCard}>     
          <Image style={styles.profilePicture} source={currUserImage}/>
          <View style = {styles.profileText}>
          <View style = {styles.profileNameAndStatus}>
            <Text style={ styles.name }>{currUserName}</Text>
            {statusIcon(currUserStatus)}
          </View>
          <View style = {styles.information}>
           {location(currUserLocation)}         
           {pronouns(currUserPronouns)}
           {interests(currUserInterests)}
            </View>
          </View>
          {acceptOrRejct()}
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
  name: { 
    fontFamily: "Comfortaa_700Bold",
    fontSize: Dimensions.get('window').width * .11, 
    alignSelf: 'center',
    marginTop: Dimensions.get('window').width * .015,
    color: "#4A4A4A",
  }, 
  category: {
    marginTop: Dimensions.get('window').width * .033,
    color: '#FED254', 
    fontSize: Dimensions.get('window').width * .05,
    fontFamily: "Comfortaa_700Bold",
  },
  theirInfo: {
    marginTop: Dimensions.get('window').width * .033,
    marginLeft: Dimensions.get('window').width * .015,
    fontSize: Dimensions.get('window').width * .047,
    color: '#4A4A4A',
    fontFamily: "Comfortaa_300Light",
  },
  informationText:{
    flexDirection: 'row'
  },
  information: {
    alignSelf: 'center',
    alignContent: 'flex-start'
  },
  profile:{
    flex: 1, 
  }, 
  profileCard: {
    marginTop: Dimensions.get('window').width * .03,
  },
  profileNameAndStatus:{
    flexDirection: 'column',
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  statusContainer: {
    flexDirection: 'column'
  },
  statusAsking: {
    height: Dimensions.get('window').height * .05,
    width: Dimensions.get('window').width * .3,
    borderRadius: Dimensions.get('window').height * .05 * .5,
    alignContent: 'center',
    backgroundColor: "#89FF95",
    justifyContent: "center",
    marginTop: Dimensions.get('window').height * .02,
    marginBottom: Dimensions.get('window').height * .02,
  },
  statusOpen: {
    height: Dimensions.get('window').height * .05,
    width: Dimensions.get('window').width * .3,
    borderRadius: Dimensions.get('window').height * .05 * .5,
    alignContent: 'center',
    backgroundColor: "#FED254",
    justifyContent: "center",
    marginTop: Dimensions.get('window').height * .02,
    marginBottom: Dimensions.get('window').height * .02,
  },
  statusHold: {
    height: Dimensions.get('window').height * .05,
    width: Dimensions.get('window').width * .3,
    borderRadius: Dimensions.get('window').height * .05 * .5,
    alignContent: 'center',
    resizeMode: 'contain', 
    alignContent: 'center',
    backgroundColor: "#FD9B9B",
    justifyContent: "center",
    marginTop: Dimensions.get('window').height * .02,
    marginBottom: Dimensions.get('window').height * .02,
  },
  statusText: {
    fontSize: Dimensions.get('window').height * .022, 
    alignSelf: 'center',
    alignContent: 'center',
    fontFamily: "Comfortaa_400Regular",
  },
  profilePicture: {
    //flex: 3, 
    width: Dimensions.get('window').width * .5,
    height: Dimensions.get('window').width * .5,
    alignSelf: 'center', 
    borderRadius: Dimensions.get('window').height * .5 * 0.75,
  }, 
  profileText: {
    //flex: 1, 
    padding: Dimensions.get('window').height * .01,
    alignContent: 'center',
    alignItems: 'center'
  },
  buttonAccept: {
    marginTop: Dimensions.get('window').height * .018,
    alignItems: "center",
    alignContent: 'center',
    backgroundColor: "#FED254",
    borderRadius: Dimensions.get('window').width * .1,
    padding: Dimensions.get('window').width * .01,
    height: Dimensions.get('window').height * .06,
    width: Dimensions.get('window').width * .35,
    alignSelf: 'center',
    justifyContent: "center",
  },
  buttonIgnore: {
    marginTop: Dimensions.get('window').width * .01,
    alignItems: "center",
    alignContent: 'center',
    padding: Dimensions.get('window').width * .01,
    height: Dimensions.get('window').height * .08,
    width: Dimensions.get('window').width * .4,
    alignSelf: 'center',
    justifyContent: "center",
  },
  titleText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: Dimensions.get('window').width * .085,
    color: '#FED254',
    textAlign: 'center',
    textAlignVertical: "center",
    marginTop: Dimensions.get('window').width * .01,
  },
  buttonText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: Dimensions.get('window').width * .05,
    color: '#4A4A4A',
    alignSelf: 'center',
  },
  button: {
    marginTop: Dimensions.get('window').height * .03,
    alignItems: "center",
    backgroundColor: "#FED254",
    borderRadius: Dimensions.get('window').height * .55 * .5,
    padding: Dimensions.get('window').width * .045,
    height: Dimensions.get('window').width * .5,
    width: Dimensions.get('window').width * .6,
    height: Dimensions.get('window').height * .065,
    alignSelf: 'center',
  },
  
});
