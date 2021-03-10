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

export default function Permission({navigation}) {
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
            <Image style = {styles.progressbar} source={Images.progress_addfriends}/>
        </View>
        <View>
            <Text style = {styles.prompt}>add your friends</Text>
        </View>
        <View style={styles.notification}>
            <Text style = {styles.notification_prompt}>allow ven to access your contacts?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AddFriends')}>
                <View style={styles.button}>
                    <Text style = {styles.yes}>yes!</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
            setuserFriends("")
            navigation.navigate('Ready')
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
          height: 268,
          width: 354,
          borderRadius: 40,
          marginTop: 40,
      },
      notification_prompt: {
        marginTop: 30,
        marginLeft: 5,
        marginRight: 5,
        alignSelf: 'center',
        fontFamily: 'Comfortaa_400Regular',
        fontSize: 28,
        color: '#4A4A4A',
      },
      button: {
        backgroundColor: '#FFFFFF',
        alignSelf: "center",
        justifyContent:"center",
        height: 72,
        width: 320,
        borderRadius: 27,
        marginTop: 20,
      },
      yes: {
        marginLeft: 5,
        marginRight: 5,
        alignSelf: 'center',
        fontFamily: 'Comfortaa_400Regular',
        fontSize: 28,
        color: '#4A4A4A',
      },
      skipbutton: {
        color: '#FED254',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: 28,
        alignSelf: "center",
        marginTop: 25,
      },
});
