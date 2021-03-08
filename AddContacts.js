import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, TouchableOpacity } from 'react-native';
import ButtonBar from './ButtonBar';
import NavigationBar from './NavigationBar';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class AddContacts extends React.Component {
  constructor(props){
    super(props);
    //See what props our StarWarsCard renders with
    console.log(JSON.stringify(props));
    
  }
  

  logout() {
    return (
      <TouchableOpacity style = {styles.logoutButton} onPress = { () => {
        console.log("logout pressed"); 
      }}>
        <Text style = {styles.buttonText}> logout </Text>
       
      </TouchableOpacity>
    );
  }

  render() {
    
    return (      
    <View style = {styles.container}>
    
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center', 
    justifyContent: 'space-between'
  },
  icon: {
    fontSize: 25,
    tintColor: '#4A4A4A'
  }, 
  editprofilestuff: {
    flex: 1
  },
  logoutButton: {
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
  logout: {
    flex: 2
  },

  options: {
    margin: 20, 
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 15
  },
  optionsTogether: {
    justifyContent: 'space-evenly', 
    alignSelf: 'center', 
    flex: 1
  },
  butttonBar: {
    alignSelf: 'flex-end'
  },
  name: { 
    fontWeight: 'bold', 
    fontSize: 25, 
    alignSelf: 'center' 
  }, 
  category: {
    color: '#FED254', 
    fontSize: 15
  },
  theirInfo: {
    fontSize: 15, 
    color: '#4A4A4A'
  },
  informationText:{
    flexDirection: 'row'
  },
  information: {
    alignSelf: 'center',
    alignContent: 'flex-start'
  },
  profile:{
    flex: 1, 
    //flexDirection: 'column', 
  }, 
  profileNameAndStatus:{
    flexDirection: 'column',
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  status: {
    //marginLeft: Dimensions.get('window').width * .7, 
    alignSelf: 'center', 
    height: Dimensions.get('window').width * .1,
    resizeMode: 'contain'
  },
  profilePicture: {
    //flex: 3, 
    width: Dimensions.get('window').width * .7,
    height: Dimensions.get('window').width * .7,
    alignSelf: 'center', 
    borderRadius: Dimensions.get('window').height * .5 * 0.5,
    resizeMode: 'contain'
  }, 
  profileText: {
    //flex: 1, 
    padding: 10,
    alignContent: 'center',
    alignItems: 'center'
  }
  
});