import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions } from 'react-native';

export default class NavigationBar extends React.Component {
  constructor(props){
    super(props);

    //See what props our StarWarsCard renders with
    console.log(JSON.stringify(props));
  }

  render() {

    return (
      <View style = {styles.navigationBar}>
        <Image style = {styles.navigationBarChat} source={Images.chat} />
        <Image style = {styles.navigationBarSettings} source={Images.settings} />
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
  navigationBarChat: {
    height: Platform.OS === 'ios' ? 44 : 56,
    width: Dimensions.get('window').width * .2,
    resizeMode: 'contain', 
    tintColor: '#4A4A4A'
  }, 
  navigationBarSettings: {
    height: Platform.OS === 'ios' ? 44 : 56,
    width: Dimensions.get('window').width * .2,
    resizeMode: 'contain', 
    tintColor: '#4A4A4A'
  }
});
