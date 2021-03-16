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

import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Dimensions} from 'react-native';
import { Images, Profiles } from './App/Themes';

import LoginScreen from './App/Components/loginScreen'
import LoginInputScreen from './App/Components/loginInputScreen'
import NameInput from './App/Components/nameInput'
import NumberInput from './App/Components/numberInput'
import ConfirmationCode from './App/Components/confirmationCode'
import LocationInput from './App/Components/locationInput'
import PhotoSelect from './App/Components/photoSelect'
import PhotoOptions from './App/Components/photoOptions'
import SelectedPhoto from './App/Components/selectedPhoto'
import PronounsInput from './App/Components/pronounsInput'
import InterestsInput from './App/Components/interestsInput'
import StatusSelect from './App/Components/statusSelect'
import Permission from './App/Components/permission'
import AddFriends from './App/Components/addFriends'
import Ready from './App/Components/ready'

import NavigationBar from './App/Components/NavigationBar';
import ButtonBar from './App/Components/ButtonBar';
import Profile from './App/Components/Profile'
import FriendFeed from './App/Components/FriendFeed'
import MapFeed from './App/Components/MapFeed'
import KaraProfile from './App/Components/KaraProfile';
import EdenProfile from './App/Components/EdenProfile';
import MarieProfile from './App/Components/MarieProfile';
import CalProfile from './App/Components/CalProfile';
import WilderProfile from './App/Components/WilderProfile';
import ChristianProfile from './App/Components/ChristianProfile';
import Chat from './App/Components/Chat';
import WilderChristianChat from './App/Components/WilderChristianChat';
import KaraIsaChat from './App/Components/KaraIsaChat';
import CatEdenChat from './App/Components/CatEdenChat';
import Home from './App/Components/Home';

import SettingsPage from './App/Components/settings'
import EditProfile from './App/Components/EditProfile'
import About from './App/Components/about'
import Delete from './App/Components/delete'
import Privacy from './App/Components/privacy'
import ConfirmAddFriends from './App/Components/ConfirmAddFriends'

export default function App() {

  const [didLeave, setDidLeave] = useState(false);

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  const Stack = createStackNavigator();
  const RootStack = createStackNavigator();

  function leaveChatButton({navigation}) {
    if (didLeave === false) {
      return (
        <TouchableOpacity onPress = { () => {
          setDidLeave(true);
          navigation.navigate("WilderChristianChat", {status: {didLeave}});
        }}>
        <View style={styles.leavechatbutton}> 
          <Text style={styles.leavechatbuttontext}>leave chat</Text>
        </View>
        </TouchableOpacity>
      );
      } else {
        <View></View>
      }
  }

function MainStack () {
  return (
   
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen}
      options={{
        headerStyle: {
          height: 110,
        },
        title: '',
      }} />
      <Stack.Screen name="LoginInputScreen" component={LoginInputScreen}
      options={{
        headerStyle: {
          height: 110,
        },
      title: 'login',
      headerTitleStyle: {
        fontFamily: 'Comfortaa_700Bold',
        fontSize: 30,
        color: '#4A4A4A',
      },
      }} />
      <Stack.Screen name="Name" component={NameInput}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <Stack.Screen name="Number" component={NumberInput}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <Stack.Screen name="Confirm" component={ConfirmationCode}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <Stack.Screen name="Location" component={LocationInput}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <Stack.Screen name="Photo" component={PhotoSelect}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <Stack.Screen name="PhotoOptions" component={PhotoOptions}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <Stack.Screen name="SelectedPhoto" component={SelectedPhoto}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <Stack.Screen name="Pronouns" component={PronounsInput}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <Stack.Screen name="Interests" component={InterestsInput}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <Stack.Screen name="Status" component={StatusSelect}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <Stack.Screen name="AddFriendsPermission" component={Permission}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <Stack.Screen name="AddFriends" component={AddFriends}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
      }} />
      <Stack.Screen name="Ready" component={Ready}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
      }} />
      <Stack.Screen name="Profile" component={Profile}
        options={({navigation}) => ({
          headerStyle: {
            height: 110,
          },
        title: 'my profile',
        headerTitleStyle: {
          fontFamily: 'Comfortaa_700Bold',
          fontSize: 30,
          color: '#4A4A4A',
        },
        headerRight: () => (
          <TouchableOpacity onPress = { () => {
            navigation.navigate("SettingsPage");
          }}>
          <Icon name="gear" style={styles.navigationBarSettings}/>
        </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress = { () => {
              navigation.navigate("AddFriends", {which: 'profile'})
            }}>
            <Icon name="address-book-o" style={styles.navigationBarAddress}/>
            </TouchableOpacity>
            ),
        })}/>
        <Stack.Screen name="SettingsPage" component={SettingsPage}
        options={{
          headerStyle: {
            height: 110,
          },
        title: 'settings',
        headerTitleStyle: {
          fontFamily: 'Comfortaa_700Bold',
          fontSize: 30,
          color: '#4A4A4A',
        },
      }} />
      <Stack.Screen name="EditProfile" component={EditProfile}
        options={{
          headerStyle: {
            height: 110,
          },
        title: 'edit profile',
        headerTitleStyle: {
          fontFamily: 'Comfortaa_700Bold',
          fontSize: 30,
          color: '#4A4A4A',
        },
      }} />
      <Stack.Screen name="About" component={About}
        options={{
          headerStyle: {
            height: 110,
          },
        title: 'about',
        headerTitleStyle: {
          fontFamily: 'Comfortaa_700Bold',
          fontSize: 30,
          color: '#4A4A4A',
        },
      }} />
      <Stack.Screen name="Delete" component={Delete}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <Stack.Screen name="Privacy" component={Privacy}
        options={{
          headerStyle: {
            height: 110,
          },
        title: 'privacy',
        headerTitleStyle: {
          fontFamily: 'Comfortaa_700Bold',
          fontSize: 30,
          color: '#4A4A4A',
        },
      }} />
      <Stack.Screen name="FriendFeed" component={FriendFeed}
        options={({navigation}) => ({
          headerStyle: {
            height: 110,
          },
        title: '',
        header: () => (
          <View style = {styles.headerContainer}>
            <TouchableOpacity onPress = { () => {
              navigation.navigate('MapFeed')
            }}>
            <Image style = {styles.navigationBar} source = {Images.feed}/>   
          </TouchableOpacity>       
          </View>
          ),
      })} />
      <Stack.Screen name='MapFeed' component={MapFeed}
       options={({navigation}) => ({
        headerStyle: {
          height: 110,
        },
      title: '',
      header: () => (
        <View style = {styles.headerContainer}>
          <TouchableOpacity onPress = { () => {
            navigation.navigate('FriendFeed')
          }}>
          <Image style = {styles.navigationBar} source = {Images.map}/>   
        </TouchableOpacity>       
        </View>
        ),
    })} />
    <Stack.Screen name="Chat" component={Chat}
          options={{
            headerStyle: {
              height: 110,
            },
            title: 'chat',
            headerTitleStyle: {
              fontFamily: 'Comfortaa_700Bold',
              fontSize: 30,
              color: '#4A4A4A',
            },
        }} />

    <Stack.Screen name="EdenProfile" component={EdenProfile}
          options={{
          title: '',
        }} />

        <Stack.Screen name="KaraProfile" component={KaraProfile}
          options={{
          title: '',
        }} />

        <Stack.Screen name="MarieProfile" component={MarieProfile}
          options={{
          title: '',
        }} />
        <Stack.Screen name="WilderProfile" component={WilderProfile}
          options={{
          title: '',
        }} />

        <Stack.Screen name="CalProfile" component={CalProfile}
          options={{
          title: '',
        }} />
        <Stack.Screen name="ChristianProfile" component={ChristianProfile}
          options={{
          title: '',
        }} />
        <Stack.Screen name="WilderChristianChat" component={WilderChristianChat}
          options={({navigation}) => ({
            headerStyle: {
              height: 110,
            },
            title: 'chat',
            headerTitleStyle: {
              fontFamily: 'Comfortaa_700Bold',
              fontSize: 30,
              color: '#4A4A4A',
            },
            headerRight: () => (
            leaveChatButton({navigation})
              ),
        })} />
        <Stack.Screen name="KaraIsaChat" component={KaraIsaChat}
          options={{
            headerStyle: {
              height: 110,
            },
            title: 'chat',
            headerTitleStyle: {
              fontFamily: 'Comfortaa_700Bold',
              fontSize: 30,
              color: '#4A4A4A',
            },
        }} />
         <Stack.Screen name="CatEdenChat" component={CatEdenChat}
          options={{
            headerStyle: {
              height: 110,
            },
            title: 'chat',
            headerTitleStyle: {
              fontFamily: 'Comfortaa_700Bold',
              fontSize: 30,
              color: '#4A4A4A',
            },
        }} />
        <Stack.Screen name="Home" component={Home}
          options={{
          title: '',
        }} />
    </Stack.Navigator>

   );
}

return (
  <NavigationContainer>
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainStack}
        options={{
          headerStyle: {
          },
           headerShown: false 
        }}
      />
      <RootStack.Screen name="ConfirmAddFriends" component={ConfirmAddFriends}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerLeft: () => (
         <View></View>
          ),
      }} />
    </RootStack.Navigator>
    </NavigationContainer>
);
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#FFFFFF",
  },
  header: {
    marginTop: 60,
    height: 58,
    width: 89,
    alignSelf: 'center',
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
  navigationBarSettings: {
    fontSize: 40,
    color: '#4A4A4A',
    marginRight: 15,
  }, 
  navigationBarAddress: {
    fontSize: 40,
    color: '#4A4A4A',
    marginLeft: 15,
  }, 
  navigationBar: {
    marginTop: 50,
    alignSelf: 'center',
    width: Dimensions.get('window').width * .5,
    height: Dimensions.get('window').height * 0.05,
    resizeMode: 'contain',
  },
  leavechatbutton: {
    backgroundColor: "#FED254",
    height: 55,
    width: 90,
    borderRadius: 24,
    marginRight: 15,
    justifyContent: "center",
  },
  leavechatbuttontext: { 
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 18,
    color: '#4A4A4A',
    textAlign: "center",
    textAlignVertical: "center",
    marginLeft: 20,
    marginRight: 20,
  },
});