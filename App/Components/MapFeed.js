import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import ButtonBar from './ButtonBar';
import NavigationBar from './NavigationBar';
import NotificationBar from './NotificationBar';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class MapFeed extends React.Component {
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
    <NotificationBar logo = {true}/>
    <Text style = {styles.titleText} > Map </Text>
        <Image style = {styles.map} source = {Images.kara}/>

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
  map:{
    alignSelf: 'center',
    width: Dimensions.get('window').width * .9,
    height: Dimensions.get('window').height * .6,
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
titleText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 30,
    color: '#FED254',
    marginBottom: 5,
    alignSelf: 'center',
  },
  
});