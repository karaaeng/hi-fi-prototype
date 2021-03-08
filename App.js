import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Images, Profiles } from './App/Themes';
import NavigationBar from './App/Components/NavigationBar'
import ButtonBar from './App/Components/ButtonBar'
import Profile from './App/Components/Profile'

export default function App() {

  const [text, setText] = useState("");

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  //profile information
  const [userName, setuserName] = useState("");
  const [userNumber, setuserNumber] = useState("");
  const [userLocation, setuserLocation] = useState("");
  const [userPhoto, setuserPhoto] = useState("");
  const [userPronouns, setuserPronouns] = useState("");
  const [userInterests, setuserInterests] = useState("");
  const [userStatus, setuserStatus] = useState("");

  const Stack = createStackNavigator();

  function LoginScreen ({navigation}) {
    return(
      <View style={styles.container}>
        <View>
        <Image style = {styles.logo} source={Images.logo}/>
        </View>
        <View>
        <Text style = {styles.tagline}>meet new friends,</Text>
        <Text style = {styles.tagline}>through the old</Text>
        </View>
      <View>
      <TouchableOpacity
        style = {styles.loginButton}
        // onPress={() => navigation.navigate('Profile')}
      >
        <Text style = {styles.buttonText}>login</Text>
      </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity
        style = {styles.signUpButton}
        onPress={() => {
          navigation.navigate('Name')}
        }>
        <Text style = {styles.buttonText}>sign up</Text>
      </TouchableOpacity>
        </View>
    </View>
    );
  }

  function NameInput ({navigation}) {
    return(
      <View style={styles.container}>
        <View>
        <Image style = {styles.progressbar} source={Images.progress_name}/>
        </View>
        <View>
        <Text style = {styles.prompt}>what's your name?</Text>
        </View>
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
        <View>
          <TouchableOpacity onPress={() => { 
            navigation.navigate('Number')}
            }>
        <Image style = {styles.forward} source={Images.forward_icon}/>
        </TouchableOpacity>
        </View>
    </View>
    );
  }

  function NumberInput ({navigation}) {
    return(
      <View style={styles.container}>
        <View>
        <Image style = {styles.progressbar} source={Images.progress_number}/>
        </View>
        <View>
        <Text style = {styles.prompt}>what's your number?</Text>
        </View>
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
            console.log({userNumber})
          }}
          />
          </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Confirm')}>
        <Image style = {styles.forward} source={Images.forward_icon}/>
        </TouchableOpacity>
        </View>
    </View>
    );
  }

  function ConfirmationCode ({navigation}) {
    return(
      <View style={styles.container}>
        <View>
        <Image style = {styles.progressbar} source={Images.progress_confirmation}/>
        </View>
        <View>
        <Text style = {styles.prompt}>text confirmation code</Text>
        </View>
        <View style={styles.inputBar}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TextInput
          value='12345678'
          style={styles.textInput}
          />
          </TouchableWithoutFeedback>
          <Icon name="pencil" style={styles.icon}/>
          </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Location')}>
        <Image style = {styles.forward} source={Images.forward_icon}/>
        </TouchableOpacity>
        </View>
    </View>
    );
  }

  function LocationInput ({navigation}) {
    return(
      <View style={styles.container}>
        <View>
        <Image style = {styles.progressbar} source={Images.progress_location}/>
        </View>
        <View>
        <Text style = {styles.prompt}>where do you live?</Text>
        </View>
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
            console.log({userLocation})
          }}
          />
          </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Photo')}>
        <Image style = {styles.forward} source={Images.forward_icon}/>
        </TouchableOpacity>
        </View>
    </View>
    );
  }

  function PhotoSelect ({navigation}) {
    return(
      <View style={styles.container}>
        <View>
        <Image style = {styles.progressbar} source={Images.progress_photo}/>
        </View>
        <View>
        <Text style = {styles.prompt}>TO DO: select photo</Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Pronouns')}>
        <Image style = {styles.forward} source={Images.forward_icon}/>
        </TouchableOpacity>
        </View>
    </View>
    );
  }

  function PronounsInput ({navigation}) {
    return(
      <View style={styles.container}>
        <View>
        <Image style = {styles.progressbar} source={Images.progress_pronouns}/>
        </View>
        <View>
        <Text style = {styles.prompt}>what are your pronouns?</Text>
        </View>
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
            console.log({userPronouns})
          }}
          />
          </View>
          <View>
          <TouchableOpacity onPress={() => {
            setuserPronouns("")
            navigation.navigate('Interests')
          }}>
            <Text style={styles.skipbutton}>skip</Text>
          </TouchableOpacity>
          </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Interests')}>
        <Image style = {styles.forwardwithskip} source={Images.forward_icon}/>
        </TouchableOpacity>
        </View>
    </View>
    );
  }

  function InterestsInput ({navigation}) {
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

  function StatusSelect ({navigation}) {
    return(
      <View style={styles.container}>
        <View>
        <Image style = {styles.progressbar} source={Images.progress_status}/>
        </View>
        <View>
        <Text style = {styles.prompt}>TO DO</Text>
        <Text style = {styles.prompt}>choose your status</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('AddFriendsPermission')}>
        <Image style = {styles.forwardwithskip} source={Images.forward_icon}/>
        </TouchableOpacity>
        </View>
    </View>
    );
  }

  function Permission ({navigation}) {
    return(
      <View style={styles.container}>
        <View>
        <Image style = {styles.progressbar} source={Images.progress_addfriends}/>
        </View>
        <View>
        <Text style = {styles.prompt}>TO DO</Text>
        <Text style = {styles.prompt}>allow ven to access your contacts?</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('AddFriends')}>
        <Image style = {styles.forwardwithskip} source={Images.forward_icon}/>
        </TouchableOpacity>
        </View>
    </View>
    );
  }

  function AddFriends ({navigation}) {
    return(
      <View style={styles.container}>
        <View>
        <Text style = {styles.prompt}>TO DO</Text>
        <Text style = {styles.prompt}>display friends</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Ready')}>
        <Image style = {styles.forwardwithskip} source={Images.forward_icon}/>
        </TouchableOpacity>
        </View>
    </View>
    );
  }

  function Ready ({navigation}) {
    return(
      <View style={styles.container}>
        <View>
        <Image style = {styles.progressbar} source={Images.progress_ready}/>
        </View>
        <View>
        <Image style = {styles.logo} source={Images.logo}/>
        </View>
        <View>
        <Text style = {styles.tagline}>you're ready to</Text>
        <Text style = {styles.tagline}>overlap your</Text>
        <Text style = {styles.tagline}>social circles!</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image style = {styles.forwardready} source={Images.forward_icon}/>
        </TouchableOpacity>
        </View>
    </View>
    );
  }

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen}
      options={{
        title: '',
      }} />
      <Stack.Screen name="Name" component={NameInput}
        options={{
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="Number" component={NumberInput}
        options={{
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="Confirm" component={ConfirmationCode}
        options={{
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="Location" component={LocationInput}
        options={{
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="Photo" component={PhotoSelect}
        options={{
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="Pronouns" component={PronounsInput}
        options={{
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="Interests" component={InterestsInput}
        options={{
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="Status" component={StatusSelect}
        options={{
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="AddFriendsPermission" component={Permission}
        options={{
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="AddFriends" component={AddFriends}
        options={{
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="Ready" component={Ready}
        options={{
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
    </Stack.Navigator>
  </NavigationContainer>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  logo: {
    height: 173,
    width: 274,
    alignSelf: 'center',
    marginTop: 120,
    marginBottom: 40,
  },
  tagline: {
    alignSelf: 'center',
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 28,
    color: '#4A4A4A',
  },
  loginButton: {
    marginTop: 100,
    alignItems: "center",
    backgroundColor: "#FFF0C1",
    borderRadius: 30,
    padding: 20,
    height: 73,
    width: 336,
    alignSelf: 'center',
  },
  signUpButton: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: '#FED254', 
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
  inputBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#E5E5E5',
    height: 81,
    width: 345,
    borderRadius: 35,
    marginTop: 30,
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
  textInput: {
    height: 81,
    width: 270,
  },
  textInputLong: {
    height: 200,
    width: 270,
  },
  icon: {
    fontSize: 35,
    color: '#4A4A4A',
  },
  forward: {
    height: 80,
    width: 80,
    marginLeft: 320,
    marginTop: 340,
  },
  forwardwithskip: {
    height: 80,
    width: 80,
    marginLeft: 320,
    marginTop: 240,
  },
  forwardwithskiplong: {
    height: 80,
    width: 80,
    marginLeft: 320,
    marginTop: 120,
  },
  forwardready: {
    height: 80,
    width: 80,
    marginLeft: 320,
    marginTop: 200,
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