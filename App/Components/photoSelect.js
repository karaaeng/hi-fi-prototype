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
  const [text, setText] = useState("");

  let userPhoto = Images.cat;

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

  let userName = route.params.Name;
  let userNumber = route.params.Number;
  let userLocation = route.params.Location;

    return(
      <View style={styles.container}>
        <View>
        <Image style = {styles.progressbar} source={Images.progress_photo}/>
        </View>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('PhotoOptions', {Name: userName, Number: userNumber, Location: userLocation, Photo: userPhoto, which: 'signup'})}>
                <Image style = {styles.image} source={Images.photo_select}/>
            </TouchableOpacity>
        </View>
        <View>
        <Text style = {styles.prompt}>add profile picture</Text>
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
        marginTop: Dimensions.get('window').height * 0.03,
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
      image: {
        height: Dimensions.get('window').height * 0.28,
        width: Dimensions.get('window').width * 0.55,
        alignSelf: "center",
        marginTop: Dimensions.get('window').height * 0.05,
      },
});
