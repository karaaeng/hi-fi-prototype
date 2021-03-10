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

  whichOne(logo){
    if (logo === true){
      return(
      <View style = {styles.navigationBar}>
        <Image style = {styles.logo} source = {Images.logo}/>            
      
      </View>);
    }else{
      return (<View style = {styles.navigationBar}>
        <Icon name="address-book-o" style={styles.navigationBarAddress}/>
        <TouchableOpacity onPress = { () => {
          
          console.log("settings pressed");
        }}>
        <Icon name="gear" style={styles.navigationBarSettings}/>
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
    marginBottom: 50, 
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
