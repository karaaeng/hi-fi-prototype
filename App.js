import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from './App/Themes';
import { Dimensions } from 'react-native';
import NavigationBar from './App/Components/NavigationBar'
import ButtonBar from './App/Components/ButtonBar'
import EditProfile from './App/Components/EditProfile'

export default function App() {
  const haroldProfile = Profiles.harold;
  const [profileImage] = useState(haroldProfile.image);
  const [name] = useState(haroldProfile.name);
  const [age] = useState(haroldProfile.age);
  const [occupation] = useState(haroldProfile.occupation);

  return (
    <View style={styles.container}>
      <NavigationBar/>
      <EditProfile profile = {haroldProfile} image = {profileImage}/>
      
      <ButtonBar profile = {haroldProfile}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'aliceblue',
  },

  profile:{
    flex: 1, 
    //flexDirection: 'column', 
  }, 
  profileCard: {
    
    //alignItems: 'center', 
    justifyContent: 'flex-start', 
    //width: Dimensions.get('window').width * .9,
    borderWidth: 2,
    borderColor: '#C5C5C5', 
    backgroundColor: 'white', 
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10,     
    alignSelf: 'center'
  }, 
  profilePicture: {
    //flex: 3, 
    width: Dimensions.get('window').width * .9,
    height: Dimensions.get('window').width * .9,
    alignSelf: 'center', 
  
    resizeMode: 'contain'
  }, 
  profileText: {
    //flex: 1, 
    padding: 10,
    alignContent: 'flex-start',
    alignItems: 'flex-start'
  }, 

});