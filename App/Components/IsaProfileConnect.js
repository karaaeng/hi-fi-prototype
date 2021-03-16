import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, TouchableOpacity } from 'react-native';
import EditProfile from './EditProfile';
import NavigationBar from './NavigationBar';


export default function IsaProfileConnect ({navigation}){
    const [text, setText] = useState("");

    function statusIcon(status) {
  
      if (status ==="asking"){
        return( <View style = {styles.statusContainer}>
          <View style = {styles.statusAsking}>
            <Text style = {styles.statusText}> {status} </Text>
          </View>
          </View>
          );
      } else if (status ==="open"){
        return( <View style = {styles.statusContainer}>
          <View style = {styles.statusOpen}>
            <Text style = {styles.statusText}> {status} </Text>
          </View>
          </View>
          );
        } else if (status ==="on hold"){
          return( <View style = {styles.statusContainer}>
            <View style = {styles.statusHold}>
              <Text style = {styles.statusText}> {status} </Text>
            </View>
            </View>
            );
      } else {
        return( <View style = {styles.statusContainer}>
          <View style = {styles.statusOpen}>
            <Text style = {styles.statusText}> {status} </Text>
          </View>
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
       );  
    }

  function searchCircle() {
    return (
      <TouchableOpacity style = {styles.button} onPress = { () => {
        navigation.navigate("ConnectingIsaWithFriends");
      }}>
        <Text style = {styles.buttonText}> search your circle </Text>
       
      </TouchableOpacity>
    );
  }

  function titleText(){
    return(
    <Text style = {styles.titleText}> Connecting Isa </Text>
    );
  }

  const fakestatus = "asking";
  const fakename = "Isa F.";
  const fakeinterests = "travelling, running";
  const fakepronouns = "she/her";
  const fakelocation = "Newport Beach, CA";
    
    return (   
        
        <View style = {styles.container}>
            {titleText()}
        <View style = {styles.profile}>
          <View style = {styles.profileCard}>     
          <Image style={styles.profilePicture} source={Images.isa}/>
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
        {searchCircle()}
      </View>
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
      profileCard: {
        marginTop: 30,
      },
      profileNameAndStatus:{
        flexDirection: 'column',
        justifyContent: 'space-between', 
        alignItems: 'center', 
      },
      statusContainer: {
        flexDirection: 'column'
      },
      statusAsking: {
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
      statusOpen: {
        height: 50,
        width: 150,
        borderRadius: 25,
        resizeMode: 'contain', 
        alignContent: 'center',
        backgroundColor: "#FED254",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 20,
      },
      statusHold: {
        height: 50,
        width: 150,
        borderRadius: 25,
        resizeMode: 'contain', 
        alignContent: 'center',
        backgroundColor: "#FD9B9B",
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
      },
    titleText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 30,
    color: '#FED254',
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
   button: {
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#FED254",
    borderRadius: 40,
    padding: 20,
    height: 60,
    width: 240,
    alignSelf: 'center',
  },
  buttonText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 20,
    color: '#4A4A4A',
  },
});