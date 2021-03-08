import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import ButtonBar from './ButtonBar';
import NavigationBar from './NavigationBar';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class FriendFeed extends React.Component {
  constructor(props){
    super(props);
    //See what props our StarWarsCard renders with
    console.log(JSON.stringify(props));
    this.state = {selectedAll: false}; 
  }
  

  notification(text, image) {
    return (
      <TouchableOpacity style = {styles.notification} onPress = { () => {
        console.log(this.state); 
      }}>
      <View style = {styles.notificationInside}>
      <Image style = {styles.profileImages} source = {image}/>
        <Text style = {styles.notificationText}> {text} </Text>
        </View>
      </TouchableOpacity>
    );
  }

  addAll() {
    return (
      <TouchableOpacity style = {styles.addButton} onPress = { () => {
        this.state["selectedAll"] = true; 
      }}>
        <Text style = {styles.addText}> add all </Text>

      </TouchableOpacity>
    );
  }



  render() {
    
    return (      
    <View style = {styles.container}>
    <NavigationBar profile = {this.props.profile}/>
    <Text style = {styles.topText} > Friends Feed </Text>
    <ScrollView>
      {this.notification("Eden created a connection in New York, NY!", Images.settings)}
      {this.notification("Cal was connected with someone in Santa Cruz, CA!", Images.harold)}
      {this.notification("Kara moved to Los Angeles, CA!")}
      {this.notification("Marie moved to Newport Beach, CA!")}
      {this.notification("Eden created a  connection in Newport Beach, CA!")}
      {this.notification("Wilder joined ven!")}
      {this.notification("Christian joined ven!")}
  
      </ScrollView>
      <ButtonBar profile = {this.props.profile}/>
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
    tintColor: '#939393'
  }, 
  addButton: {
    marginTop: 100,
    alignItems: "center",
    alignSelf: 'flex-end', 
    padding: 10,
    height: 50,
    width: 150,
    marginRight: 47,
    backgroundColor: "#FFF0C1",
    borderRadius: 30,
  },
  profileImages:{
    width: 40, 
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 30,
    marginBottom: 65,
    resizeMode: 'contain', 
  },

  addText: {
    fontSize: 20,
    color: '#939393',
  },
  notification: {
    marginTop: 20,
    
    borderRadius: 30,
    padding: 20,
    height: 150,
    width: 336,
    borderWidth: 2,
    borderColor: "#FFF0C1",
    alignSelf: 'center',
  },
  notificationInside: {
    flexDirection: 'row', 
    alignItems: 'baseline',
    color: '#939393',
  },
  notificationText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 20,
    color: '#939393',
    marginLeft: 10,
    marginRight: 15,
    alignSelf: 'baseline'
  },
  topText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 30,
    alignSelf: 'center', 
    color: '#939393',
  },
  
});