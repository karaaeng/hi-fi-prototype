import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from './App/Themes';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationBar from './App/Components/NavigationBar';
import ButtonBar from './App/Components/ButtonBar';
import Profile from './App/Components/Profile';
import EditProfile from './App/Components/EditProfile';
import AddContacts from './App/Components/AddContacts';
import AddContactsSelected from './App/Components/AddContactsSelected';
import FriendFeed from './App/Components/FriendFeed';
import MapFeed from './App/Components/MapFeed';
import KaraProfile from './App/Components/KaraProfile';
import EdenProfile from './App/Components/EdenProfile';
import MarieProfile from './App/Components/MarieProfile';
import CalProfile from './App/Components/CalProfile';
import WilderProfile from './App/Components/WilderProfile';
import ChristianProfile from './App/Components/ChristianProfile';
import Chat from './App/Components/Chat';
import WilderChristianChat from './App/Components/WilderChristianChat';
import KaraIsaChat from './App/Components/KaraIsaChat';
import Home from './App/Components/Home';



export default function App() {

  const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FriendFeed" component={FriendFeed}
          options={{
          title: '',
        }} />

        <Stack.Screen name="MapFeed" component={MapFeed}
          options={{
          title: '',
        }} />

        <Stack.Screen name="Profile" component={Profile}
          options={{
          title: '',
        }} />

        <Stack.Screen name="EdenProfile" component={EdenProfile}
          options={{
          title: '',
        }} />

        <Stack.Screen name="KaraProfile" component={KaraProfile}
          options={{
          title: '',
        }} />

        <Stack.Screen name="MarieProfile" component={MarieProfile}
          options={{
          title: '',
        }} />
        <Stack.Screen name="WilderProfile" component={WilderProfile}
          options={{
          title: '',
        }} />

        <Stack.Screen name="CalProfile" component={CalProfile}
          options={{
          title: '',
        }} />

        <Stack.Screen name="AddContacts" component={AddContacts}
          options={{
          title: '',
        }} />

        <Stack.Screen name="AddContactsSelected" component={AddContactsSelected}
          options={{
          title: '',
        }} />

        <Stack.Screen name="EditProfile" component={EditProfile}
          options={{
          title: '',
        }} />

        <Stack.Screen name="ChristianProfile" component={ChristianProfile}
          options={{
          title: '',
        }} />

        <Stack.Screen name="Chat" component={Chat}
          options={{
          title: '',
        }} />

        <Stack.Screen name="WilderChristianChat" component={WilderChristianChat}
          options={{
          title: '',
        }} />

        <Stack.Screen name="KaraIsaChat" component={KaraIsaChat}
          options={{
          title: '',
        }} />

        <Stack.Screen name="Home" component={Home}
          options={{
          title: '',
        }} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'aliceblue',
  },

  
});

/*
<NavigationBar/>
      <Profile profile = {haroldProfile} image = {profileImage}/>
      
      <ButtonBar profile = {haroldProfile}/>
*/
