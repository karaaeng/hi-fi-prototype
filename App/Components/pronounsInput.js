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

export default function PronounsInput({navigation, route}) {
  const [text, setText] = useState("");

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

  //profile information
  const [userPronouns, setuserPronouns] = useState("");

    return(
      <View style={styles.container}>
        <View>
        <Image style = {styles.progressbar} source={Images.progress_pronouns}/>
        </View>
        <View>
        <Text style = {styles.prompt}>what are your pronouns?</Text>
        </View>
        <View style={styles.inputBar}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TextInput
        placeholder= "e.g. she/ her, he/him, they/them"
        value={userPronouns}
        onChangeText={(userPronouns) => {
          setuserPronouns(userPronouns)
        }}
          style={styles.textInput}
          />
          </TouchableWithoutFeedback>
          <Icon name="pencil" style={styles.icon} 
          onPress={() => {
            console.log({userPronouns})
          }}
          />
          </View>
          <View>
          <TouchableOpacity onPress={() => {
            setuserPronouns("")
            navigation.navigate('Interests', {Name: userName, Number: userNumber, Location: userLocation, Photo: userPhoto, Pronouns: "none"})
          }}>
            <Text style={styles.skipbutton}>skip</Text>
          </TouchableOpacity>
          </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Interests', {Name: userName, Number: userNumber, Location: userLocation, Photo: userPhoto, Pronouns: userPronouns})}>
          <View style = {styles.forwardwithskip}>
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
      forwardwithskip: {
        height: 80,
        width: 80,
        marginLeft: 320,
        marginTop: 240,
      },
      progressbar: {
        height: 17,
        width: 325,
        alignSelf: "center",
        marginTop: 70,
      },
      skipbutton: {
        color: '#FED254',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: 28,
        alignSelf: "center",
        marginTop: 70,
      },
});
