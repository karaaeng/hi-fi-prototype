import Icon from 'react-native-vector-icons/FontAwesome';
import ForwardButton from './ForwardButton';
import firestore from '../../firebase';
import firebase from 'firebase';

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

export default function LoginInputScreen({navigation}) {
    const [userNumber, setuserNumber] = useState("");
    const [Message, setMessage] = useState("");

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  function checkForUser() {
    if (userNumber === null || userNumber === undefined || userNumber === "") {
      setMessage("please enter your phone number!");
    } else {
    //check if user is in database
      var currUser = firestore.collection("users").doc(userNumber);
      currUser.get().then((user) => {
        if (user.exists) {
          navigation.navigate('Main');
        } else {
          // doc.data() will be undefined in this case
          setMessage("you have not made an account yet! please sign up to start connecting");
          console.log("No such document");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }
}

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
        <TouchableOpacity onPress={() => 
          checkForUser()}>
        <View style = {styles.forward}>
                 <ForwardButton/>
              </View>
      </TouchableOpacity>
      <View style={styles.messagecontainer}>
        <Text style={styles.message}>{Message}</Text>
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
      prompt: {
        marginTop: Dimensions.get('window').height * 0.07,
        alignSelf: 'center',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: Dimensions.get('window').height * 0.03,
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
        height: Dimensions.get('window').height * 0.08,
        width: Dimensions.get('window').width * 0.8,
        borderRadius: Dimensions.get('window').height * 0.08 * .5,
        marginTop: Dimensions.get('window').height * 0.03,
      },
      textInput: {
        height: Dimensions.get('window').height * 0.08,
        width: Dimensions.get('window').width * 0.7,
      },
      forward: {
        height: Dimensions.get('window').height * 0.31,
        width: Dimensions.get('window').height * 0.31,
        marginLeft: Dimensions.get('window').height * 0.31,
        marginTop: Dimensions.get('window').height * 0.2,
      },
      info: {
        color: '#939393',
        fontFamily: 'Comfortaa_400Regular',
        fontSize: Dimensions.get('window').height * 0.017,
        alignSelf: "center",
        marginTop: Dimensions.get('window').height * 0.02,
      },
      resendbutton: {
        color: '#FED254',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: Dimensions.get('window').height * 0.02,
        alignSelf: "center",
        marginTop: Dimensions.get('window').height * 0.03,
      },
      messagecontainer: {
        width: Dimensions.get('window').width,
        alignSelf: "center",
      },
      message: {
        color: 'red',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: Dimensions.get('window').height * 0.02,
        textAlign: "center",
        marginTop: -Dimensions.get('window').height * 0.4,
      },
});
