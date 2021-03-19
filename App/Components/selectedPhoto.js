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
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Images } from '../Themes';

export default function PhotoSelect({navigation, route}) {

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

  let userName = route.params.Name;
  let userNumber = route.params.Number;
  let userLocation = route.params.Location;
  let userPhoto = route.params.Photo;

    return(
      <View style={styles.container}>
        <View>
        <Image style = {styles.progressbar} source={Images.progress_photo}/>
        </View>
        <View style = {styles.row}>
            <TouchableOpacity onPress={() => navigation.navigate('PhotoOptions')}>
                <Icon name="pencil" style={styles.icon}/>
                <Image style = {styles.image} source={userPhoto}/>
            </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Pronouns', {Name: userName, Number: userNumber, Location: userLocation, Photo: userPhoto})}>
          <View style = {styles.forward}>
                 <ForwardButton/>
              </View>
        </TouchableOpacity>
        </View>
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
        marginTop: 40,
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
        marginLeft: 320,
        marginTop: 310,
      },
      progressbar: {
        height: 17,
        width: 325,
        alignSelf: "center",
        marginTop: 70,
      },
      image: {
        height: 220,
        width: 220,
        alignSelf: "center",
        borderRadius: 109.5,
        marginTop: -30,
      },
      row: {
        flex: 1,
        flexDirection: "column",
      },
      icon: {
        fontSize: 35,
        color: '#4A4A4A',
        alignSelf: "flex-end",
        marginTop: 100,
        marginRight: 90,
      },
});
