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

export default function AddFriends({navigation}) {
  const [searchTerm, setSearchTerm] = useState("");

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

    return(
      <View style={styles.container}>
        <View style={styles.topBar}>
            <View style={styles.searchBar}>
            <Icon name="search" style={styles.icon} onPress={() => {console.log({searchTerm})}}/>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <TextInput value={searchTerm} onChangeText={(searchTerm) => {setSearchTerm(searchTerm)}} style={styles.textInput} placeholder = "Search your contacts"/>
                </TouchableWithoutFeedback>
            </View>
            <Text style={styles.addAllbutton}>add all</Text>
        </View>
        
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Ready')}>
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
      topBar: {
        flex: 1,
        flexDirection: "row",
      },
      searchBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#E5E5E5',
        height: 50,
        width: 260,
        borderRadius: 35,
        marginTop: 10,
        marginLeft: 20,
      },
      textInput: {
        height: 81,
        width: 200,
      },
      icon: {
        fontSize: 25,
        color: '#4A4A4A',
        marginRight: 5,
      },
      forward: {
        height: 80,
        width: 80,
        marginLeft: 320,
        marginTop: 100,
      },
      addAllbutton: {
        color: '#FED254',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: 28,
        marginTop: 20,
        marginLeft: 20,
      },
});
