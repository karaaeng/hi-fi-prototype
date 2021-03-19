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
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import { Images } from '../Themes';

export default function PhotoOptions({route, navigation}) {

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

    //profile information
    const [userName, setuserName] = useState(route.params.Name);
    const [userLocation, setuserLocation] = useState(route.params.Location);
    const [userNumber, setuserNumber] = useState(route.params.Number);


  let { which } = route.params;
  console.log(which);

  function imageToSelect(goBackTo, source){
    if (goBackTo === 'profile') {
   return (
        <TouchableOpacity onPress={() => 
        navigation.push('EditProfile', {Name: userName, Number: userNumber, Location: userLocation, Photo: source, Pronouns: route.params.Pronouns, Interests: route.params.Interests, Status: route.params.Status, ShowInterests: route.params.ShowInterests, ShowPronouns: route.params.ShowPronouns})
        }>
            <Image style = {styles.photos} source={source}/>
        </TouchableOpacity>
   );
    } else {
      return (
      <TouchableOpacity onPress={() => navigation.navigate('SelectedPhoto', {Name: userName, Number: userNumber, Location: userLocation, Photo: source})}>
          <Image style = {styles.photos} source={source}/>
      </TouchableOpacity>
      );
    }
  }

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
        <ScrollView contentContainerStyle = {styles.grid}>
        {imageToSelect(which, Images.cat)}
        {imageToSelect(which, Images.james)}
        {imageToSelect(which, Images.vincent)}
        {imageToSelect(which, Images.victoria)}
        {imageToSelect(which, Images.tzu)}
        {imageToSelect(which, Images.misbah)}
        {imageToSelect(which, Images.kristina)}
        {imageToSelect(which, Images.kally)}
        {imageToSelect(which, Images.gloria)}
        {imageToSelect(which, Images.clara)}
        {imageToSelect(which, Images.abdallah)}

        </ScrollView>
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
        height: 200,
        width: 200,
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
        flexDirection: "row",
      },
      photos: {
        height: 112,
        width: 112,
        borderRadius: 14,
        marginLeft: 23,
        marginTop: 20,
      },
});
