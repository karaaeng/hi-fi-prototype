import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '../../firebase';
import firebase from 'firebase';

import {
  useFonts,
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold,
} from '@expo-google-fonts/comfortaa';

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import { Images } from '../Themes';

export default function EditProfile({navigation, route}) {

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  //profile information
  const [userPhoto, setuserPhoto] = useState(route.params.Photo);
  const [userName, setuserName] = useState(route.params.Name);
  const [userInterests, setuserInterests] = useState(route.params.Interests);
  const [userLocation, setuserLocation] = useState(route.params.Location);
  const [userNumber, setuserNumber] = useState(route.params.Number);
  const [userPronouns, setuserPronouns] = useState(route.params.Pronouns);
  const [userStatus, setuserStatus] = useState(route.params.Status);

  let askingButtonDisplayed = null;
  let openButtonDisplayed = null;
  let holdButtonDisplayed = null;

  let isEnabledPronouns = route.params.ShowPronouns;
  let isEnabledInterests = route.params.ShowInterests;

function update() {
//check if user want to show pronouns/interests
if (userPronouns !== "none" && userPronouns !== "") {
    isEnabledPronouns = true;
} else {
  isEnabledPronouns = false;
}
if (userInterests !== "none" && userInterests !== "") {
  isEnabledInterests = true;
} else {
  isEnabledInterests = false;
}
//override user info in firebase with any changes
  firestore.collection("users").doc("123-456-7890").set({
    name: userName,
    location: userLocation, 
    pronouns: userPronouns, 
    interests: userInterests, 
    status: userStatus, 
    image: userPhoto, 
    number: userNumber,
    showPronouns: isEnabledPronouns , 
    showInterests: isEnabledInterests
  })
  .then(() => {
    console.log("New user successfully added!");
  })
  .catch((error) => {
    console.error("Error adding user: ", error);
  }); 
}

  //if user has not set status yet, render unchosen buttons
    askingButtonDisplayed =  
        <View style = {styles.asking}>
            <Text style = {styles.button_text}>asking</Text>
            <Text style = {styles.button_text_small}>(actively ask for connections)</Text>
        </View>;
    openButtonDisplayed =  
        <View style = {styles.open}>
            <Text style = {styles.button_text}>open</Text>
            <Text style = {styles.button_text_small}>(open to connections)</Text>
        </View>;
    holdButtonDisplayed =  
    <View style = {styles.hold}>
        <Text style = {styles.button_text}>on hold</Text>
        <Text style = {styles.button_text_small}>(not open to connections right now)</Text>
    </View>;

    //if user has set status to "asking", render chosen "asking" button  
     if (userStatus === "asking") {
        askingButtonDisplayed =  
            <View style = {styles.asking_chosen}>
                <Text style = {styles.button_text}>asking</Text>
                <Text style = {styles.button_text_small}>(actively ask for connections)</Text>
            </View>;
    }

     //if user has set status to "open", render chosen "open" button  
     if (userStatus === "open") {
        openButtonDisplayed =  
            <View style = {styles.open_chosen}>
                <Text style = {styles.button_text}>open</Text>
                <Text style = {styles.button_text_small}>(open to connections)</Text>
            </View>;
    }

     //if user has set status to "open", render chosen "open" button  
     if (userStatus === "on hold") {
      holdButtonDisplayed =  
          <View style = {styles.hold_chosen}>
              <Text style = {styles.button_text}>on hold</Text>
              <Text style = {styles.button_text_small}>(not open to connections right now)</Text>
          </View>;
  }

    function save() {
      return (
        <TouchableOpacity style = {styles.saveButton} onPress = { () => {
          update(),
          navigation.push("Profile");
        navigation.navigate("Profile");
        }}>
          <Text style = {styles.buttonText}> save </Text>
        </TouchableOpacity>
      );
    }

    return(
        <View style={styles.container}>
          <ScrollView>
            
          <View style = {styles.row}>
            <TouchableOpacity onPress={() => 
              navigation.navigate('PhotoOptions', {which: 'profile', source: userPhoto, Name: userName, Number: userNumber, Location: userLocation, Pronouns: userPronouns, Interests: userInterests, Status: userStatus, ShowInterests: isEnabledInterests, ShowPronouns: isEnabledPronouns})}>
                <Icon name="pencil" style={styles.firsticon}/>
                <Image style = {styles.image} source={userPhoto}/>
            </TouchableOpacity>
        </View>

          <View style = {styles.input}>
            <Text style = {styles.prompt}>Name       </Text>
          <View style={styles.inputBar}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <TextInput
              value={userName}
              onChangeText={(userName) => {
               setuserName(userName)
              }}
              style={styles.textInput}
            />
            </TouchableWithoutFeedback>
              <Icon name="pencil" style={styles.icon} 
                onPress={() => {
                  console.log({userName})
              }}
              />
          </View>
          </View>

          <View style = {styles.input}>
            <Text style = {styles.prompt}>Pronouns</Text>
          <View style={styles.inputBar}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <TextInput
              value={userPronouns}
              onChangeText={(userPronouns) => {
               setuserPronouns(userPronouns)
              }}
              style={styles.textInput}
            />
            </TouchableWithoutFeedback>
              <Icon name="pencil" style={styles.icon} 
                onPress={() => {
                  console.log({userName})
              }}
              />
          </View>
          </View>

          <View style = {styles.input}>
            <Text style = {styles.prompt}>Phone      </Text>
          <View style={styles.inputBar}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <TextInput
              value={userNumber}
              onChangeText={(userNumber) => {
               setuserNumber(userNumber)
              }}
              style={styles.textInput}
            />
            </TouchableWithoutFeedback>
              <Icon name="pencil" style={styles.icon} 
                onPress={() => {
                  console.log({userName})
              }}
              />
          </View>
          </View>

          <View style = {styles.input}>
            <Text style = {styles.prompt}>Location  </Text>
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
                  console.log({userName})
              }}
              />
          </View>
          </View>

          <View style = {styles.input}>
            <Text style = {styles.promptInterests}>Interests  </Text>
          <View style={styles.interestsBar}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <TextInput
              value={userInterests}
              onChangeText={(userInterests) => {
               setuserInterests(userInterests)
              }}
              style={styles.interestsInput}
            />
            </TouchableWithoutFeedback>
              <Icon name="pencil" style={styles.iconInterests} 
                onPress={() => {
                  console.log({userName})
              }}
              />
          </View>
          </View>

          <View style = {styles.input}>
            <Text style = {styles.prompt}>Status </Text>
            </View>
            <View>
            <TouchableOpacity onPress={() => {setuserStatus("asking")}}>
                {askingButtonDisplayed}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setuserStatus("open")}}>
                {openButtonDisplayed}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setuserStatus("on hold")}}>
                {holdButtonDisplayed}
            </TouchableOpacity>
        </View>

        <View style = {styles.save}> 
        {save()}
      </View>

      <View style= {styles.deleteButtonContainer}>
      <Icon name="trash" style={styles.trashicon}/>
          <TouchableOpacity onPress={() => {
            setuserInterests("")
            navigation.navigate('Delete')
          }}>
            <Text style={styles.deletebutton}>delete account</Text>
          </TouchableOpacity>
          </View>
          </ScrollView>
      </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
      },
      input: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
      },
      prompt: {
        alignSelf: 'center',
        alignContent: 'flex-start',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: 20,
        color: '#4A4A4A',
        marginTop: 30,
        marginRight: 25,
        marginLeft: 25,
      },
      promptInterests: {
        alignSelf: 'flex-start',
        alignContent: 'flex-start',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: 20,
        color: '#4A4A4A',
        marginTop: 50,
        marginRight: 25,
        marginLeft: 25,
      },
      inputBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: "flex-end",
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#E5E5E5',
        height: 69,
        width: 255,
        borderRadius: 35,
        marginTop: 30,
      },
      textInput: {
        height: 69,
        width: 175,
      },
      interestsBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: "flex-end",
        alignItems: 'flex-end',
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#E5E5E5',
        height: 215,
        width: 255,
        borderRadius: 35,
        marginTop: 30,
      },
      interestsInput: {
        height: 215,
        width: 175,
        marginBottom: 70,
      },
      icon: {
        fontSize: 35,
        color: '#4A4A4A',
      },
      iconInterests: {
        fontSize: 35,
        color: '#4A4A4A',
        marginBottom: 15,
      },
      forward: {
        height: 80,
        width: 80,
        marginLeft: 320,
        marginTop: 340,
      },
      image: {
        height: 220,
        width: 220,
        alignSelf: "center",
        borderRadius: 109.5,
        marginTop: -30,
        marginBottom: 20,
      },
      row: {
        flex: 1,
        flexDirection: "column",
        marginTop: -80,
      },
      firsticon: {
        fontSize: 35,
        color: '#4A4A4A',
        alignSelf: "flex-end",
        marginTop: 100,
        marginRight: 90,
      },
      asking: {
        borderColor: "#89FF95",
        borderWidth: 3,
        alignSelf: "center",
        justifyContent:"center",
        height: 83,
        width: 273,
        borderRadius: 35,
        marginTop: 25,
      },
      asking_chosen: {
        backgroundColor: "#89FF95",
        borderColor: "#89FF95",
        borderWidth: 3,
        alignSelf: "center",
        justifyContent:"center",
        height: 83,
        width: 273,
        borderRadius: 35,
        marginTop: 25,
      },
      open: {
        borderColor: "#FED254",
        borderWidth: 3,
        alignSelf: "center",
        justifyContent:"center",
        height: 83,
        width: 273,
        borderRadius: 35,
        marginTop: 25,
      },
      open_chosen: {
        backgroundColor: "#FED254",
        borderColor: "#FED254",
        borderWidth: 3,
        alignSelf: "center",
        justifyContent:"center",
        height: 83,
        width: 273,
        borderRadius: 35,
        marginTop: 25,
      },
      hold: {
        borderColor: "#FD9B9B",
        borderWidth: 3,
        alignSelf: "center",
        justifyContent:"center",
        height: 83,
        width: 273,
        borderRadius: 35,
        marginTop: 25,
      },
      hold_chosen: {
        backgroundColor: "#FD9B9B",
        borderColor: "#FD9B9B",
        borderWidth: 3,
        alignSelf: "center",
        justifyContent:"center",
        height: 83,
        width: 273,
        borderRadius: 35,
        marginTop: 25,
        
      },
      button_text: {
        alignSelf: 'center',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: 28,
        color: '#4A4A4A',
        marginTop: 12,
      },
      button_text_small: {
        alignSelf: 'center',
        fontFamily: 'Comfortaa_300Light',
        fontSize: 12,
        color: '#4A4A4A',
        marginTop: 5,
      },
      saveButton: {
        marginTop: 100,
        alignItems: "center",
        backgroundColor: "#FFF0C1",
        borderRadius: 30,
        padding: 20,
        height: 73,
        width: 336,
        alignSelf: 'center',
      },
      buttonText: {
        fontFamily: 'Comfortaa_700Bold',
        fontSize: 30,
        color: '#4A4A4A',
      },
      save: {
        flex: 2
      },
      deletebutton: {
        color: '#4A4A4A',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: 20,        
      },
      deleteButtonContainer: {
        marginTop: 70,
        marginBottom: 100,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
      },
      trashicon: {
        fontSize: 30,
        color: '#4A4A4A',
        marginRight: 10,
      },
});
