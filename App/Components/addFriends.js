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

export default function AddFriends({route, navigation}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAll, setSelected] = useState(false);

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  let { which } = route.params;
  console.log(which);

  let addRemoveAll = null;

    addRemoveAll =  
        <TouchableOpacity onPress = { () => {setSelected(true);}}>
            <Text style={styles.addAllbutton}>add all</Text>
        </TouchableOpacity>;

     if (selectedAll === true) {
        addRemoveAll =  
            <TouchableOpacity onPress = { () => {setSelected(false);}}>
                <Text style={styles.removeAllbutton}>remove all</Text>
            </TouchableOpacity>;
    }

  function contact(name) {
    if (selectedAll === false) {
    return (
      <TouchableOpacity style = {styles.contactButton} onPress = { () => {
        if (selectedAll === true) {
            setSelected(false);
        } else {
            setSelected(true);
        }
        console.log(selectedAll); 
      }}>
      <View style = {styles.contactText}>
        <Icon name="plus" style={styles.unselectedicon}/>
        <Text style = {styles.unselectedbuttonText}> {name} </Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
        <TouchableOpacity style = {styles.contactButton} onPress = { () => {
            if (selectedAll === true) {
                setSelected(false);
            } else {
                setSelected(true);
            }
            console.log(selectedAll); 
        }}>
        <View style = {styles.contactText}>
          <Icon name="minus" style={styles.selectedicon}/>
          <Text style = {styles.selectedbuttonText}> {name} </Text>
          </View>
        </TouchableOpacity>
      );
    }
  }

  let forwardButton = null;

  if (which === "signup") {
    forwardButton = 
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Ready")}>
          <Image style = {styles.forward} source={Images.forward_icon}/>
        </TouchableOpacity>
      </View>
  } else if (which === "profile") {
    forwardButton = 
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("ConfirmAddFriends")}>
          <Image style = {styles.forward} source={Images.forward_icon}/>
        </TouchableOpacity>
      </View>
  }

  let contacts = 
    ["Marie Burnett",
    "George Burnside",
    "Kara Eng",
    "Isa Fulford",
    "Alex Hennessey",
    "Nat Hojel",
    "Xa Koch",
    "Elianna Knight",
    "Ryan Varis",
    "Lauren Yi",
    "Cam Horton",
    "Thom Henri",
    "Pablo Ocampo"]

    //implement search contacts
    let contactsToShow = [];
    if (searchTerm === "" || searchTerm === " " || searchTerm === null) {
        contactsToShow = contacts;
    } else {
        for (var i=0; i < contacts.length; i++) {
            if (contacts[i].startsWith(searchTerm)) {
                contactsToShow = contactsToShow.concat(contacts[i]);
            }
        }
    }

    return(
      <View style={styles.container}>
        <View style={styles.topBar}>
            <View style={styles.searchBar}>
            <Icon name="search" style={styles.searchicon} onPress={() => {console.log({searchTerm})}}/>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <TextInput value={searchTerm} onChangeText={(searchTerm) => {setSearchTerm(searchTerm)}} style={styles.textInput} placeholder = "Search your contacts"/>
                </TouchableWithoutFeedback>
            </View>
            {addRemoveAll}
        </View>
        <View style = {styles.outer}>
        <View style = {styles.othercontainer}>

        <ScrollView>
        {contactsToShow.map((currcontact) => (
            contact(currcontact) ))}
        </ScrollView>

            </View>
        </View>
        {forwardButton}
    </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
      },
      outer: {
          height: 640,
          marginBottom: 10,
      },
      othercontainer: {
        flexDirection: 'column',
        alignContent: 'center', 
        justifyContent: 'space-between',
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
      searchicon: {
        fontSize: 25,
        color: '#4A4A4A',
        marginRight: 5,
        color: "#E5E5E5",
      },
      unselectedicon: {
        fontSize: 25,
        color: '#4A4A4A',
        marginRight: 5,
        borderWidth: 4,
        paddingTop: 4,
        paddingBottom: 24,
        paddingLeft: 6,
        paddingRight: 6,
        borderRadius: 20,
        color: "#E5E5E5",
        borderColor: "#E5E5E5",
        alignSelf: "center",
        marginRight: 20,
      },
      selectedicon: {
        fontSize: 25,
        color: '#4A4A4A',
        marginRight: 5,
        borderWidth: 4,
        paddingTop: 4,
        paddingBottom: 24,
        paddingLeft: 6,
        paddingRight: 6,
        borderRadius: 20,
        color: '#4A4A4A',
        borderColor: '#4A4A4A',
        alignSelf: "center",
        marginRight: 20,
      },
      forward: {
        height: 80,
        width: 80,
        marginLeft: 320,
        marginBottom: 40,
      },
      addAllbutton: {
        color: '#FED254',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: 28,
        marginTop: 20,
        marginLeft: 20,
      },
      removeAllbutton: {
        color: '#4A4A4A',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: 20,
        marginTop: 20,
        marginLeft: 20,
      },
      addText: {
        fontSize: 20,
        color: '#939393',
      },
      contactButton: {
        marginTop: 20,
        paddingTop: 20, 
        paddingBottom: 20,
        height: 73,
        width: 336,
        marginLeft: 40,
        borderBottomWidth: 1,
        borderColor: "#939393",
      },
      contactText: {
        flexDirection: 'row', 
        alignItems: 'baseline',
        color: '#939393',
      },
      unselectedbuttonText: {
        fontFamily: 'Comfortaa_400Regular',
        fontSize: 30,
        color: '#939393',
      },
      selectedbuttonText: {
        fontFamily: 'Comfortaa_400Regular',
        fontSize: 30,
        color: '#4A4A4A',
      },
});
