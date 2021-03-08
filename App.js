import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from './App/Themes';
import { Dimensions } from 'react-native';
import NavigationBar from './App/Components/NavigationBar';
import ButtonBar from './App/Components/ButtonBar';
import Profile from './App/Components/Profile';
import EditProfile from './App/Components/EditProfile';
import AddContacts from './App/Components/AddContacts';
import AddContactsSelected from './App/Components/AddContactsSelected';
import FriendFeed from './App/Components/FriendFeed';

export default function App() {
  const haroldProfile = Profiles.harold;
  const [profileImage] = useState(haroldProfile.image);
  const [name] = useState(haroldProfile.name);
  const [age] = useState(haroldProfile.age);
  const [occupation] = useState(haroldProfile.occupation);


  return (
    <View style={styles.container}>
      <FriendFeed profile = {haroldProfile} />     
      


    </View>
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
