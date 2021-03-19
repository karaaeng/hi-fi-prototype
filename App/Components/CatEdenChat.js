import React, {  useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Keyboard, TextInput, Dimensions, ScrollView, TouchableOpacity, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import NavigationBar from './NavigationBar';
import NotificationBar from './NotificationBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import firestore from '../../firebase';
import firebase from 'firebase';

export default function CatEdenChat({navigation}) {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(0);
  const [messages, setMessages] = useState([]);

  const [currUserImage, setUserImage] = useState(null);

  useEffect (() => {
      //get current user info from firebase
      var currUser = firestore.collection("users").doc("123-456-7890");
      
        currUser.get().then((user) => {
            if (user.exists) {
                console.log("Document data:", user.data());
                const data = (user.data());
                setUserImage(data.image);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    });

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "FINALLY! So nice to meet you!",
        createdAt: new Date(),
        user: {
          _id: 3,
          name: 'Eden',
          avatar: require('../Images/eden.jpg'),
        },

      },
      {
        _id: 2,
        text: "Hey guys! I love you both so much and know you'd make the cutest friends! Now go bond over your love for me :)",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Isa',
          avatar: require('../Images/isabella.jpeg'),
        },
        
      },
      
    ])
  }, [])
 const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

 function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}  onPress={() => {
                setIsVisible(1)   
          }}>
          <Icon name="arrow-up" style={styles.icon} 
        />
        </View>
      </Send>
    );
  }
  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            // Here is the color change
            backgroundColor: '#FFF0C1', 
            borderRadius: 30,
            padding: 10
          },
          left:{
            backgroundColor: '#E5E5E5', 
            borderRadius: 30,
            padding: 10
          }
        }}
        textStyle={{
          right: {
            color: '#4A4A4A',
            fontFamily: 'Comfortaa_700Bold',
            fontSize: 18,
          },
          left: {
            color: '#4A4A4A',
            fontFamily: 'Comfortaa_700Bold',
            fontSize: 18,
          }
        }}
      />
    );
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

  return (      
    <View style = {styles.container}>
    {imageHeader(currUserImage, Images.isa, Images.eden)}
    <GiftedChat 
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
        name: 'Cat',
        avatar: currUserImage,
      }}
      renderBubble={renderBubble}
      showUserAvatar
      renderUsernameOnMessage
      renderSend={renderSend}
      alwaysShowSend
      timeTextStyle={{ 
        left: { 
          color: '#4A4A4A', 
          fontFamily: 'Comfortaa_700Bold',
          fontSize: 12, 
        },
        right: { 
          color: '#4A4A4A', 
          fontFamily: 'Comfortaa_700Bold',
          fontSize: 12, 
        },
      }}
    />
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
    marginBottom: 25,
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
    alignItems: 'center',
    flexDirection: "row",
    marginBottom: 15,
  },
  iconcontainer: {
      backgroundColor: "#E5E5E5",
      borderRadius: 22,
  },
  icon: {
    fontSize: 30,
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