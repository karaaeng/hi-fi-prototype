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

  console.log(route.params.Name);
  console.log(route.params.Number);
  console.log(route.params.Location);
  console.log(route.params.Photo);
  console.log(route.params.Pronouns);
  console.log(route.params.Interests);
  console.log(route.params.Status);

  let userName = route.params.Name;
  let userNumber = route.params.Number;
  let userLocation = route.params.Location;
  let userPhoto = route.params.Photo;
  let userPronouns = route.params.Pronouns;
  let userInterests = route.params.Interests;
  let userStatus = route.params.Status;

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
        <TouchableOpacity onPress={() => navigation.navigate("Ready", {Name: userName, Number: userNumber, Location: userLocation, Photo: userPhoto, Pronouns: userPronouns, Interests: userInterests, Status: userStatus})}>
        <View style = {styles.forward}>
                 <ForwardButton/>
              </View>
        </TouchableOpacity>
      </View>
  } else if (which === "profile") {
    forwardButton = 
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("ConfirmAddFriends")}>
        <View style = {styles.forward}>
                 <ForwardButton/>
              </View>
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
        height: Dimensions.get('window').height * 0.68,
        width: Dimensions.get('window').width,
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
        height: Dimensions.get('window').height * 0.06,
        width: Dimensions.get('window').width * 0.6,
        borderRadius: Dimensions.get('window').height * 0.06 * .5,
        marginTop: Dimensions.get('window').height * 0.015,
        marginLeft: Dimensions.get('window').height * 0.02,
      },
      textInput: {
        height: Dimensions.get('window').height * 0.06,
        width: Dimensions.get('window').width * 0.45,
      },
      searchicon: {
        fontSize: Dimensions.get('window').height * 0.027,
        color: '#4A4A4A',
        marginRight: Dimensions.get('window').height * 0.007,
        color: "#E5E5E5",
      },
      unselectedicon: {
        fontSize: Dimensions.get('window').height * 0.027,
        color: '#4A4A4A',
        borderWidth: 4,
        paddingTop: Dimensions.get('window').height * 0.005,
        paddingBottom: Dimensions.get('window').height * 0.028,
        paddingLeft: Dimensions.get('window').height * 0.008,
        paddingRight: Dimensions.get('window').height * 0.008,
        borderRadius: Dimensions.get('window').height * 0.023,
        color: "#E5E5E5",
        borderColor: "#E5E5E5",
        alignSelf: "center",
        marginRight: Dimensions.get('window').height * 0.03,
      },
      selectedicon: {
        fontSize: Dimensions.get('window').height * 0.027,
        color: '#4A4A4A',
        borderWidth: 4,
        paddingTop: Dimensions.get('window').height * 0.005,
        paddingBottom: Dimensions.get('window').height * 0.028,
        paddingLeft: Dimensions.get('window').height * 0.008,
        paddingRight: Dimensions.get('window').height * 0.008,
        borderRadius: Dimensions.get('window').height * 0.023,
        color: '#4A4A4A',
        borderColor: '#4A4A4A',
        alignSelf: "center",
        marginRight: Dimensions.get('window').height * 0.03,
      },
      forward: {
        height: Dimensions.get('window').height * 0.1,
        width: Dimensions.get('window').height * 0.1,
        marginLeft: Dimensions.get('window').height * 0.31,
        marginTop: Dimensions.get('window').height * 0.009,
      },
      addAllbutton: {
        color: '#FED254',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: Dimensions.get('window').height * 0.028,
        marginTop: Dimensions.get('window').height * 0.03,
        marginLeft: Dimensions.get('window').height * 0.03,
      },
      removeAllbutton: {
        color: '#4A4A4A',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: Dimensions.get('window').height * 0.02,
        marginTop: Dimensions.get('window').height * 0.03,
        marginLeft: Dimensions.get('window').height * 0.03,
      },
      addText: {
        fontSize: Dimensions.get('window').height * 0.03,
        color: '#939393',
      },
      contactButton: {
        marginTop: Dimensions.get('window').height * 0.02,
        paddingTop: Dimensions.get('window').height * 0.02, 
        paddingBottom: Dimensions.get('window').height * 0.03,
        height: Dimensions.get('window').height * 0.09,
        width: Dimensions.get('window').width * 0.8,
        alignSelf: "center",
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
        fontSize: Dimensions.get('window').height * 0.032,
        color: '#939393',
      },
      selectedbuttonText: {
        fontFamily: 'Comfortaa_400Regular',
        fontSize: Dimensions.get('window').height * 0.032,
        color: '#4A4A4A',
      },

});
