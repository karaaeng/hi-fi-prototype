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

export default function InterestsInput({navigation, route}) {
  const [text, setText] = useState("");

  console.log(route.params.Name);
  console.log(route.params.Number);
  console.log(route.params.Location);
  console.log(route.params.Photo);
  console.log(route.params.Pronouns);

  let userName = route.params.Name;
  let userNumber = route.params.Number;
  let userLocation = route.params.Location;
  let userPhoto = route.params.Photo;
  let userPronouns = route.params.Pronouns;

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  //profile information
  const [userInterests, setuserInterests] = useState("");

    return(
      <View style={styles.container}>
        <View>
        <Image style = {styles.progressbar} source={Images.progress_interests}/>
        </View>
        <View>
        <Text style = {styles.prompt}>what are your interests?</Text>
        </View>
        <View style={styles.inputBar}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TextInput
        placeholder= "e.g. music, travelling, politics, etc."
        value={userInterests}
        onChangeText={(userInterests) => {
          setuserInterests(userInterests)
        }}
          style={styles.textInput}
          />
          </TouchableWithoutFeedback>
          <Icon name="pencil" style={styles.icon} 
          onPress={() => {
            console.log({userInterests})
          }}
          />
          </View>
          <View>
          <TouchableOpacity onPress={() => {
            setuserInterests("")
            navigation.navigate('Status', {Name: userName, Number: userNumber, Location: userLocation, Photo: userPhoto, Pronouns: userPronouns, Interests: "none"})
          }}>
            <Text style={styles.skipbutton}>skip</Text>
          </TouchableOpacity>
          </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Status', {Name: userName, Number: userNumber, Location: userLocation, Photo: userPhoto, Pronouns: userPronouns, Interests: userInterests})}>
          <View style = {styles.forwardwithskiplong}>
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
  forwardwithskiplong: {
    height: Dimensions.get('window').height * 0.31,
    width: Dimensions.get('window').height * 0.31,
    marginLeft: Dimensions.get('window').height * 0.31,
    marginTop: Dimensions.get('window').height * 0.23,
  },
  progressbar: {
    height: Dimensions.get('window').height * 0.03,
    width: Dimensions.get('window').width * 0.7,
    alignSelf: "center",
    marginTop: Dimensions.get('window').height * 0.065,
  },
      skipbutton: {
        color: '#FED254',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: Dimensions.get('window').height * 0.03,
        alignSelf: "center",
        marginTop: Dimensions.get('window').height * 0.065,
      },
});
