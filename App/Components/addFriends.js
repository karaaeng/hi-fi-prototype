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
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Dimensions, ScrollView} from 'react-native';
import { Images } from '../Themes';

export default function AddFriends({navigation}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAll, setSelected] = useState(false);

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  function contact(name) {
    return (
      <TouchableOpacity style = {styles.contactButton} onPress = { () => {
        console.log(selectedAll); 
      }}>
      <View style = {styles.contactText}>
        <Text style = {styles.buttonText}> {name} </Text>
        <Icon name="plus" style={styles.icon}/>
        </View>
      </TouchableOpacity>
    );
  }

  function addAll() {
    return (
      <TouchableOpacity style = {styles.addButton} onPress = { () => {
        setSelected(true); 
      }}>
        <Text style = {styles.addText}> add all </Text>

      </TouchableOpacity>
    );
  }

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
        <View style = {styles.othercontainer}>
        {addAll()}
        <ScrollView>
            {contact("Marie Burnett")}
            {contact("George Burnside")}
            {contact("Kara Eng")}
            {contact("Isa Fulford")}
            {contact("Alex Hennessey")}
            {contact("Nat Hojel")}
            {contact("Xa Koch")}
            {contact("Elianna Knight")}
            {contact("Ryan Varis")}
            {contact("Lauren Yi")}
            {contact("Cam Burton")}
            {contact("Thom Henri")}
            {contact("Pablo Ocampo")}
      </ScrollView>
      
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
      othercontainer: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center', 
        justifyContent: 'space-between'
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
      addButton: {
        marginTop: 100,
        alignItems: "center",
        alignSelf: 'flex-end', 
        padding: 10,
        height: 50,
        width: 150,
        marginRight: 47,
        backgroundColor: "#FFF0C1",
        borderRadius: 30,
      },
    
      addText: {
        fontSize: 20,
        color: '#939393',
      },
      contactButton: {
        marginTop: 20,
        alignItems: "center",
        borderRadius: 30,
        padding: 20,
        height: 73,
        width: 336,
        alignSelf: 'center',
        backgroundColor: "#FFF0C1",
      },
      contactText: {
        flexDirection: 'row', 
        alignItems: 'baseline',
        color: '#939393',
      },
      buttonText: {
        fontFamily: 'Comfortaa_700Bold',
        fontSize: 30,
        color: '#939393',
      },
});
