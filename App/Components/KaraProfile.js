import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, TouchableOpacity } from 'react-native';
import EditProfile from './EditProfile';
import ButtonBar from './ButtonBar';
import NavigationBar from './NavigationBar';


export default class KaraProfile extends React.Component {
  constructor(props){
    super(props); 
    //See what props our StarWarsCard renders with
    console.log("kara fake profile");
    
  }

  statusIcon(status) {

    if (status ==="available"){
      return( 
        <View style = {styles.statusContainer}>
        <Text style = {styles.statusText}> {status} </Text>
        <Image style = {styles.status} source = {Images.available}/>
        </View>
        );
    } else if (status ==="on hold"){
      return (
      <View style = {styles.statusContainer}>
        <Text style = {styles.statusText}> {status} </Text>
        <Image style = {styles.status} source = {Images.onhold}/>
        </View>
        );
    } else{
      return(
      <View style = {styles.statusContainer}>
        <Text style = {styles.statusText}> {status} </Text>
        <Image style = {styles.status} source = {Images.open}/>
        </View>
        );
    }
    
  }

  location(){
     return (
      <View style = {styles.informationText}> 
      <Text style={ styles.category}>location </Text> 
      <Text style={ styles.theirInfo}> Los Angeles, CA </Text> 
      </View>
     );
  }
  pronouns(){
    return (
      <View style = {styles.informationText}> 
      <Text style={ styles.category}>pronouns </Text> 
      <Text style={ styles.theirInfo}> she/her </Text> 
      </View>
     );
  }

  createConnection() {
    return (
      <TouchableOpacity style = {styles.button} onPress = { () => {
        console.log("serach your circle pressed"); 
      }}>
        <Text style = {styles.buttonText}> create connection </Text>
       
      </TouchableOpacity>
    );
  }

  titleText(){
    return(
    <Text style = {styles.titleText}> connecting Marie </Text>
    );
  }

  interests(){
      return (
      <View style = {styles.informationText}> 
      <Text style={ styles.category}>interests </Text> 
      <Text style={ styles.theirInfo}> knitting, dogs, reading </Text> 
      </View>
     );  }

  render() {
    const fake = "available";
    let status; 
      
    return (     
    <View style = {styles.container}>
      <NavigationBar logo ={true} />
        {this.titleText()}
        <View style = {styles.profile}>
          <View style = {styles.profileCard}>
          
          <Image style={styles.profilePicture} source={Images.kara}/>
          

          <View style = {styles.profileText}>
          <View style = {styles.profileNameAndStatus}>
           <Text style={ styles.name }>Kara </Text>
            {this.statusIcon("available")}
          </View>
          <View style = {styles.information}>
           {this.location()}         
           {this.pronouns()}
           {this.interests()}
            </View>
            
            
            
          </View>
        </View>
        {this.createConnection()}
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
  button: {
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#FED254",
    borderRadius: 30,
    padding: 20,
    height: 73,
    width: 336,
    alignSelf: 'center',
  },
  titleText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 30,
    color: '#FED254',
    marginBottom: 20,
    alignSelf: 'center',
  },
  buttonText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 30,
    color: '#4A4A4A',
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
  statusContainer: {
    flexDirection: 'column'
  },
  status: {
    height: Dimensions.get('window').width * .1,
    resizeMode: 'contain', 
    alignContent: 'center',
  },
  statusText: {
    fontSize: 20, 
    alignSelf: 'center',
    alignContent: 'center',
 
  },
  profilePicture: {
    //flex: 3, 
    width: Dimensions.get('window').width * .7,
    height: Dimensions.get('window').width * .7,
    alignSelf: 'center', 
    borderRadius: Dimensions.get('window').height * .5 * 0.5,
  }, 
  profileText: {
    //flex: 1, 
    padding: 10,
    alignContent: 'center',
    alignItems: 'center'
  }
  
});