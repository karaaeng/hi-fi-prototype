import ForwardButton from './ForwardButton';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  useFonts,
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold,
} from '@expo-google-fonts/comfortaa';

import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import { Images } from '../Themes';

export default function StatusSelect({navigation, route}) {

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

  let userName = route.params.Name;
  let userNumber = route.params.Number;
  let userLocation = route.params.Location;
  let userPhoto = route.params.Photo;
  let userPronouns = route.params.Pronouns;
  let userInterests = route.params.Interests;

  //profile information
  const [userStatus, setuserStatus] = useState("");

  let askingButtonDisplayed = null;
  let openButtonDisplayed = null;

  //if user has not set status yet, render unchosen buttons
    askingButtonDisplayed =  
        <View style = {styles.asking}>
            <Text style = {styles.button_text}>asking</Text>
            <Text style = {styles.button_text_small}>(actively ask for connections)</Text>
        </View>;
    openButtonDisplayed =  
        <View style = {styles.open}>
            <Text style = {styles.button_text}>open</Text>
            <Text style = {styles.button_text_small}>(open to connections)</Text>
        </View>;

    //if user has set status to "asking", render chosen "asking" button  
     if (userStatus === "asking") {
        askingButtonDisplayed =  
            <View style = {styles.asking_chosen}>
                <Text style = {styles.button_text}>asking</Text>
                <Text style = {styles.button_text_small}>(actively ask for connections)</Text>
            </View>;
    }

     //if user has set status to "open", render chosen "open" button  
     if (userStatus === "open") {
        openButtonDisplayed =  
            <View style = {styles.open_chosen}>
                <Text style = {styles.button_text}>open</Text>
                <Text style = {styles.button_text_small}>(open to connections)</Text>
            </View>;
    }

    return(
      <View style={styles.container}>
        <View>
        <Image style = {styles.progressbar} source={Images.progress_status}/>
        </View>
        <View>
        <Text style = {styles.prompt}>choose your status</Text>
        </View>
        <View>
            <TouchableOpacity onPress={() => {setuserStatus("asking")}}>
                {askingButtonDisplayed}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setuserStatus("open")}}>
                {openButtonDisplayed}
            </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('AddFriendsPermission', {Name: userName, Number: userNumber, Location: userLocation, Photo: userPhoto, Pronouns: userPronouns, Interests: userInterests, Status: userStatus})}>
          <View style = {styles.forward}>
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
      header: {
        marginTop: 60,
        height: 58,
        width: 89,
        alignSelf: 'center',
      },
      prompt: {
        marginTop: 150,
        alignSelf: 'center',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: 28,
        color: '#4A4A4A',
      },
      inputBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#E5E5E5',
        height: 81,
        width: 345,
        borderRadius: 35,
        marginTop: 30,
      },
      textInput: {
        height: 81,
        width: 270,
      },
      icon: {
        fontSize: 35,
        color: '#4A4A4A',
      },
      forward: {
        height: 80,
        width: 80,
        marginLeft: 310,
        marginTop: 150,
      },
      progressbar: {
        height: 17,
        width: 325,
        alignSelf: "center",
        marginTop: 70,
      },
      asking: {
        borderColor: "#89FF95",
        borderWidth: 3,
        alignSelf: "center",
        justifyContent:"center",
        height: 100,
        width: 325,
        borderRadius: 35,
        marginTop: 40,
      },
      asking_chosen: {
        backgroundColor: "#89FF95",
        borderColor: "#89FF95",
        borderWidth: 3,
        alignSelf: "center",
        justifyContent:"center",
        height: 100,
        width: 325,
        borderRadius: 35,
        marginTop: 40,
      },
      open: {
        borderColor: "#FED254",
        borderWidth: 3,
        alignSelf: "center",
        justifyContent:"center",
        height: 100,
        width: 325,
        borderRadius: 35,
        marginTop: 40,
      },
      open_chosen: {
        backgroundColor: "#FED254",
        borderColor: "#FED254",
        borderWidth: 3,
        alignSelf: "center",
        justifyContent:"center",
        height: 100,
        width: 325,
        borderRadius: 35,
        marginTop: 40,
      },
      button_text: {
        alignSelf: 'center',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: 28,
        color: '#4A4A4A',
        marginTop: 12,
      },
      button_text_small: {
        alignSelf: 'center',
        fontFamily: 'Comfortaa_300Light',
        fontSize: 12,
        color: '#4A4A4A',
        marginTop: 5,
      },
});
