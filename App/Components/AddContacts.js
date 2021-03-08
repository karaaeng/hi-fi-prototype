import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import ButtonBar from './ButtonBar';
import NavigationBar from './NavigationBar';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class AddContacts extends React.Component {
  constructor(props){
    super(props);
    //See what props our StarWarsCard renders with
    console.log(JSON.stringify(props));
    
  }
  

  contact(name) {
    return (
      <TouchableOpacity style = {styles.contactButton} onPress = { () => {
        console.log("person added"); 
      }}>
      <View style = {styles.contactText}>
        <Text style = {styles.buttonText}> {name} </Text>
        <Icon name="plus" style={styles.icon}/>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    
    return (      
    <View style = {styles.container}>
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

  contactButton: {
    marginTop: 100,
    alignItems: "center",
    borderRadius: 30,
    padding: 20,
    height: 73,
    width: 336,
    alignSelf: 'center',
    backgroundColor: "#FFF0C1",
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