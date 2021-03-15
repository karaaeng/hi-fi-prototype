import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, TouchableOpacity } from 'react-native';
import EditProfile from './EditProfile';
import ButtonBar from './ButtonBar';
import NavigationBar from './NavigationBar';


export default function ChristianProfile ({navigation}){
  const [text, setText] = useState("");

  function statusIcon(status) {

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

  function location(){
     return (
      <View style = {styles.informationText}> 
      <Text style={ styles.category}>location </Text> 
      <Text style={ styles.theirInfo}> Salt Lake City, Utah </Text> 
      </View>
     );
  }
  function pronouns(){
    return (
      <View style = {styles.informationText}> 
      <Text style={ styles.category}>pronouns </Text> 
      <Text style={ styles.theirInfo}> he/him </Text> 
      </View>
     );
  }

  function searchCircle() {
    return (
      <TouchableOpacity style = {styles.button} onPress = { () => {
        console.log("serach your circle pressed"); 
      }}>
        <Text style = {styles.buttonText}> search your circle </Text>
       
      </TouchableOpacity>
    );
  }

  function titleText(){
    return(
    <Text style = {styles.titleText}> Viewing Christian </Text>
    );
  }

  function interests(){
      return (
      <View style = {styles.informationText}> 
      <Text style={ styles.category}>interests </Text> 
      <Text style={ styles.theirInfo}> fishing, hiking, Rick and Morty </Text> 
      </View>
     );  }


    const fake = "available";
    let status; 
    
    return (     
    <View style = {styles.container}>
        {titleText()}
        <View style = {styles.profile}>
          <View style = {styles.profileCard}>
          
          <Image style={styles.profilePicture} source={Images.christian}/>
          

          <View style = {styles.profileText}>
          <View style = {styles.profileNameAndStatus}>
           <Text style={ styles.name }>Christian </Text>
            {statusIcon("open")}
          </View>
          <View style = {styles.information}>
           {location()}         
           {pronouns()}
           {interests()}
            </View>
            
            
            
          </View>
        </View>
      </View>
      <ButtonBar navigation = {navigation} which = {""}/>
    </View> 
    );
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
    titleText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 30,
    color: '#FED254',
    marginBottom: 20,
    alignSelf: 'center',
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
  