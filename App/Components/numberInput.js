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

export default function NumberInput({navigation, route}) {
  const [text, setText] = useState("");

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  //profile information
  const [userNumber, setuserNumber] = useState("123-456-7890");

  console.log(route.params.Name);
  let userName = route.params.Name;

  return(
    <View style={styles.container}>
      <View>
      <Image style = {styles.progressbar} source={Images.progress_number}/>
      </View>
      <View>
      <Text style = {styles.prompt}>what's your number?</Text>
      </View>
      <View style={styles.inputBar}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <TextInput
      editable = {false}
      numberOfLines = {10}
      value={userNumber}
        style={styles.textInput}
        />
        </TouchableWithoutFeedback>
        <Icon name="pencil" style={styles.icon} 
        onPress={() => {
          console.log({userNumber})
        }}
        />
        </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Confirm', {Name: userName, Number: userNumber})}>
        <View style = {styles.forward}>
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
      forward: {
        height: 80,
        width: 80,
        marginLeft: 320,
        marginTop: 340,
      },
      progressbar: {
        height: 17,
        width: 325,
        alignSelf: "center",
        marginTop: 70,
      },
});
