import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions } from 'react-native';
import EditProfile from './EditProfile';
import ButtonBar from './ButtonBar';
import NavigationBar from './NavigationBar';


export default class Profile extends React.Component {
  constructor(props){
    super(props);
    //See what props our StarWarsCard renders with
    console.log(JSON.stringify(props));
    
  }

  statusIcon(props) {
    if (props.status ==="available"){
      return( <Image style = {styles.status} source = {Images.available}/>);
    } else if (props.status ==="on hold"){
      return (<Image style = {styles.status} source = {Images.onhold}/>);
    } else{
      return(<Image style = {styles.status} source = {Images.open}/>);
    }
    
  }

  location(props){
     return (
      <View style = {styles.informationText}> 
      <Text style={ styles.category}>location </Text> 
      <Text style={ styles.theirInfo}>{props.location} </Text> 
      </View>
     );
  }
  pronouns(props){
    return (
      <View style = {styles.informationText}> 
      <Text style={ styles.category}>pronouns </Text> 
      <Text style={ styles.theirInfo}>{props.pronouns} </Text> 
      </View>
     );
  }

  interests(props){
      return (
      <View style = {styles.informationText}> 
      <Text style={ styles.category}>interests </Text> 
      <Text style={ styles.theirInfo}>{props.interests} </Text> 
      </View>
     );  }

  render() {
    const fake = "available";
    let status; 
    
    return (     
    <View style = {styles.container}>
      <NavigationBar profile ={this.props.profile} />

        <View style = {styles.profile}>
          <View style = {styles.profileCard}>
          
          <Image style={styles.profilePicture} source={this.props.image}/>
          

          <View style = {styles.profileText}>
          <View style = {styles.profileNameAndStatus}>
           <Text style={ styles.name }>{this.props.profile.name} {this.props.status}</Text>
          {this.statusIcon(this.props.profile)}
          </View>
          <View style = {styles.information}>
           {this.location(this.props.profile)}         
           {this.pronouns(this.props.profile)}
           {this.interests(this.props.profile)}
            </View>
          </View>
        </View>
      </View>
      <ButtonBar profile ={this.props.profile}/>
    </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center', 
    justifyContent: 'space-between'
  },
  name: { 
    fontWeight: 'bold', 
    fontSize: 25, 
    alignSelf: 'center' 
  }, 
  category: {
    color: '#FED254', 
    fontSize: 15
  },
  theirInfo: {
    fontSize: 15, 
    color: '#4A4A4A'
  },
  informationText:{
    flexDirection: 'row'
  },
  information: {
    alignSelf: 'center',
    alignContent: 'flex-start'
  },
  profile:{
    flex: 1, 
    //flexDirection: 'column', 
  }, 
  profileNameAndStatus:{
    flexDirection: 'column',
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  status: {
    //marginLeft: Dimensions.get('window').width * .7, 
    alignSelf: 'center', 
    height: Dimensions.get('window').width * .1,
    resizeMode: 'contain'
  },
  profilePicture: {
    //flex: 3, 
    width: Dimensions.get('window').width * .7,
    height: Dimensions.get('window').width * .7,
    alignSelf: 'center', 
    borderRadius: Dimensions.get('window').height * .5 * 0.5,
    resizeMode: 'contain'
  }, 
  profileText: {
    //flex: 1, 
    padding: 10,
    alignContent: 'center',
    alignItems: 'center'
  }
  
});