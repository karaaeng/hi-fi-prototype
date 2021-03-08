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

export default function InterestsInput({navigation}) {
  const [text, setText] = useState("");

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
            navigation.navigate('Status')
          }}>
            <Text style={styles.skipbutton}>skip</Text>
          </TouchableOpacity>
          </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Status')}>
        <Image style = {styles.forwardwithskiplong} source={Images.forward_icon}/>
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
        height: 200,
        width: 345,
        borderRadius: 35,
        marginTop: 30,
      },
      textInputLong: {
        height: 200,
        width: 270,
      },
      icon: {
        fontSize: 35,
        color: '#4A4A4A',
      },
      forwardwithskiplong: {
        height: 80,
        width: 80,
        marginLeft: 320,
        marginTop: 120,
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
