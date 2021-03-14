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

export default function LoginInputScreen({navigation}) {
  const [text, setText] = useState("");

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  //profile information
  const [userNumber, setuserNumber] = useState("");

  return(
    <View style={styles.container}>
      <View>
      <Text style = {styles.prompt}>what's your number?</Text>
      </View>
      <View style={styles.inputBar}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <TextInput
      placeholder= "e.g. 123-456-7890"
      value={userNumber}
      onChangeText={(userNumber) => {
        setuserNumber(userNumber)
      }}
        style={styles.textInput}
        />
        </TouchableWithoutFeedback>
        </View>
        <View>
        <Text style = {styles.prompt}>text confirmation code</Text>
        </View>
        <View style={styles.inputBar}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TextInput
          editable = {false}
          numberOfLines = {10}
          value='12345678'
          style={styles.textInput}
          />
          </TouchableWithoutFeedback>
          </View>
          <View>
              <Text style={styles.info}>check your texts for a code from ven!</Text>
          </View>
          <View>
          <TouchableOpacity>
            <Text style={styles.resendbutton}>resend code</Text>
          </TouchableOpacity>
          </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Image style = {styles.forward} source={Images.forward_icon}/>
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
        marginTop: 80,
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
        marginTop: 160,
      },
      info: {
        color: '#939393',
        fontFamily: 'Comfortaa_400Regular',
        fontSize: 17,
        alignSelf: "center",
        marginTop: 20,
      },
      resendbutton: {
        color: '#FED254',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: 17,
        alignSelf: "center",
        marginTop: 50,
      },
});
