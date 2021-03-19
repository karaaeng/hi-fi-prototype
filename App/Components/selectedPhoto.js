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
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Dimensions} from 'react-native';
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
      forward: {
        height: Dimensions.get('window').height * 0.31,
        width: Dimensions.get('window').height * 0.31,
        marginLeft: Dimensions.get('window').height * 0.31,
        marginTop: Dimensions.get('window').height * 0.31,
      },
      progressbar: {
        height: Dimensions.get('window').height * 0.03,
        width: Dimensions.get('window').width * 0.7,
        alignSelf: "center",
        marginTop: Dimensions.get('window').height * 0.065,
      },
      image: {
        height: Dimensions.get('window').height * 0.25,
        width: Dimensions.get('window').height * 0.25,
        alignSelf: "center",
        borderRadius: Dimensions.get('window').height * 0.25 * .5,
        marginTop: - Dimensions.get('window').height * 0.04,
      },
      row: {
        flex: 1,
        flexDirection: "column",
      },
      icon: {
        fontSize: Dimensions.get('window').height * 0.035,
        color: '#4A4A4A',
        alignSelf: "flex-end",
        marginTop: Dimensions.get('window').height * 0.07,
        marginRight: Dimensions.get('window').height * 0.09,
      },
});
