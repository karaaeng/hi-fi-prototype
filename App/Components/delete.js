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
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Images } from '../Themes';

export default function Delete({navigation}) {
  const [userFriends, setuserFriends] = useState("");

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

    return(
      <View style={styles.container}>
        <View>
            <Text style = {styles.prompt}>delete your profile</Text>
        </View>
        <View style={styles.notification}>
            <Text style = {styles.notification_prompt}>are you sure you want to delete
                your ven profile?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                <View style={styles.nobutton}>
                    <Text style = {styles.buttonText}>no! there are more connections to be made!</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
            console.log("need to clear profile data from storage")
            navigation.navigate('Login')
          }}>
                <Text style={styles.yesbutton}>yes. i'm done</Text>
                <Text style={styles.yesbutton}>connecting for now.</Text>
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
      progressbar: {
        height: 17,
        width: 325,
        alignSelf: "center",
        marginTop: 70,
      },
      notification: {
          backgroundColor: '#FFF0C1',
          alignSelf: "center",
          height: 300,
          width: 354,
          borderRadius: 40,
          marginTop: 40,
      },
      notification_prompt: {
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        alignSelf: 'center',
        fontFamily: 'Comfortaa_400Regular',
        fontSize: 26,
        color: '#4A4A4A',
      },
      nobutton: {
        backgroundColor: '#FED254',
        alignSelf: "center",
        justifyContent:"center",
        height: 72,
        width: 320,
        borderRadius: 27,
        marginTop: 20,
        marginBottom: 25,
      },
      buttonText: {
        marginLeft: 5,
        marginRight: 5,
        alignSelf: 'center',
        fontFamily: 'Comfortaa_400Regular',
        fontSize: 20,
        color: '#4A4A4A',
      },
      yesbutton: {
        color: '#4A4A4A',
        fontFamily: 'Comfortaa_400Regular',
        fontSize: 16,
        alignSelf: "center",
      },
});
