import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import BackButton from './App/Components/BackButton'

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

import Profile from './App/Components/Profile'
import FriendFeed from './App/Components/FriendFeed'
import MapFeed from './App/Components/MapFeed'
import Chat from './App/Components/Chat';
import WilderChristianChat from './App/Components/WilderChristianChat';
import KaraIsaChat from './App/Components/KaraIsaChat';
import CatEdenChat from './App/Components/CatEdenChat';
import Home from './App/Components/Home';
import ConnectFriends from './App/Components/ConnectFriends';
import CatEdenConnect from './App/Components/CatEdenConnect';
import ConnectingIsaWithFriends from './App/Components/ConnectingIsaWithFriends';

import SettingsPage from './App/Components/settings'
import EditProfile from './App/Components/EditProfile'
import About from './App/Components/about'
import Delete from './App/Components/delete'
import Privacy from './App/Components/privacy'
import ConfirmAddFriends from './App/Components/ConfirmAddFriends'
import { NavigationEvents } from 'react-navigation';

export default function App() {

  const [didLeave, setDidLeave] = useState(false);

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

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

  const Stack = createStackNavigator();
  const RootStack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const SignupStack = createStackNavigator();
  const ProfileStack = createStackNavigator();
  const FriendsStack = createStackNavigator();
  const ChatStack = createStackNavigator();
  const HomeStack = createStackNavigator();

  function SignUpStackScreens() {
    return (
      <SignupStack.Navigator>
      <SignupStack.Screen name="Login" component={LoginScreen}
      options={{
        headerStyle: {
          height: 110,
        },
        title: '',
      }} />
      <SignupStack.Screen name="LoginInputScreen" component={LoginInputScreen}
      options={{
        headerStyle: {
          height: 110,
        },
      title: 'login',
      headerBackTitleVisible: false,
          headerBackImage: () => (
          <BackButton style = {styles.back}/>
           ),
      headerTitleStyle: {
        fontFamily: 'Comfortaa_700Bold',
        fontSize: 30,
        color: '#4A4A4A',
      },
      }} />
      <SignupStack.Screen name="Name" component={NameInput}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackTitleVisible: false,
          headerBackImage: () => (
          <BackButton style = {styles.back}/>
           ),
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <SignupStack.Screen name="Number" component={NumberInput}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackTitleVisible: false,
          headerBackImage: () => (
          <BackButton style = {styles.back}/>
           ),
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <SignupStack.Screen name="Confirm" component={ConfirmationCode}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackTitleVisible: false,
          headerBackImage: () => (
          <BackButton style = {styles.back}/>
           ),
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <SignupStack.Screen name="Location" component={LocationInput}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackTitleVisible: false,
          headerBackImage: () => (
          <BackButton style = {styles.back}/>
           ),
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <SignupStack.Screen name="Photo" component={PhotoSelect}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackTitleVisible: false,
          headerBackImage: () => (
          <BackButton style = {styles.back}/>
           ),
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <SignupStack.Screen name="PhotoOptions" component={PhotoOptions}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackTitleVisible: false,
          headerBackImage: () => (
          <BackButton style = {styles.back}/>
           ),
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <SignupStack.Screen name="SelectedPhoto" component={SelectedPhoto}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackTitleVisible: false,
          headerBackImage: () => (
          <BackButton style = {styles.back}/>
           ),
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <SignupStack.Screen name="Pronouns" component={PronounsInput}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackTitleVisible: false,
          headerBackImage: () => (
          <BackButton style = {styles.back}/>
           ),
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <SignupStack.Screen name="Interests" component={InterestsInput}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackTitleVisible: false,
          headerBackImage: () => (
          <BackButton style = {styles.back}/>
           ),
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <SignupStack.Screen name="Status" component={StatusSelect}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackTitleVisible: false,
          headerBackImage: () => (
          <BackButton style = {styles.back}/>
           ),
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <SignupStack.Screen name="AddFriendsPermission" component={Permission}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackTitleVisible: false,
          headerBackImage: () => (
          <BackButton style = {styles.back}/>
           ),
        headerBackground: () => (
          <View style = {styles.headerContainer}>
            <Image style = {styles.header} source={Images.logo}/>
          </View>
        )
      }} />
      <SignupStack.Screen name="AddFriends" component={AddFriends}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackTitleVisible: false,
          headerBackImage: () => (
          <BackButton style = {styles.back}/>
           ),
      }} />
      <SignupStack.Screen name="Ready" component={Ready}
        options={{
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackTitleVisible: false,
          headerBackImage: () => (
          <BackButton style = {styles.back}/>
           ),
      }} />
      </SignupStack.Navigator>
    );
  }

  function ProfileStackScreens () {
    return (
      <ProfileStack.Navigator>
          <ProfileStack.Screen name="Profile" component={Profile} initialParams={{ user: Profiles.cat , message: "", buttonMessage: ""}}
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
        <ProfileStack.Screen name="SettingsPage" component={SettingsPage}
        options={{
          headerStyle: {
            height: 110,
          },
        title: 'settings',
        headerBackTitleVisible: false,
          headerBackImage: () => (
          <BackButton style = {styles.back}/>
           ),
        headerTitleStyle: {
          fontFamily: 'Comfortaa_700Bold',
          fontSize: 30,
          color: '#4A4A4A',
        },
      }} />
      </ProfileStack.Navigator>
    );
  }

  function FriendsStackScreens () {
    return(
    <FriendsStack.Navigator>
      <FriendsStack.Screen name="FriendFeed" component={FriendFeed}
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
      <FriendsStack.Screen name='MapFeed' component={MapFeed}
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
   </FriendsStack.Navigator>
    );
  }

  function ChatStackScreens () {
    return(
      <ChatStack.Navigator>
        <ChatStack.Screen name="Chat" component={Chat}
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
            headerLeft: () => (
              <View></View>
                ),
        }} />
      </ChatStack.Navigator>
    );
  }

function HomeStackScreens () {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home}
          options={({navigation}) => ({
            headerStyle: {
              height: 110,
            },
            header: () => (
              <View style = {styles.headerContainer}>
                <TouchableOpacity onPress = { () => {
                  navigation.navigate('ConnectFriends')
                }}>
                <Image style = {styles.navigationBar} source = {Images.connectme}/>   
              </TouchableOpacity>       
              </View>
              ),
        })} />
        <HomeStack.Screen name="ConnectFriends" component={ConnectFriends}
          options={({navigation}) => ({
            headerStyle: {
              height: 110,
            },
            header: () => (
              <View style = {styles.headerContainer}>
                <TouchableOpacity onPress = { () => {
                  navigation.navigate('Home')
                }}>
                <Image style = {styles.navigationBar} source = {Images.connectfriends}/>   
              </TouchableOpacity>       
              </View>
              ),
        })} />

        <HomeStack.Screen name="EdenProfileSuggested" component={Profile} initialParams={{ user: Profiles.eden , message: "Connection from Isa", buttonMessage: ""}}
          options={{
          title: '',
          headerStyle: {
            height: 110,
          },
          headerBackTitleVisible: false,
            headerBackImage: () => (
            <BackButton style = {styles.back}/>
             ),
        }} />

        <HomeStack.Screen name="KaraProfileConnect" component={Profile} initialParams={{ user: Profiles.kara , message: "Connecting Isa", buttonMessage: "create connection"}}
          options={{
          title: '',
          headerStyle: {
            height: 110,
          },
          headerBackTitleVisible: false,
            headerBackImage: () => (
            <BackButton style = {styles.back}/>
             ),
        }} />
        <HomeStack.Screen name="IsaProfileConnect" component={Profile} initialParams={{ user: Profiles.isa , message: "Connecting Isa", buttonMessage: "search your circle"}}
          options={{
          title: '',
          headerStyle: {
            height: 110,
          },
          headerBackTitleVisible: false,
            headerBackImage: () => (
            <BackButton style = {styles.back}/>
             ),
        }} />

        <HomeStack.Screen name="CatEdenConnect" component={CatEdenConnect}
          options={{
          title: '',
          headerStyle: {
            height: 110,
          },
          headerBackTitleVisible: false,
            headerBackImage: () => (
            <BackButton style = {styles.back}/>
             ),
        }} />

        <HomeStack.Screen name="ConnectingIsaWithFriends" component={ConnectingIsaWithFriends}
          options={{
            headerStyle: {
              height: 110,
            },
            title: 'Connecting Isa',
            headerBackTitleVisible: false,
            headerBackImage: () => (
            <BackButton style = {styles.back}/>
             ),
            headerTitleStyle: {
              fontFamily: 'Comfortaa_700Bold',
              fontSize: 30,
              color: '#4A4A4A',
            },
        }} />
         <HomeStack.Screen name="CatEdenChat" component={CatEdenChat}
          options={{
            headerStyle: {
              height: 110,
            },
            title: 'chat',
            headerBackTitleVisible: false,
            headerBackImage: () => (
            <BackButton style = {styles.back}/>
             ),
            headerTitleStyle: {
              fontFamily: 'Comfortaa_700Bold',
              fontSize: 30,
              color: '#4A4A4A',
            },
        }} />
         <HomeStack.Screen name="KaraIsaChat" component={KaraIsaChat}
          options={{
            headerStyle: {
              height: 110,
            },
            title: 'chat',
            headerBackTitleVisible: false,
            headerBackImage: () => (
            <BackButton style = {styles.back}/>
             ),
            headerTitleStyle: {
              fontFamily: 'Comfortaa_700Bold',
              fontSize: 30,
              color: '#4A4A4A',
            },
        }} />
    </HomeStack.Navigator>
  );
}

function MainTabStack () {
  return (
    <Tab.Navigator 
    tabBarOptions={{
      activeBackgroundColor: "#FED254",
      inactiveBackgroundColor: "#FFF0C1",
      style: {
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
      },
      tabStyle: {
        height: 85,
        width: 200,
        borderRadius: 50,
        marginTop: 10,
        marginLeft: 11,
        marginRight: 11,
      },
      }}>
       <Tab.Screen name="HomeStack" component={HomeStackScreens}
          options={{
          title: '',
          tabBarIcon: () => (
            <Icon name="home" style={styles.iconMain} />
           ),
        }} />
        <Tab.Screen name="ChatStack" component={ChatStackScreens}
          options={{
          title: '',
          tabBarIcon: () => (
            <Icon name="comments" style={styles.iconMain} />
           ),
        }} />
         <Tab.Screen name="FriendsStack" component={FriendsStackScreens}
          options={{
          title: '',
          tabBarIcon: () => (
            <Icon name="users" style={styles.iconMain}/>
           ),
        }} />
       <Tab.Screen name="ProfileStack" component={ProfileStackScreens}
          options={{
          title: '',
          tabBarIcon: () => (
            <Icon name="user" style={styles.iconMain} />
           ),
        }} />
    </Tab.Navigator>
   );
}

return (
  <NavigationContainer>
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="SignUp"
        component={SignUpStackScreens}
        options={{
          headerStyle: {
          },
           headerShown: false 
        }}
      />
        <RootStack.Screen
        name="Main"
        component={MainTabStack}
        options={{
          headerStyle: {
          },
           headerShown: false 
        }}
      />
      <RootStack.Screen name="AddFriends" component={AddFriends}
        options={{
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <BackButton style = {styles.back}/>
             ),
          headerStyle: {
            height: 110,
          },
        title: '',
      }} />
      <RootStack.Screen name="ConfirmAddFriends" component={ConfirmAddFriends}
        options={{
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <BackButton style = {styles.back}/>
             ),
          headerStyle: {
            height: 110,
          },
        title: '',
        headerLeft: () => (
         <View></View>
          ),
      }} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile}
        options={{
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <BackButton style = {styles.back}/>
             ),
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
      <RootStack.Screen name="About" component={About}
        options={{
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <BackButton style = {styles.back}/>
             ),
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
      <RootStack.Screen name="Delete" component={Delete}
        options={{
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <BackButton style = {styles.back}/>
             ),
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackground: () => (
          <Image style = {styles.header} source={Images.logo}/>
        )
      }} />
      <RootStack.Screen name="Privacy" component={Privacy}
        options={{
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <BackButton style = {styles.back}/>
             ),
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
      <RootStack.Screen name="WilderChristianChat" component={WilderChristianChat}
          options={({navigation}) => ({
            headerStyle: {
              height: 110,
            },
            title: 'chat',
            headerBackTitleVisible: false,
            headerBackImage: () => (
            <BackButton style = {styles.back}/>
             ),
            headerTitleStyle: {
              fontFamily: 'Comfortaa_700Bold',
              fontSize: 30,
              color: '#4A4A4A',
            },
            headerRight: () => (
            leaveChatButton({navigation})
              ),
        })} />
        <RootStack.Screen name="KaraIsaChat" component={KaraIsaChat}
          options={{
            headerStyle: {
              height: 110,
            },
            title: 'chat',
            headerBackTitleVisible: false,
            headerBackImage: () => (
            <BackButton style = {styles.back}/>
             ),
            headerTitleStyle: {
              fontFamily: 'Comfortaa_700Bold',
              fontSize: 30,
              color: '#4A4A4A',
            },
        }} />
         <RootStack.Screen name="CatEdenChat" component={CatEdenChat}
          options={{
            headerStyle: {
              height: 110,
            },
            title: 'chat',
            headerBackTitleVisible: false,
            headerBackImage: () => (
            <BackButton style = {styles.back}/>
             ),
            headerTitleStyle: {
              fontFamily: 'Comfortaa_700Bold',
              fontSize: 30,
              color: '#4A4A4A',
            },
        }} />
         <RootStack.Screen name="UserProfile" component={Profile}
        options={({navigation}) => ({
          headerStyle: {
            height: 110,
          },
        title: '',
        headerBackTitleVisible: false,
        headerBackImage: () => (
        <BackButton style = {styles.back}/>
         ),
        })}/>
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
  icon: {
    fontSize: Dimensions.get('window').width * .095,
    alignSelf: "center",
    color: '#4A4A4A',
    marginTop: 10,
  },
  iconMain: {
    fontSize: Dimensions.get('window').width * .095,
    alignSelf: "center",
    color: '#7E7E7E',
    marginTop: 10,
  },
});