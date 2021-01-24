import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles, Metrics } from './App/Themes';
import { Dimensions } from 'react-native';

export default function App() {
  const haroldProfile = Profiles.harold;
  const [profileImage] = useState(haroldProfile.image);
  const [name] = useState(haroldProfile.name);
  const [age] = useState(haroldProfile.age);
  const [occupation] = useState(haroldProfile.occupation);

  return (
    <View style={styles.container}>
      <View style = {styles.navigationBar}>
        <Image style = {styles.navigationBarChat} source={Images.settings} />
        <Image style = {styles.navigationBarLogo} source = {Images.logo} />
        <Image style = {styles.navigationBarSettings} source={Images.chat} />
      </View>
      <View style = {styles.profileCard}>
        <Image style={styles.profilePicture} source={profileImage} />
          
        <View style = {styles.profileText}>
          <Text style={ { fontWeight: 'bold', fontSize: 25 } }>{name}, {age}</Text>
          <Text style={ { color: 'grey', fontSize: 15 } }>{occupation}</Text>
        </View>
      </View>
      <View style = {styles.buttonBar}>
        <Image style = {styles.buttonSecondTier} source={Images.rewind} />
        <Image style = {styles.buttonFirstTier} source={Images.nope} />
        <Image style = {styles.buttonSecondTier} source={Images.boost} />
        <Image style = {styles.buttonFirstTier} source={Images.like} />
        <Image style = {styles.buttonSecondTier} source={Images.superLike} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'aliceblue',
  },
  navigationBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    height: Platform.OS === 'ios' ? 44 : 56,
    margin: Dimensions.get('window').width * .025
  },
  navigationBarChat: {
    height: Platform.OS === 'ios' ? 44 : 56,
    width: Dimensions.get('window').width * .2,
    resizeMode: 'contain', 
    tintColor: '#C5C5C5'
  }, 
  navigationBarSettings: {
    height: Platform.OS === 'ios' ? 44 : 56,
    width: Dimensions.get('window').width * .2,
    resizeMode: 'contain', 
    tintColor: '#C5C5C5'
  },
  navigationBarLogo: {
    height: Platform.OS === 'ios' ? 44 : 56,
    width: Dimensions.get('window').width * .4,
    resizeMode: 'contain', 
  }, 
  profileCard: {
    flex: 4, 
    flexDirection: 'column', 
    //alignItems: 'center', 
    justifyContent: 'center', 
    width: Dimensions.get('window').width * .9,
    borderWidth: 2,
    borderColor: '#C5C5C5', 
    backgroundColor: 'white', 
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10,     
    alignSelf: 'center'
  }, 
  profilePicture: {
    //flex: 3, 
    width: Dimensions.get('window').width * .8,

    alignSelf: 'center', 
  
    resizeMode: 'contain'
  }, 
  profileText: {
    //flex: 1, 
    padding: Dimensions.get('window').width * .05,
    alignContent: 'flex-start',
    alignItems: 'flex-start'
  }, 
  buttonBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
    margin: Dimensions.get('window').width * .025
  }, 
  buttonFirstTier: {
    width: Dimensions.get('window').width * .1,
    height: Dimensions.get('window').height * .1,
    resizeMode: 'contain', 
    backgroundColor: 'white', 
    borderRadius: Dimensions.get('window').height * .1 * 0.5,
  },
  buttonSecondTier: {
    width: Dimensions.get('window').width * .1,
    height: Dimensions.get('window').height * .05,
    resizeMode: 'contain', 
    backgroundColor: 'white', 
    borderRadius: Dimensions.get('window').height * .05 * 0.5
  },
});