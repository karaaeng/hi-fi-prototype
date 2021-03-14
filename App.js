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
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Dimensions} from 'react-native';
import { Images, Profiles } from './App/Themes';
import ButtonBar from './App/Components/ButtonBar'

import LoginScreen from './App/Components/loginScreen'
import LoginInputScreen from './App/Components/loginInputScreen'
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

import Profile from './App/Components/Profile'
import FriendFeed from './App/Components/FriendFeed'

import SettingsPage from './App/Components/settings'
import EditProfile from './App/Components/EditProfile'
import About from './App/Components/about'
import Delete from './App/Components/delete'
import Privacy from './App/Components/privacy'


export default function App() {

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen}
      options={{
        headerStyle: {
          height: 110,
        },
        title: '',
      }} />
      <Stack.Screen name="LoginInputScreen" component={LoginInputScreen}
      options={{
        headerStyle: {
          height: 110,
        },
      title: 'login',
      headerTitleStyle: {
        fontFamily: 'Comfortaa_700Bold',
        fontSize: 30,
        color: '#4A4A4A',
      },
      }} />
      <Stack.Screen name="Name" component={NameInput}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="Number" component={NumberInput}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="Confirm" component={ConfirmationCode}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="Location" component={LocationInput}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="Photo" component={PhotoSelect}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="PhotoOptions" component={PhotoOptions}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="SelectedPhoto" component={SelectedPhoto}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="Pronouns" component={PronounsInput}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="Interests" component={InterestsInput}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="Status" component={StatusSelect}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="AddFriendsPermission" component={Permission}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="AddFriends" component={AddFriends}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
      }} />
      <Stack.Screen name="Ready" component={Ready}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
      }} />
      <Stack.Screen name="Profile" component={Profile}
        options={{
          headerStyle: {
            height: 110,
          },
        title: 'my profile',
        headerTitleStyle: {
          fontFamily: 'Comfortaa_700Bold',
          fontSize: 30,
          color: '#4A4A4A',
        },
        headerLeft: () => (
          <View></View>
          ),
      }} />
        <Stack.Screen name="SettingsPage" component={SettingsPage}
        options={{
          headerStyle: {
            height: 110,
          },
        title: 'settings',
        headerTitleStyle: {
          fontFamily: 'Comfortaa_700Bold',
          fontSize: 30,
          color: '#4A4A4A',
        },
      }} />
      <Stack.Screen name="EditProfile" component={EditProfile}
        options={{
          headerStyle: {
            height: 110,
          },
        title: 'edit profile',
        headerTitleStyle: {
          fontFamily: 'Comfortaa_700Bold',
          fontSize: 30,
          color: '#4A4A4A',
        },
      }} />
      <Stack.Screen name="About" component={About}
        options={{
          headerStyle: {
            height: 110,
          },
        title: 'about',
        headerTitleStyle: {
          fontFamily: 'Comfortaa_700Bold',
          fontSize: 30,
          color: '#4A4A4A',
        },
      }} />
      <Stack.Screen name="Delete" component={Delete}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="Privacy" component={Privacy}
        options={{
          headerStyle: {
            height: 110,
          },
        title: 'privacy',
        headerTitleStyle: {
          fontFamily: 'Comfortaa_700Bold',
          fontSize: 30,
          color: '#4A4A4A',
        },
      }} />
      <Stack.Screen name="FriendFeed" component={FriendFeed}
        options={{
          headerStyle: {
            height: 110,
          },
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
  navigationBar: {
    marginTop:10, 
    marginBottom: 40, 
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    height: Platform.OS === 'ios' ? 44 : 56,
    margin: Dimensions.get('window').width * .025
  },
});