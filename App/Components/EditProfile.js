import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, TouchableOpacity } from 'react-native';
import ButtonBar from './ButtonBar';
import NavigationBar from './NavigationBar';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class EditProfile extends React.Component {
  constructor(props){
    super(props);
    //See what props our StarWarsCard renders with
    console.log(JSON.stringify(props));
    
  }
  editProfile() {
    return (
       <TouchableOpacity style = {styles.options} onPress = { () => {
        console.log("edit profile pressed"); 
      }}>
      <Icon name="pencil" style={styles.icon} />
        <Text style = {styles.informationText}> edit profile </Text>
       
        <Icon name="arrow-right" style={styles.icon}/>
        </TouchableOpacity>
    );
  }

  privacy() {
    return (
     <TouchableOpacity style = {styles.options} onPress = { () => {
        console.log("privacy settings pressed"); 
      }}>
      <Icon name="chain" style={styles.icon}/>
        <Text style = {styles.informationText}> privacy settings </Text>
        
        <Icon name="arrow-right" style={styles.icon}/>
      </TouchableOpacity>
    );
  }

  about() {
    return (
      <TouchableOpacity style = {styles.options} onPress = { () => {
        console.log("about pressed"); 
      }}>
       <Icon name="info-circle" style={styles.icon} />
        <Text style = {styles.informationText}> about </Text>
       <Icon name="arrow-right" style={styles.icon}/>
       
      </TouchableOpacity>
    );
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
    <NavigationBar logo ={true} />
    <View style = {styles.editprofilestuff}>
      <View style = {styles.optionsTogether}>
        {this.editProfile()}
        {this.privacy()}
        {this.about()}
      </View>

      <View style = {styles.logout}> 
        {this.logout()}
      </View>
      </View>
        
      <ButtonBar style = {styles.buttonBar} profile ={this.props.profile}/>
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

  
});