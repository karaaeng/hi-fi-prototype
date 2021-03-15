import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function ButtonBar({navigation, which}) {
  const [text, setText] = useState("");

  function feed(selected){
    if (selected === 'feed'){
      return (<Image style = {styles.buttonFirstTier} source={Images.connectionsselected} />);
    } else{
      return (<Image style = {styles.buttonFirstTier} source={Images.connections} />);
    }
  }

  function profile(selected){
    if (selected === 'profile'){
      return (<Image style = {styles.buttonFirstTier} source={Images.profileselected} />);
    } else{
      return (<Image style = {styles.buttonFirstTier} source={Images.profile} />);
    }
  }

  function chat(selected){
    if (selected === 'chat'){
      return (<Image style = {styles.buttonFirstTier} source={Images.chatselected} />);
    } else{
      return (<Image style = {styles.buttonFirstTier} source={Images.chat} />);
    }
  }

  function home(selected){
    if (selected === 'home'){
      return (<Image style = {styles.buttonFirstTier} source={Images.homeselected} />);
    } else{
      return (<Image style = {styles.buttonFirstTier} source={Images.home} />);
    }
  }

  return (
    <View style = {styles.buttonBar}>
      <TouchableOpacity onPress = { () => {
        navigation.navigate('Home');
      }}>
        {home(which)}
      </TouchableOpacity>

      <TouchableOpacity onPress = { () => {
        navigation.navigate('Chat');
      }}>
        {chat(which)}
      </TouchableOpacity>

      <TouchableOpacity onPress = { () => {
        navigation.navigate('FriendFeed');
      }}>
        {feed(which)}
      </TouchableOpacity>

      <TouchableOpacity onPress = { () => {
        navigation.navigate('Profile');
      }}>
        {profile(which)}
      </TouchableOpacity> 
    </View>
    );
}

const styles = StyleSheet.create({
  buttonBar: {
    marginBottom: 20, 
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
    margin: Dimensions.get('window').width * .02
  }, 
  buttonFirstTier: {
    width: Dimensions.get('window').width * .22,
    height: Dimensions.get('window').width * .22,
    resizeMode: 'contain',
    borderRadius: Dimensions.get('window').height * .1 * 0.5,
  },

});