import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import ButtonBar from './ButtonBar';
import NavigationBar from './NavigationBar';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function AddContacts({navigation}) {
  const [text, setText] = useState("");


  function contact(name) {
    return (
      <TouchableOpacity style = {styles.contactButton} onPress = { () => {
        navigation.navigate('AddContacts');
      }}>
      <View style = {styles.contactText}>
        <Text style = {styles.buttonText}> {name} </Text>
        <Icon name="plus" style={styles.icon}/>
        </View>
      </TouchableOpacity>
    );
  }

  function addAll() {
    return (
      <TouchableOpacity style = {styles.addButtonSelected} onPress = { () => {
        console.log("selectedAl");
      }}>
        <Text style = {styles.addText}> remove all </Text>

      </TouchableOpacity>
    );
  }

  


    return (      
    <View style = {styles.container}>
    {addAll()}
    <ScrollView>
      {contact("Marie Burnett")}
      {contact("George Burnside")}
      {contact("Kara Eng")}
      {contact("Isa Fulford")}
      {contact("Alex Hennessey")}
      {contact("Nat Hojel")}
      {contact("Xa Koch")}
      {contact("Elianna Knight")}
      {contact("Ryan Varis")}
      {contact("Lauren Yi")}
      {contact("Cam Burton")}
      {contact("Thom Henri")}
      {contact("Pablo Ocampo")}
      </ScrollView>
      
    </View>
    );
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