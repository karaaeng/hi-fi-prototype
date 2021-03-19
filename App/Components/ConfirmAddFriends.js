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
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Dimensions} from 'react-native';
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
        height: Dimensions.get('window').height * 0.08,
        width: Dimensions.get('window').height * 0.08,
        justifyContent: "center",
        borderRadius: Dimensions.get('window').height * 0.08 *.5,
      },
      icon: {
        fontSize: Dimensions.get('window').height * 0.05,
        color: '#4A4A4A',
        alignSelf: "center",
      },
      notification: {
          backgroundColor: '#FFF0C1',
          alignSelf: "center",
          height: Dimensions.get('window').height * 0.3,
          width: Dimensions.get('window').height * 0.37,
          borderRadius: Dimensions.get('window').height * 0.3 *.2,
          marginTop: Dimensions.get('window').height * 0.2,
      },
      notification_prompt: {
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: Dimensions.get('window').height * 0.02,
        marginRight: Dimensions.get('window').height * 0.02,
        marginBottom: Dimensions.get('window').height * 0.04,
        textAlign: "center",
        alignSelf: 'center',
        fontFamily: 'Comfortaa_400Regular',
        fontSize: Dimensions.get('window').height * 0.03,
        color: '#4A4A4A',
      },
      forward: {
        height: Dimensions.get('window').height * 0.31,
        width: Dimensions.get('window').height * 0.31,
        marginLeft: Dimensions.get('window').height * 0.31,
        marginTop: Dimensions.get('window').height * 0.23,
      },
});
