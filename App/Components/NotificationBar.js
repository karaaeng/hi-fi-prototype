import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class NotificationBar extends React.Component {
  constructor(props){
    super(props);

    //See what props our StarWarsCard renders with
    console.log(JSON.stringify(props));
  }

  whichOne(map){
    if (map === true){
      return(
      <View style = {styles.navigationBar}>
      <TouchableOpacity style = {styles.addButton} onPress = { () => {
        console.log("switched to feed view"); 
      }}>
        <Image style = {styles.logo} source = {Images.map}/>   
      </TouchableOpacity>
                  
      </View>);
    } else{
      return(
      <View style = {styles.navigationBar}>
      <TouchableOpacity style = {styles.addButton} onPress = { () => {
        console.log("switched to map view"); 
      }}>
        <Image style = {styles.logo} source = {Images.feed}/>   
      </TouchableOpacity>
                  
      </View>);
    }
      
    
  }

  render() {

    return (
      <View>
      {this.whichOne(this.props.logo)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigationBar: {
    marginTop: 50, 
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
