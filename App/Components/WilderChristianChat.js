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



export default function WilderChristianChat({navigation}) {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(0);

  function chatBubble(image, name, givenText){
    if ({isVisible} !== 0){
      return(
        <View>
          <View style = {styles.message}> 
          <Text style = {styles.chatText}>{givenText}</Text>
          </View>

          <View style = {styles.help}> 
            <View style = {styles.chatDetails}>
              <Image style = {styles.profileImages} source = {image}/>
              <Text style = {styles.peopleInChat}> {name} </Text>
            </View>
          </View>

        </View>
      );
    }
  }

  function sendChat(image, name, givenText){
    console.log({isVisible})
    if ({isVisible} !== 0 ){
      console.log('got here');
      return(
      <View>
        <View style = {styles.message}> 
          <Text style = {styles.chatSent}>{givenText.text}</Text>
        </View>

        <View style = {styles.helpSend}> 
          <View style = {styles.chatDetails}>
            <Image style = {styles.profileImages} source = {image}/>
            <Text style = {styles.peopleInChat}> {name} </Text>
          </View>
        </View>

      </View>
    );
    }
    
  }
  
  function imageHeader (image1, image2, image3) {
    return(
      <View style = {styles.headerContainer}>
        <View style = {styles.imageContainer}> 
          <View style = {styles.firstImage}>
            <Image style = {styles.headerImage} source = {image1}/>
          </View>
          <View style = {styles.middleImage}> 
            <Image style = {styles.headerImage} source = {image2}/>
          </View>
          <View style = {styles.lastImage}>
            <Image style = {styles.headerImage} source = {image3}/>
          </View>
        </View>
        <Text style = {styles.headerText}>you, Isa, & Eden</Text>
      </View> 

    );
  }
  
  function inputText() {
    return (
      <View style={styles.inputBar}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <TextInput
            value={text}
            onChangeText={(text) => {
            setText(text)
          }}
          style={styles.textInput}
          />
        </TouchableWithoutFeedback>
        <Icon name="arrow-circle-o-up" style={styles.icon} 
              onPress={() => {
                setIsVisible(1)
                
          }}
        />
        </View>
        

    );
  }

  return (      
    <View style = {styles.container}>
    <Text style = {styles.titleText} > chat </Text>
    {imageHeader(Images.harold, Images.wilder, Images.christian)}
    <ScrollView>
     {sendChat(Images.harold, "Me", {text})}
     {chatBubble(Images.wilder, "Wilder", "Hey, nice to meet you!")}
     {chatBubble(Images.christian, "Christian", "I've heard so much about you!")}

  
      </ScrollView>
      {inputText()}
      <ButtonBar navigation = {navigation} which = {"chat"}/>
    </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center', 
    justifyContent: 'space-evenly', 
    backgroundColor: "#FFFF"
  },
  inputBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#E5E5E5',
    height: 81,
    width: 345,
    borderRadius: 35,
    marginTop: 30,
  },
  textInput: {
    height: 81,
    width: 270,
  },
      
  middleImage: {
    marginTop: -30, 
    marginLeft: -20
  },
  headerText:{
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 24,
    color: '#4A4A4A',
    marginTop: -20,
    paddingBottom: 20
  },

  lastImage: {
    marginLeft: -20
  },
  message: {
    borderRadius: 20
  },
  imageContainer: {
    alignSelf: 'center', 
    flexDirection: 'row', 
    padding: 35
  },
  headerContainer: {
    flexDirection: 'column', 
    alignItems: 'center', 
  },
  help:{
    margin: 10,
    alignSelf: 'flex-start', 
  },
  helpSend:{
    margin: 10,
    alignSelf: 'flex-end'
  },
  chatDetails:{
    alignSelf: 'center', 
    alignItems: 'center',
  },
  icon: {
    fontSize: 35,
    color: '#4A4A4A'
  }, 
  headerImage: {
    width: 60, 
    height: 60, 
    borderRadius: 30
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

  notification: {
    marginTop: 10,
    
    borderRadius: 30,
    padding: 20,
    height: 150,
    width: 400,
    borderBottomWidth: 2,
    borderColor: "#939393",
    alignSelf: 'center',
  },

  peopleInChat:{
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 18,
    color: '#4A4A4A',
    marginLeft: 10,
    marginRight: 15,
    alignSelf: 'baseline'
  },
  chatText:{
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 18,
    color: '#4A4A4A',
    marginLeft: 20,
    width: 250,
    justifyContent: 'center', 
    backgroundColor: "#E5E5E5", 
    borderRadius: 20, 
    padding: 10,
  },
  chatSent:{
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 18,
    color: '#4A4A4A',
    width: 250,
    marginRight: 20,
    justifyContent: 'center', 
    backgroundColor: "#FFF0C1", 
    alignSelf: 'flex-end',
    padding: 10,
    borderRadius: 20,

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