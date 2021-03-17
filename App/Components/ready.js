import ForwardButton from './ForwardButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export default function Ready({navigation}) {
  const [text, setText] = useState("");

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });


  const setStorage = async (newValue) => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(newValue) )
    } catch (e) {
      console.error(e)
    }
  }



//after array of user information is passed through the setup process, store info with async


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
      marginLeft: 320,
      marginTop: 210,
    },
    progressbar: {
      height: 17,
      width: 325,
      alignSelf: "center",
      marginTop: 70,
    },
});
