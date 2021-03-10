import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Images, Profiles } from './App/Themes';
import ButtonBar from './App/Components/ButtonBar'
import Profile from './App/Components/Profile'

import LoginScreen from './App/Components/loginScreen'
import NameInput from './App/Components/nameInput'
import NumberInput from './App/Components/numberInput'
import ConfirmationCode from './App/Components/confirmationCode'
import LocationInput from './App/Components/locationInput'
import PhotoSelect from './App/Components/photoSelect'
import PhotoOptions from './App/Components/photoOptions'
import SelectedPhoto from './App/Components/selectedPhoto'
import PronounsInput from './App/Components/pronounsInput'
import InterestsInput from './App/Components/interestsInput'
import StatusSelect from './App/Components/statusSelect'
import Permission from './App/Components/permission'
import AddFriends from './App/Components/addFriends'
import Ready from './App/Components/ready'

export default function App() {

  const Stack = createStackNavigator();

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
      <Stack.Screen name="PhotoOptions" component={PhotoOptions}
        options={{
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="SelectedPhoto" component={SelectedPhoto}
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
      }} />
      <Stack.Screen name="Ready" component={Ready}
        options={{
        title: '',
      }} />
    </Stack.Navigator>
  </NavigationContainer>
);
}

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    height: 58,
    width: 89,
    alignSelf: 'center',
  },
});