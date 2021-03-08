import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, TouchableOpacity } from 'react-native';

export default class ButtonBar extends React.Component {
  constructor(props){
    // this.handleProfileClick = this.handleProfileClick.bind(this);
    // this.handleChatClick = this.handleChatClick.bind(this);
    // this.handleNotificationsClick = this.handleNotificationsClick.bind(this);
    // this.handleFriendFeedClick = this.handleFriendFeedClick.bind(this);
    super(props);
    // this.state = {selected: props.selected};
    //See what props our StarWarsCard renders with
    console.log(JSON.stringify(props));
    console.log('state', JSON.stringify(this.state));
  }


  // handleFriendFeedClick(){
  //   this.setState({selected: 'friendfeed'});
  // }
  // handleProfileClick(){
  //   this.setState({selected: 'profile'});
  // }
  // handleChatClick(){
  //   this.setState({selected: 'chat'});
  // }
  // handleNotificationsClick(){
  //   this.setState({selected: 'notifications'});
  // }
  connections(props){
    if (props.selected === 'connections'){
      return (<Image style = {styles.buttonFirstTier} source={Images.connectionsselected} />);
    } else{
      return (<Image style = {styles.buttonFirstTier} source={Images.connections} />);
    }
  }

  profile(props){
    if (props.selected === 'profile'){
      return (<Image style = {styles.buttonFirstTier} source={Images.profileselected} />);
    } else{
      return (<Image style = {styles.buttonFirstTier} source={Images.profile} />);
    }
  }

  chat(props){
    if (props.selected === 'chat'){
      return (<Image style = {styles.buttonFirstTier} source={Images.chatselected} />);
    } else{
      return (<Image style = {styles.buttonFirstTier} source={Images.chat} />);
    }
  }

  home(props){
    if (props.selected === 'notifications'){
      return (<Image style = {styles.buttonFirstTier} source={Images.homeselected} />);
    } else{
      return (<Image style = {styles.buttonFirstTier} source={Images.home} />);
    }
  }

  render() {

    return (
    <View style = {styles.buttonBar}>
      <TouchableOpacity onPress = { () => {
        console.log("home pressed"); 
      }}>
        {this.home(this.props.profile)}
      </TouchableOpacity>

      <TouchableOpacity onPress = { () => {
        console.log("chat pressed"); 
      }}>
        {this.chat(this.props.profile)}
      </TouchableOpacity>

      <TouchableOpacity onPress = { () => {
        console.log("connections pressed"); 
      }}>
        {this.connections(this.props.profile)}
      </TouchableOpacity>

      <TouchableOpacity onPress = { () => {
        console.log("profile pressed"); 
      }}>
        {this.profile(this.props.profile)}
      </TouchableOpacity>
        
        
        
        
    </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonBar: {
    marginBottom: 100, 
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