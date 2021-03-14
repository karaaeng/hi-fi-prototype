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

export default function LoginScreen({navigation}) {

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
        <Image style = {styles.logo} source={Images.logo}/>
        </View>
        <View>
        <Text style = {styles.tagline}>meet new friends,</Text>
        <Text style = {styles.tagline}>through the old</Text>
        </View>
      <View>
      <TouchableOpacity
        style = {styles.loginButton}
        onPress={() => navigation.navigate('LoginInputScreen')}
      >
        <Text style = {styles.buttonText}>login</Text>
      </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity
        style = {styles.signUpButton}
        onPress={() => {
          navigation.navigate('Name')}
        }>
        <Text style = {styles.buttonText}>sign up</Text>
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
    loginButton: {
      marginTop: 100,
      alignItems: "center",
      backgroundColor: "#FFF0C1",
      borderRadius: 30,
      padding: 20,
      height: 73,
      width: 336,
      alignSelf: 'center',
    },
    signUpButton: {
      marginTop: 20,
      alignItems: "center",
      backgroundColor: '#FED254', 
      borderRadius: 30,
      padding: 20,
      height: 73,
      width: 336,
      alignSelf: 'center',
    },
    buttonText: {
      fontFamily: 'Comfortaa_700Bold',
      fontSize: 30,
      color: '#4A4A4A',
    },
    header: {
      marginTop: 60,
      height: 58,
      width: 89,
      alignSelf: 'center',
    },
});
