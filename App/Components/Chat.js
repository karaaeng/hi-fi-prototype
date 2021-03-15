import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Keyboard, TextInput, Dimensions, ScrollView, TouchableOpacity, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import ButtonBar from './ButtonBar';
import NavigationBar from './NavigationBar';
import NotificationBar from './NotificationBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function Chat({navigation}) {
  const [searchTerm, setSearchTerm] = useState("");

  function searchBar(){
    return(
    <View style={styles.searchBar}>
      <Icon name="search" style={styles.searchicon} onPress={() => {console.log({searchTerm})}}/>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
              <TextInput value={searchTerm} onChangeText={(searchTerm) => {setSearchTerm(searchTerm)}} style={styles.textInput} placeholder = "Search your chats"/>
          </TouchableWithoutFeedback>
      </View>
      ); 
  }

  function notification(image1, image2, name1, name2, preview, first, chatName) {
    if (first ===true){
       return (
      <TouchableOpacity style = {styles.firstNotification} onPress = { () => {
        navigation.navigate(chatName)
      }}>
      <View style = {styles.notificationInside}>

      <Image style = {styles.profileImages} source = {image1}/>
      <Image style = {styles.secondImage} source = {image2}/>
      <View style = {styles.chat}>
        <Text style = {styles.peopleInChat}> {name1} & {name2} </Text>
        <Text style = {styles.chatPreview}> {preview} </Text>
      </View>
      </View>
      </TouchableOpacity>
    );
    }else{
      return (
      <TouchableOpacity style = {styles.notification} onPress = { () => {
        navigation.navigate(chatName)
      }}>
      <View style = {styles.notificationInside}>
      <Image style = {styles.profileImages} source = {image1}/>
      <Image style = {styles.secondImage} source = {image2}/>
      <View style = {styles.chat}>
        <Text style = {styles.peopleInChat}> {name1} & {name2} </Text>
        <Text style = {styles.chatPreview}> {preview} </Text>
      </View>
        </View>
      </TouchableOpacity>
    );
    }

   
  }

  


  return (      
    <View style = {styles.container}>
    <Text style = {styles.titleText} > chat </Text>
    {searchBar()}
    <ScrollView>
      {notification(Images.harold, Images.eden, "Isa", "Eden", 
        "Hey Cat & Eden!  I love you both so much and know you’d make the cutest friends! Now go...", 
        true, "CatEdenChat")}
      {notification(Images.wilder, Images.christian, "Wilder", "Christian", 
        "You both have absolutley incredible sisters, so...", 
        false, "WilderChristianChat")}
      {notification(Images.kara, Images.harold, "Kara", "Isa", 
        "If you get along well, Kara might  knit you a custom sweater...", 
        false, "KaraIsaChat")}


  
      </ScrollView>
      <ButtonBar navigation = {navigation} which = {"chat"}/>
    </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center', 
    justifyContent: 'space-evenly'
  },
  chat:{
    flexDirection: 'column'
  },
  icon: {
    fontSize: 25,
    tintColor: '#939393'
  }, 
 
  profileImages:{
    width: 40, 
    height: 40,
    borderRadius: 20,
  },
  secondImage:{
    width: 40, 
    height: 40,
    borderRadius: 20,
    marginLeft: -10
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#E5E5E5',
    height: 50,
    width: 375,
    borderRadius: 35,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center', 
    marginLeft: 20,
  },
  textInput: {
    height: 81,
    width: 300,
  },
  searchicon: {
    fontSize: 25,
    color: '#4A4A4A',
    marginRight: 5,
    color: "#E5E5E5",
  },
  notification: {
    height: 150,
    width: 336,
    borderBottomWidth: 2,
    borderColor: "#E5E5E5",
    alignSelf: 'center',
    justifyContent: "center",
  },
  firstNotification: {
    height: 150,
    width: 336,
    borderTopWidth: 2,
    borderColor: "#E5E5E5",
    alignSelf: 'center',
    justifyContent: "center",
    borderBottomWidth: 2,

  },
  peopleInChat:{
    fontFamily: 'Comfortaa_400Bold',
    fontSize: 18,
    color: '#4A4A4A',
    marginLeft: 20,
    marginRight: 50,
    textAlignVertical: "center",
  },
  chatPreview:{
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 14,
    color: '#4A4A4A',
    marginLeft: 20,
    marginRight: 50,
    textAlignVertical: "center",
  },
  navigationBar: {
    alignSelf: 'center',
    width: Dimensions.get('window').width * .4,
    height: Dimensions.get('window').height * 0.05,
    resizeMode: 'contain'
  },
  notificationInside: {
    flexDirection: 'row', 
    alignItems: 'baseline',
    alignContent: 'space-around',
    color: '#939393',
  },

  titleText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 30,
    color: '#4A4A4A',
    marginBottom: 5,
    alignSelf: 'center',
  },
  
});