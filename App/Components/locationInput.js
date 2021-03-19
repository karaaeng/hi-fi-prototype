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

export default function LocationInput({navigation, route}) {
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

  let userName = route.params.Name;
  let userNumber = route.params.Number;

  //profile information
  const [userLocation, setuserLocation] = useState("");

    return(
      <View style={styles.container}>
        <View>
        <Image style = {styles.progressbar} source={Images.progress_location}/>
        </View>
        <View>
        <Text style = {styles.prompt}>where do you live?</Text>
        </View>
        <View style={styles.inputBar}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TextInput
        value={userLocation}
        onChangeText={(userLocation) => {
          setuserLocation(userLocation)
        }}
          style={styles.textInput}
          />
          </TouchableWithoutFeedback>
          <Icon name="pencil" style={styles.icon} 
          onPress={() => {
            console.log({userLocation})
          }}
          />
          </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Photo', {Name: userName, Number: userNumber, Location: userLocation})}>
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
  prompt: {
    marginTop: Dimensions.get('window').height * 0.15,
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
    width: Dimensions.get('window').width * 0.65,
  },
  icon: {
    fontSize: Dimensions.get('window').height * 0.035,
    color: '#4A4A4A',
  },
  forward: {
    height: Dimensions.get('window').height * 0.31,
    width: Dimensions.get('window').height * 0.31,
    marginLeft: Dimensions.get('window').height * 0.31,
    marginTop: Dimensions.get('window').height * 0.33,
  },
  progressbar: {
    height: Dimensions.get('window').height * 0.03,
    width: Dimensions.get('window').width * 0.7,
    alignSelf: "center",
    marginTop: Dimensions.get('window').height * 0.065,
  },
});
