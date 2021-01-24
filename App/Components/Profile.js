import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions } from 'react-native';

export default class Profile extends React.Component {
  constructor(props){
    super(props);

    //See what props our StarWarsCard renders with
    console.log(JSON.stringify(props));
  }

  render() {

    return (      
      <View style = {styles.profile}>
        <View style = {styles.profileCard}>
        <Image style={styles.profilePicture} source={this.props.image} />

        <View style = {styles.profileText}>
          <Text style={ { fontWeight: 'bold', fontSize: 25 } }>{this.props.profile.name}, {this.props.profile.age} </Text>
          <Text style={ { color: 'grey', fontSize: 15 } }>{this.props.profile.occupation}</Text>
        </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  profile:{
    flex: 1, 
    //flexDirection: 'column', 
  }, 
  profileCard: {
    
    //alignItems: 'center', 
    justifyContent: 'flex-start', 
    //width: Dimensions.get('window').width * .9,
    borderWidth: 2,
    borderColor: '#C5C5C5', 
    backgroundColor: 'white', 
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10,     
    alignSelf: 'center'
  }, 
  profilePicture: {
    //flex: 3, 
    width: Dimensions.get('window').width * .9,
    height: Dimensions.get('window').width * .9,
    alignSelf: 'center', 
  
    resizeMode: 'contain'
  }, 
  profileText: {
    //flex: 1, 
    padding: 10,
    alignContent: 'flex-start',
    alignItems: 'flex-start'
  }
  
});