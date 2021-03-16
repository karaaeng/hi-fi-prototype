import Icon from 'react-native-vector-icons/FontAwesome';
import ForwardButton from './ForwardButton';

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

export default function ConfirmAddFriends({navigation}) {
  const [userFriends, setuserFriends] = useState("");

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

    return(
      <View style={styles.container}>
        <View style={styles.notification}>
            <Text style = {styles.notification_prompt}>your new friends have been successfully added!</Text>
            <View style = {styles.iconcontainer}>
                <Icon name="check" style={styles.icon}/>
            </View>
        </View>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
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
      iconcontainer: {
        alignSelf: "center",
        backgroundColor: "#FED254",
        width: 80,
        height: 80,
        justifyContent: "center",
        borderRadius: 40,
      },
      icon: {
        fontSize: 50,
        color: '#4A4A4A',
        alignSelf: "center",
      },
      notification: {
          backgroundColor: '#FFF0C1',
          alignSelf: "center",
          height: 290,
          width: 354,
          borderRadius: 40,
          marginTop: 200,
      },
      notification_prompt: {
        marginTop: 30,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 20,
        textAlign: "center",
        alignSelf: 'center',
        fontFamily: 'Comfortaa_400Regular',
        fontSize: 28,
        color: '#4A4A4A',
      },
      forward: {
        height: 80,
        width: 80,
        marginLeft: 320,
        marginBottom: 30,
        marginTop: 230,
      },
});
