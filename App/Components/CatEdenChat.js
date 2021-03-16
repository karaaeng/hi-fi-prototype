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



export default function CatEdenChat({navigation}) {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(0);

  function chatBubble(image, name, givenText){
    if ({isVisible} !== 0){
      return(
        <View>
          <View style = {styles.receivedmessage}> 
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
        <View style = {styles.sentmessage}> 
          <Text style = {styles.chatText}>{givenText}</Text>
        </View>

        <View style = {styles.helpSend}> 
          <View style = {styles.chatDetails}>
            <Image style = {styles.profileImages} source = {image}/>
            
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
        <Text style = {styles.headerText}>Isa & Eden</Text>
      </View> 

    );
  }
  
  function inputText() {
    return (
      <View style={styles.inputBar}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <TextInput
            placeholder= "message"
            value={text}
            onChangeText={(text) => {
            setText(text)
          }}
          style={styles.textInput}
          />
        </TouchableWithoutFeedback>
        <View style = {styles.iconcontainer}>
        <Icon name="arrow-up" style={styles.icon} 
              onPress={() => {
                setIsVisible(1)   
          }}
        />
        </View>
        </View>
        

    );
  }

  return (      
    <View style = {styles.container}>
    {imageHeader(Images.cat, Images.isa, Images.eden)}
    <ScrollView>
     {chatBubble(Images.isa, "Isa", "Hey Cat & Eden! I love you both so much and know you'd make the cutest friends! Now go bond over your love for me :)")}
     {chatBubble(Images.eden, "Eden", "FINALLY! So nice to meet you cat!")}
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
    height: 60,
    width: 345,
    borderRadius: 35,
    marginBottom: 10,
    marginTop: 10,
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
  sentmessage: {
    backgroundColor: "#FFF0C1", 
    borderRadius: 30, 
    padding: 10,
    marginRight: 20,
    width: 250,
    justifyContent: 'center', 
    alignSelf: 'flex-end',
  },
  receivedmessage: {
    backgroundColor: "#E5E5E5", 
    borderRadius: 30, 
    padding: 10,
    marginLeft: 20,
    width: 250,
    justifyContent: 'center', 
    alignSelf: 'flex-end',
    padding: 10,
    alignSelf: 'flex-start', 
  },
  imageContainer: {
    alignSelf: 'center', 
    flexDirection: 'row', 
    padding: 35
  },
  headerContainer: {
    marginTop: 5,
    flexDirection: 'column', 
    alignItems: 'center', 
    marginBottom: -10,
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
    flexDirection: "row",
    marginBottom: 15,
  },
  iconcontainer: {
      backgroundColor: "#E5E5E5",
      borderRadius: 22,
  },
  icon: {
    fontSize: 25,
    color: '#4A4A4A',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 9,
  }, 
  headerImage: {
    width: 60, 
    height: 60, 
    borderRadius: 30,
  },
  profileImages:{
    width: 50, 
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  secondImage:{
    width: 50, 
    height: 50,
    borderRadius: 25,
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
    marginLeft: -5,
    marginRight: -5,
    textAlignVertical: "center",
  },
  chatText:{
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 18,
    color: '#4A4A4A',
    padding: 10,
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

});