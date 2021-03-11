import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function NotificationBar({navigation}) {
  const [text, setText] = useState("");


  function whichOne(){
    if (true){
      return(
      <View style = {styles.navigationBar}>
      <TouchableOpacity style = {styles.addButton} onPress = { () => {
        navigation.navigate('MapFeed')
      }}>
        <Image style = {styles.logo} source = {Images.map}/>   
      </TouchableOpacity>
                  
      </View>);
    } else{
      return(
      <View style = {styles.navigationBar}>
      <TouchableOpacity style = {styles.addButton} onPress = { () => {
        navigation.navigate('FriendFeed')
      }}>
        <Image style = {styles.logo} source = {Images.feed}/>   
      </TouchableOpacity>
                  
      </View>);
    }
      
    
  }


    return (
      <View>
      {whichOne()}
      </View>
    );
}

const styles = StyleSheet.create({
  navigationBar: {
    marginTop: 20, 
    marginBottom: 3, 
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    height: Platform.OS === 'ios' ? 44 : 56,
    margin: Dimensions.get('window').width * .025
  },

  logo: {
    alignItems: 'center', 
    alignContent: 'center',
    alignSelf: 'center',
    marginLeft: 70, 
    width: Dimensions.get('window').width * .6,
    height: Dimensions.get('window').width * .1,
    resizeMode: 'contain'
  }
});
