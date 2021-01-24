import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions } from 'react-native';

export default class ButtonBar extends React.Component {
  constructor(props){
    super(props);

    //See what props our StarWarsCard renders with
    console.log(JSON.stringify(props));
  }

  render() {

    return (
    <View style = {styles.buttonBar}>
        <Image style = {styles.buttonSecondTier} source={Images.rewind} />
        <Image style = {styles.buttonFirstTier} source={Images.nope} />
        <Image style = {styles.buttonSecondTier} source={Images.boost} />
        <Image style = {styles.buttonFirstTier} source={Images.like} />
        <Image style = {styles.buttonSecondTier} source={Images.superLike} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonBar: {
    marginBottom: 100, 
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
    margin: Dimensions.get('window').width * .025
  }, 
  buttonFirstTier: {
    width: Dimensions.get('window').width * .15,
    height: Dimensions.get('window').width * .15,
    resizeMode: 'contain', 
    backgroundColor: 'white', 
    borderRadius: Dimensions.get('window').height * .1 * 0.5,
  },
  buttonSecondTier: {
    width: Dimensions.get('window').width * .1,
    height: Dimensions.get('window').width * .1,
    resizeMode: 'contain', 
    backgroundColor: 'white', 
    borderRadius: Dimensions.get('window').height * .05 * 0.5
  }
  
});