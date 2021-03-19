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
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Keyboard, Dimensions} from 'react-native';
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
      prompt: {
        marginTop: Dimensions.get('window').height * 0.15,
        alignSelf: 'center',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: Dimensions.get('window').height * 0.03,
        color: '#4A4A4A',
      },
      icon: {
        fontSize: Dimensions.get('window').height * 0.035,
        color: '#4A4A4A',
      },
      forward: {
        height: Dimensions.get('window').height * 0.31,
        width: Dimensions.get('window').height * 0.31,
        marginLeft: Dimensions.get('window').height * 0.31,
        marginTop: Dimensions.get('window').height * 0.15,
      },
      progressbar: {
        height: Dimensions.get('window').height * 0.03,
        width: Dimensions.get('window').width * 0.7,
        alignSelf: "center",
        marginTop: Dimensions.get('window').height * 0.065,
      },
      asking: {
        borderColor: "#89FF95",
        borderWidth: 3,
        alignSelf: "center",
        justifyContent:"center",
        height: Dimensions.get('window').height * 0.102,
        width: Dimensions.get('window').width * 0.75,
        borderRadius: Dimensions.get('window').height * 0.102 * .35,
        marginTop: Dimensions.get('window').height * 0.04,
      },
      asking_chosen: {
        backgroundColor: "#89FF95",
        borderColor: "#89FF95",
        borderWidth: 3,
        alignSelf: "center",
        justifyContent:"center",
        height: Dimensions.get('window').height * 0.102,
        width: Dimensions.get('window').width * 0.75,
        borderRadius: Dimensions.get('window').height * 0.102 * .35,
        marginTop: Dimensions.get('window').height * 0.04,
      },
      open: {
        borderColor: "#FED254",
        borderWidth: 3,
        alignSelf: "center",
        justifyContent:"center",
        height: Dimensions.get('window').height * 0.102,
        width: Dimensions.get('window').width * 0.75,
        borderRadius: Dimensions.get('window').height * 0.102 * .35,
        marginTop: Dimensions.get('window').height * 0.04,
      },
      open_chosen: {
        backgroundColor: "#FED254",
        borderColor: "#FED254",
        borderWidth: 3,
        alignSelf: "center",
        justifyContent:"center",
        height: Dimensions.get('window').height * 0.102,
        width: Dimensions.get('window').width * 0.75,
        borderRadius: Dimensions.get('window').height * 0.102 * .35,
        marginTop: Dimensions.get('window').height * 0.04,
      },
      button_text: {
        alignSelf: 'center',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: Dimensions.get('window').height * 0.03,
        color: '#4A4A4A',
      },
      button_text_small: {
        alignSelf: 'center',
        fontFamily: 'Comfortaa_300Light',
        fontSize: Dimensions.get('window').height * 0.015,
        color: '#4A4A4A',
        marginTop: Dimensions.get('window').height * 0.002,
      },
});
