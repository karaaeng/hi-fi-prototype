import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class NavigationBar extends React.Component {
  constructor(props){
    super(props);

    //See what props our StarWarsCard renders with
    console.log(JSON.stringify(props));
  }

  render() {

    return (
      <View style = {styles.navigationBar}>
        <Icon name="address-book-o" style={styles.navigationBarAddress}/>
        <TouchableOpacity onPress = { () => {
          
          console.log("settings pressed");
        }}>
        <Icon name="gear" style={styles.navigationBarSettings}/>
      </TouchableOpacity>
            
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigationBar: {
    marginTop: 50, 
    marginBottom: 100, 
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    height: Platform.OS === 'ios' ? 44 : 56,
    margin: Dimensions.get('window').width * .025
  },
  navigationBarAddress: {
    fontSize: 35,
    tintColor: '#4A4A4A'
  }, 
  navigationBarSettings: {
    fontSize: 35,
    tintColor: '#4A4A4A'
  }
});
