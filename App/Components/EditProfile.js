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
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, Dimensions} from 'react-native';
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
        fontSize: Dimensions.get('window').width * .046,
        color: '#4A4A4A',
        marginTop: Dimensions.get('window').height * .03,
        marginRight: Dimensions.get('window').height * .025,
        marginLeft: Dimensions.get('window').height * .025,
      },
      promptInterests: {
        alignSelf: 'flex-start',
        alignContent: 'flex-start',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: Dimensions.get('window').width * .046,
        color: '#4A4A4A',
        marginTop: Dimensions.get('window').height * .03,
        marginRight: Dimensions.get('window').height * .025,
        marginLeft: Dimensions.get('window').height * .025,
      },
      inputBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#E5E5E5',
        height: Dimensions.get('window').height * 0.07,
        width: Dimensions.get('window').width * 0.6,
        borderRadius: Dimensions.get('window').height * 0.08 * .5,
        marginTop: Dimensions.get('window').height * 0.03,
      },
      textInput: {
        height: Dimensions.get('window').height * 0.08,
        width: Dimensions.get('window').width * 0.45,
      },
      icon: {
        fontSize: Dimensions.get('window').height * 0.035,
        color: '#4A4A4A',
      },
      interestsBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#E5E5E5',
        height: Dimensions.get('window').height * 0.2,
        width: Dimensions.get('window').width * 0.6,
        borderRadius: Dimensions.get('window').height * 0.08 * .5,
        marginTop: Dimensions.get('window').height * 0.03,
      },
      interestsInput: {
        height: Dimensions.get('window').height * 0.2,
        width: Dimensions.get('window').width * 0.45,
        marginBottom: 70,
      },
      iconInterests: {
        fontSize: Dimensions.get('window').height * 0.035,
        color: '#4A4A4A',
        marginBottom: 15,
      },
      image: {
        height: Dimensions.get('window').height * 0.23,
        width: Dimensions.get('window').width * 0.5,
        alignSelf: "center",
        borderRadius: Dimensions.get('window').height * 0.23 * .5,
        marginTop: - Dimensions.get('window').height * 0.04,
        marginBottom: Dimensions.get('window').height * 0.01,
      },
      row: {
        flex: 1,
        flexDirection: "column",
        marginTop: - Dimensions.get('window').height * 0.09,
      },
      firsticon: {
        fontSize: Dimensions.get('window').height * 0.035,
        color: '#4A4A4A',
        alignSelf: "flex-end",
        marginTop: Dimensions.get('window').height * 0.109,
        marginRight: Dimensions.get('window').height * 0.1,
      },
      asking: {
        borderColor: "#89FF95",
        borderWidth: 3,
        alignSelf: "center",
        justifyContent:"center",
        height: Dimensions.get('window').height * 0.09,
        width: Dimensions.get('window').width * 0.6,
        borderRadius: Dimensions.get('window').height * 0.09 * .35,
        marginTop: Dimensions.get('window').height * 0.025,
      },
      asking_chosen: {
        backgroundColor: "#89FF95",
        borderColor: "#89FF95",
        borderWidth: 3,
        alignSelf: "center",
        justifyContent:"center",
        height: Dimensions.get('window').height * 0.09,
        width: Dimensions.get('window').width * 0.6,
        borderRadius: Dimensions.get('window').height * 0.09 * .35,
        marginTop: Dimensions.get('window').height * 0.025,
      },
      open: {
        borderColor: "#FED254",
        borderWidth: 3,
        alignSelf: "center",
        justifyContent:"center",
        height: Dimensions.get('window').height * 0.09,
        width: Dimensions.get('window').width * 0.6,
        borderRadius: Dimensions.get('window').height * 0.09 * .35,
        marginTop: Dimensions.get('window').height * 0.025,
      },
      open_chosen: {
        backgroundColor: "#FED254",
        borderColor: "#FED254",
        borderWidth: 3,
        alignSelf: "center",
        justifyContent:"center",
        height: Dimensions.get('window').height * 0.09,
        width: Dimensions.get('window').width * 0.6,
        borderRadius: Dimensions.get('window').height * 0.09 * .35,
        marginTop: Dimensions.get('window').height * 0.025,
      },
      hold: {
        borderColor: "#FD9B9B",
        borderWidth: 3,
        alignSelf: "center",
        justifyContent:"center",
        height: Dimensions.get('window').height * 0.09,
        width: Dimensions.get('window').width * 0.6,
        borderRadius: Dimensions.get('window').height * 0.09 * .35,
        marginTop: Dimensions.get('window').height * 0.025,
      },
      hold_chosen: {
        backgroundColor: "#FD9B9B",
        borderColor: "#FD9B9B",
        borderWidth: 3,
        alignSelf: "center",
        justifyContent:"center",
        height: Dimensions.get('window').height * 0.09,
        width: Dimensions.get('window').width * 0.6,
        borderRadius: Dimensions.get('window').height * 0.09 * .35,
        marginTop: Dimensions.get('window').height * 0.025,
      },
      button_text: {
        alignSelf: 'center',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: Dimensions.get('window').width * 0.06,
        color: '#4A4A4A',
      },
      button_text_small: {
        alignSelf: 'center',
        fontFamily: 'Comfortaa_300Light',
        fontSize: Dimensions.get('window').width * 0.03,
        color: '#4A4A4A',
        marginTop: Dimensions.get('window').width * 0.005,
      },
      saveButton: {
        marginTop: Dimensions.get('window').height * .08,
        alignItems: "center",
        backgroundColor: "#FFF0C1",
        borderRadius: Dimensions.get('window').height * .08 * .5,
        justifyContent: "center",
        height: Dimensions.get('window').height * .08,
        width: Dimensions.get('window').width * .8,
        alignSelf: 'center',
      },
      buttonText: {
        fontFamily: 'Comfortaa_700Bold',
        fontSize: Dimensions.get('window').height * .033,
        color: '#4A4A4A',
      },
      save: {
        flex: 2
      },
      deletebutton: {
        color: '#4A4A4A',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: Dimensions.get('window').height * .022,       
      },
      deleteButtonContainer: {
        marginTop: Dimensions.get('window').height * .07,
        marginBottom: Dimensions.get('window').height * .1,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
      },
      trashicon: {
        fontSize: Dimensions.get('window').height * 0.03,
        color: '#4A4A4A',
        marginRight: Dimensions.get('window').height * 0.01,
      },
});
