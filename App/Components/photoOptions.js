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
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, Dimensions} from 'react-native';
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
      prompt: {
        marginTop: Dimensions.get('window').height * 0.05,
        alignSelf: 'center',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: Dimensions.get('window').height * 0.03,
        color: '#4A4A4A',
      },
      image: {
        height: Dimensions.get('window').width * 0.4,
        width: Dimensions.get('window').width * 0.4,
        alignSelf: "center",
        marginTop: Dimensions.get('window').width * 0.02,
      },
      lib:{
        height: Dimensions.get('window').height * 0.07,
        width: Dimensions.get('window').width * 0.9,
        alignSelf: "center",
        marginTop: Dimensions.get('window').width * 0.02,
      },
      grid: {
        flexWrap: "wrap",
        flexDirection: "row",
      },
      photos: {
        height: Dimensions.get('window').width * 0.27,
        width: Dimensions.get('window').width * 0.27,
        borderRadius: Dimensions.get('window').width * 0.26 * .2,
        marginLeft: Dimensions.get('window').width * 0.048,
        marginTop: Dimensions.get('window').width * 0.048,
      },
});
