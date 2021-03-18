import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Keyboard, TextInput, Dimensions, ScrollView, TouchableOpacity, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import NavigationBar from './NavigationBar';
import NotificationBar from './NotificationBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';



export default function KaraIsaChat({route, navigation}) {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(0);
  const [didLeave, setDidLeave] = useState(false);
  const [messages, setMessages] = useState([]);



  useEffect(() => {
    setMessages([
      {
        _id: 2,
        text: "Wow, this friendship comes with great perks!",
        createdAt: new Date(),
        user: {
          _id: 3,
          name: 'Isa',
          avatar: require('../Images/isabella.jpeg'),
        },
      },
      {
        _id: 3,
        text: "Luckily I just bought more yarn!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Kara',
          avatar: require('../Images/kara.jpg'),
        },
      },
      {
        _id: 1,
        text: "If you get along well, Kara might knit you a custom sweater!",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Cat',
          avatar: require('../Images/Profiles/cat.jpg'),
        },
        
      },
      
    ])
  }, [])
 const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

 const onPress = useCallback((user = {}) => {
    console.log("NO");
  }, [])

 function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <Icon name="arrow-up" style={styles.icon} 
              onPress={() => {
                setIsVisible(1)   
          }}
        />
        </View>
      </Send>
    );
  }

  function renderInputToolbar(props) {
    return(
      <View>

      </View>
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
  function renderInputToolbar(props) {
    
    return(
      <View>
      </View>
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
        <Text style = {styles.headerText}>Kara & Isa</Text>
      </View> 

    );
  }
  
  let leftChat = null;

    if (didLeave === true) {
      leftChat =
        <Text style = {styles.notice}>you left the chat.</Text>;
    } else {
      leftChat =
        <View></View>;
    }


  return (      
    <View style = {styles.container}>
    {imageHeader(Images.kara, Images.cat, Images.isa)}
    
    <GiftedChat 
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
        name: 'Cat',
        avatar: require('../Images/Profiles/cat.jpg'),
      }}
      renderBubble={renderBubble}
      renderInputToolbar={renderInputToolbar}
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
    <Text style = {styles.notice}>you left the chat.</Text>
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
  notice:{
    alignSelf: "center",
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 20,
    color: '#4A4A4A',
    marginTop: 10,
    marginBottom: 20,
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
  notice:{
    alignSelf: "center",
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 20,
    color: '#4A4A4A',
    marginTop: 10,
    marginBottom: 20,
  },
  lastImage: {
    marginLeft: -20
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
  senderChatDetails:{
    alignSelf: "flex-end",
    alignItems: 'center',
    flexDirection: "row",
    marginBottom: 15,
    marginRight: 15,
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