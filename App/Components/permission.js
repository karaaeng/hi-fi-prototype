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
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Dimensions} from 'react-native';
import { Images } from '../Themes';

export default function Permission({navigation, route}) {
  const [userFriends, setuserFriends] = useState("");

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

    return(
      <View style={styles.container}>
        <View>
            <Image style = {styles.progressbar} source={Images.progress_addfriends}/>
        </View>
        <View>
            <Text style = {styles.prompt}>add your friends</Text>
        </View>
        <View style={styles.notification}>
            <Text style = {styles.notification_prompt}>allow ven to access your contacts?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("AddFriends", {Name: userName, Number: userNumber, Location: userLocation, Photo: userPhoto, Pronouns: userPronouns, Interests: userInterests, Status: userStatus, which: 'signup'})}>
                <View style={styles.button}>
                    <Text style = {styles.yes}>yes!</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
            setuserFriends("")
            navigation.navigate("Ready", {Name: userName, Number: userNumber, Location: userLocation, Photo: userPhoto, Pronouns: userPronouns, Interests: userInterests, Status: userStatus})
          }}>
                <Text style={styles.skipbutton}>skip</Text>
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
        marginTop: Dimensions.get('window').height * 0.13,
        alignSelf: 'center',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: Dimensions.get('window').height * 0.03,
        color: '#4A4A4A',
      },
      progressbar: {
        height: Dimensions.get('window').height * 0.03,
        width: Dimensions.get('window').width * 0.7,
        alignSelf: "center",
        marginTop: Dimensions.get('window').height * 0.065,
      },
      notification: {
          backgroundColor: '#FFF0C1',
          alignSelf: "center",
          height: Dimensions.get('window').height * 0.28,
          width: Dimensions.get('window').width * 0.8,
          borderRadius: Dimensions.get('window').height * 0.28 * .15,
          marginTop: Dimensions.get('window').height * 0.03,
      },
      notification_prompt: {
        marginTop: 30,
        marginLeft: Dimensions.get('window').height * 0.01,
        marginRight: Dimensions.get('window').height * 0.01,
        alignSelf: 'center',
        fontFamily: 'Comfortaa_400Regular',
        fontSize: Dimensions.get('window').height * 0.03,
        color: '#4A4A4A',
      },
      button: {
        backgroundColor: '#FFFFFF',
        alignSelf: "center",
        justifyContent:"center",
        height: Dimensions.get('window').height * 0.07,
        width: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').height * 0.07 * .4,
        marginTop: 20,
      },
      yes: {
        alignSelf: 'center',
        fontFamily: 'Comfortaa_400Regular',
        fontSize: Dimensions.get('window').height * 0.03,
        color: '#4A4A4A',
      },
      skipbutton: {
        color: '#FED254',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: Dimensions.get('window').height * 0.03,
        alignSelf: "center",
        marginTop: Dimensions.get('window').height * 0.03,
      },
});
