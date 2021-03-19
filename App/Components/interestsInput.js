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
        <View style={styles.inputBarLong}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TextInput
        multiline={true}
        placeholder= "What is your favorite food?  What do you like to do on the weekends? Do you like sports?"
        value={userInterests}
        onChangeText={(userInterests) => {
          setuserInterests(userInterests)
        }}
          style={styles.textInputLong}
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
      inputBarLong: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#E5E5E5',
        height: 150,
        width: 345,
        borderRadius: 35,
        marginTop: 30,
      },
      textInputLong: {
        marginTop: 20,
        height: 150,
        width: 270,
      },
      icon: {
        fontSize: 35,
        color: '#4A4A4A',
      },
      forwardwithskiplong: {
        height: 80,
        width: 80,
        marginLeft: 310,
        marginTop: 150,
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
