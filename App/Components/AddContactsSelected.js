import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import ButtonBar from './ButtonBar';
import NavigationBar from './NavigationBar';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class AddContactsSelected extends React.Component {
  constructor(props){
    super(props);
    //See what props our StarWarsCard renders with
    console.log(JSON.stringify(props));
    this.state = {selectedAll: false}; 
  }
  

  contact(name) {
    return (
      <TouchableOpacity style = {styles.contactButton} onPress = { () => {
        console.log(this.state); 
      }}>
      <View style = {styles.contactText}>
        <Text style = {styles.buttonText}> {name} </Text>
        <Icon name="plus" style={styles.icon}/>
        </View>
      </TouchableOpacity>
    );
  }

  addAll() {
    return (
      <TouchableOpacity style = {styles.addButtonSelected} onPress = { () => {
        this.state["selectedAll"] = true; 
      }}>
        <Text style = {styles.addText}> remove all </Text>

      </TouchableOpacity>
    );
  }

  

  render() {
    
    return (      
    <View style = {styles.container}>
    {this.addAll()}
    <ScrollView>
      {this.contact("Marie Burnett")}
      {this.contact("George Burnside")}
      {this.contact("Kara Eng")}
      {this.contact("Isa Fulford")}
      {this.contact("Alex Hennessey")}
      {this.contact("Nat Hojel")}
      {this.contact("Xa Koch")}
      {this.contact("Elianna Knight")}
      {this.contact("Ryan Varis")}
      {this.contact("Lauren Yi")}
      {this.contact("Cam Burton")}
      {this.contact("Thom Henri")}
      {this.contact("Pablo Ocampo")}
      </ScrollView>
      
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

  addButtonSelected: {
    marginTop: 100,
    alignItems: "center",
    alignSelf: 'flex-end', 
    padding: 10,
    height: 50,
    width: 150,
    marginRight: 47,
    borderRadius: 30,
    backgroundColor: "#FED254",
  },
  addText: {
    fontSize: 20,
    color: '#939393',
  },
  contactButton: {
    marginTop: 20,
    alignItems: "center",
    borderRadius: 30,
    padding: 20,
    height: 73,
    width: 336,
    alignSelf: 'center',
    backgroundColor: "#FED254",
  },
  contactText: {
    flexDirection: 'row', 
    alignItems: 'baseline',
    color: '#939393',
  },
  buttonText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 30,
    color: '#939393',
  },
  
});