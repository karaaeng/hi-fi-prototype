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


export default function Profile({navigation}) {
  const [text, setText] = useState("");

  function whichOne(){

    return (<View style = {styles.navigationBar}>
      <TouchableOpacity onPress = { () => {
        navigation.navigate("AddContacts");
      }}>
      <Icon name="address-book-o" style={styles.navigationBarAddress}/>
      </TouchableOpacity>

      <TouchableOpacity onPress = { () => {
        
        navigation.navigate("EditProfile");
      }}>
      <Icon name="gear" style={styles.navigationBarSettings}/>
    </TouchableOpacity>
          
      
    </View>);
    
  }

  function statusIcon(status) {

    if (status ==="available"){
      return( <View style = {styles.statusContainer}>
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

  function location(location){
     return (
      <View style = {styles.informationText}> 
      <Text style={ styles.category}>location </Text> 
      <Text style={ styles.theirInfo}>{location} </Text> 
      </View>
     );
  }
  function pronouns(pronouns){
    return (
      <View style = {styles.informationText}> 
      <Text style={ styles.category}>pronouns </Text> 
      <Text style={ styles.theirInfo}>{pronouns} </Text> 
      </View>
     );
  }

  function interests(interests){
      return (
      <View style = {styles.informationText}> 
      <Text style={ styles.category}>interests </Text> 
      <Text style={ styles.theirInfo}>{interests} </Text> 
      </View>
     );  }

  
    const fakestatus = "available";
    const fakename = "Cat";
    const fakeinterests = "music, coffee, dogs";
    const fakepronouns = "she/her";
    const fakelocation = "stanford, ca";
    let status; 
    
    return (     
    <View style = {styles.container}>
      {whichOne()}

        <View style = {styles.profile}>
          <View style = {styles.profileCard}>
          
          <Image style={styles.profilePicture} source={Images.harold}/>
          

          <View style = {styles.profileText}>
          <View style = {styles.profileNameAndStatus}>
           <Text style={ styles.name }>Cat {fakestatus}</Text>
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
    color: '#4A4A4A'
  }, 
  navigationBarSettings: {
    fontSize: 35,
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