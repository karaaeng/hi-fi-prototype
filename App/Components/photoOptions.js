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

export default function PhotoOptions({route, navigation}) {
  const [text, setText] = useState("");

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  let { which } = route.params;
  console.log(which);

  function imageToSelect(goBackTo){
    if (goBackTo === 'profile') {
   return (
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Image style = {styles.photos} source={Images.cat}/>
        </TouchableOpacity>
   );
    } else {
      return (
      <TouchableOpacity onPress={() => navigation.navigate('SelectedPhoto')}>
          <Image style = {styles.photos} source={Images.cat}/>
      </TouchableOpacity>
      );
    }
  }

  //profile information
  const [userPhoto, setuserPhoto] = useState("");

    return(
      <View style={styles.container}>
          <View>
        <Text style = {styles.prompt}>choose profile picture</Text>
        </View>
        <View>
            <Image style = {styles.image} source={Images.choose_photo_icon}/>
        </View>
        <View>
            <Image style = {styles.lib} source={Images.library}/>
        </View>
        <View style = {styles.grid}>
        {imageToSelect(which)}
        <Image style = {styles.photos} source={Images.barbara}/>
        <Image style = {styles.photos} source={Images.robert}/>
        <Image style = {styles.photos} source={Images.liz}/>
        <Image style = {styles.photos} source={Images.mary}/>
        <Image style = {styles.photos} source={Images.linda}/>
        <Image style = {styles.photos} source={Images.john}/>
        <Image style = {styles.photos} source={Images.james}/>
        <Image style = {styles.photos} source={Images.harold}/>
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
        marginTop: 50,
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
      image: {
        height: 247,
        width: 247,
        alignSelf: "center",
        marginTop: 10,
      },
      lib:{
        height: 57,
        width: 393,
        alignSelf: "center",
        marginTop: 10,
      },
      grid: {
        flexWrap: "wrap",
        flex: 3,  
      },
      photos: {
        height: 112,
        width: 112,
        borderRadius: 14,
        marginLeft: 23,
        marginTop: 20,
      },
});
