import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, TouchableOpacity } from 'react-native';
import EditProfile from './EditProfile';
import ButtonBar from './ButtonBar';
import NavigationBar from './NavigationBar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  useFonts,
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold,
} from '@expo-google-fonts/comfortaa';


export default function Profile({navigation}) {

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  const [text, setText] = useState("");

  function whichOne(){

    return (<View style = {styles.navigationBar}>
      <TouchableOpacity onPress = { () => {
        navigation.navigate("AddContacts");
      }}>
      <Icon name="address-book-o" style={styles.navigationBarAddress}/>
      </TouchableOpacity>

      <TouchableOpacity onPress = { () => {
        
        navigation.navigate("MapFeed");
      }}>
      <Icon name="gear" style={styles.navigationBarSettings}/>
    </TouchableOpacity>
          
      
    </View>);
    
  }

  function statusIcon(status) {

    if (status ==="asking"){
      return( <View style = {styles.statusContainer}>
        <View style = {styles.status}>
          <Text style = {styles.statusText}> {status} </Text>
        </View>
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

  function location(location){
     return (
      <View style = {styles.informationText}> 
      <Text style={ styles.category}>   location: </Text> 
      <Text style={ styles.theirInfo}>{location} </Text> 
      </View>
     );
  }
  function pronouns(pronouns){
    return (
      <View style = {styles.informationText}> 
      <Text style={ styles.category}>pronouns: </Text> 
      <Text style={ styles.theirInfo}>{pronouns} </Text> 
      </View>
     );
  }

  function interests(interests){
      return (
      <View style = {styles.informationText}> 
      <Text style={ styles.category}>  interests: </Text> 
      <Text style={ styles.theirInfo}>{interests} </Text> 
      </View>
     );  }

  
    const fakestatus = "asking";
    const fakename = "Cat D.";
    const fakeinterests = "music, coffee, dogs";
    const fakepronouns = "she/her";
    const fakelocation = "Stanford, CA";
    let status; 
    
    return (     
    <View style = {styles.container}>
      {whichOne()}

        <View style = {styles.profile}>
          <View style = {styles.profileCard}>
          
          <Image style={styles.profilePicture} source={Images.cat}/>
          

          <View style = {styles.profileText}>
          <View style = {styles.profileNameAndStatus}>
            <Text style={ styles.name }>{fakename}</Text>
            {statusIcon(fakestatus)}
          </View>
          <View style = {styles.information}>
           {location(fakelocation)}         
           {pronouns(fakepronouns)}
           {interests(fakeinterests)}
            </View>
          </View>
        </View>
      </View>
      <ButtonBar navigation = {navigation} which = {"profile"}/>
    </View> 
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center', 
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  name: { 
    fontFamily: "Comfortaa_700Bold",
    fontSize: 44, 
    alignSelf: 'center',
    marginTop: 10,
    color: "#4A4A4A",
  }, 
  category: {
    marginTop: 15,
    color: '#FED254', 
    fontSize: 20,
    fontFamily: "Comfortaa_700Bold",
  },
  theirInfo: {
    marginTop: 15,
    marginLeft: 10,
    fontSize: 20, 
    color: '#4A4A4A',
    fontFamily: "Comfortaa_300Light",
  },
  navigationBar: {
    marginTop:10, 
    marginBottom: 40, 
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    height: Platform.OS === 'ios' ? 44 : 56,
    margin: Dimensions.get('window').width * .025
  },
  navigationBarAddress: {
    fontSize: 40,
    color: '#4A4A4A',
    marginLeft: 10,
  }, 
  navigationBarSettings: {
    fontSize: 40,
    color: '#4A4A4A',
    marginRight: 10,
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
    height: 50,
    width: 150,
    borderRadius: 25,
    resizeMode: 'contain', 
    alignContent: 'center',
    backgroundColor: "#89FF95",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  statusText: {
    fontSize: 20, 
    alignSelf: 'center',
    alignContent: 'center',
    fontFamily: "Comfortaa_400Regular",
  },
  profilePicture: {
    //flex: 3, 
    width: Dimensions.get('window').width * .5,
    height: Dimensions.get('window').width * .5,
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
