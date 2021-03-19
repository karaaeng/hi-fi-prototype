import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';
import { Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import NavigationBar from './NavigationBar';
import NotificationBar from './NotificationBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';


export default function MapFeed({navigation}) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  

  function notification(text, image) {
    return (
      <TouchableOpacity style = {styles.notification} onPress = { () => {
        console.log(this.state); 
      }}>
      <View style = {styles.notificationInside}>
      <Image style = {styles.profileImages} source = {image}/>
        <Text style = {styles.notificationText}> {text} </Text>
        </View>
      </TouchableOpacity>
    );
  }

  function addAll() {
    return (
      <TouchableOpacity style = {styles.addButton} onPress = { () => {
        this.state["selectedAll"] = true; 
      }}>
        <Text style = {styles.addText}> add all </Text>

      </TouchableOpacity>
    );
  }


  return (      
    <View style = {styles.container}>
    <Text style = {styles.titleText} > map </Text>
        <MapView style = {styles.map} initialRegion={{latitude: 37.4275, longitude: -122.2, 
          latitudeDelta: 0.005,longitudeDelta: 0.21}}>
            
            <MapView.Marker
              coordinate={{latitude: 37.4275, longitude: -122.2}}
              title={"Me"}
              description={"Stanford"}>
              <Icon name="map-marker" style={styles.myMarker}/>
            </MapView.Marker>

            <MapView.Marker
              coordinate={{latitude: 34.0522,
              longitude: -118.2437}}
              title={"Kara"}
              description={"Los Angeles"}>
              <Icon name="map-marker" style={styles.icon}/>
            </MapView.Marker>

            <MapView.Marker
              coordinate={{latitude: 33.6189,
              longitude: -117.9298}}
              title={"Isa"}
              description={"Newport Beach"}>
              <Icon name="map-marker" style={styles.icon}/>
            </MapView.Marker>

            <MapView.Marker
              coordinate={{latitude: 33.6189,
              longitude: -117.81}}
              title={"Marie"}
              description={"Newport Beach"}>
              <Icon name="map-marker" style={styles.icon}/>
            </MapView.Marker>

            <MapView.Marker
              coordinate={{latitude: 37.3861,
              longitude: -122.0839}}
              title={"Cal"}
              description={"Mountain View"}>
              <Icon name="map-marker" style={styles.icon}/>
            </MapView.Marker>

            <MapView.Marker
              coordinate={{latitude: 51.5074,
              longitude: -0.1278}}
              title={"Wilder"}
              description={"London"}>
              <Icon name="map-marker" style={styles.icon}/>
            </MapView.Marker>

            <MapView.Marker
              coordinate={{latitude: 37.4275,
              longitude: -122.1697}}
              title={"Eden"}
              description={"Stanford"}>
              <Icon name="map-marker" style={styles.icon}/>
            </MapView.Marker>

            <MapView.Marker
              coordinate={{latitude: 40.7608,
              longitude: -111.8910}}
              title={"Christian"}
              description={"Salt Lake City"}>
              <Icon name="map-marker" style={styles.icon}/>
            </MapView.Marker>

            <MapView.Marker
              coordinate={{latitude: 38.5816,
              longitude: -121.4944}}
              title={"Thom"}
              description={"Sacramento"}>
              <Icon name="map-marker" style={styles.icon}/>
            </MapView.Marker>

            <MapView.Marker
              coordinate={{latitude: 25.7617,
              longitude: -80.1918}}
              title={"Pablo"}
              description={"Miami"}>
              <Icon name="map-marker" style={styles.icon}/>
            </MapView.Marker>

            <MapView.Marker
              coordinate={{latitude: 38.5449,
              longitude: -121.7405}}
              title={"Cam"}
              description={"Davis"}>
              <Icon name="map-marker" style={styles.icon}/>
            </MapView.Marker>

            <MapView.Marker
              coordinate={{latitude: 36.7378,
              longitude: -119.7871}}
              title={"George"}
              description={"Fresno"}>
              <Icon name="map-marker" style={styles.icon}/>
            </MapView.Marker>

             <MapView.Marker
              coordinate={{latitude: 37.4848,
              longitude: -122.2281}}
              title={"Alex"}
              description={"Redwood City"}>
              <Icon name="map-marker" style={styles.icon}/>
            </MapView.Marker>

            <MapView.Marker
              coordinate={{latitude: 37.5630,
              longitude: -122.3255}}
              title={"Xa"}
              description={"San Mateo"}>
              <Icon name="map-marker" style={styles.icon}/>
            </MapView.Marker>

            <MapView.Marker
              coordinate={{latitude: 37.4419,
              longitude: -122.1430}}
              title={"Lauren"}
              description={"Palo Alto"}>
              <Icon name="map-marker" style={styles.icon}/>
            </MapView.Marker>

            <MapView.Marker
              coordinate={{latitude: 37.4530,
              longitude: -122.1817}}
              title={"Nat"}
              description={"Menlo Park"}>
              <Icon name="map-marker" style={styles.icon}/>
            </MapView.Marker>

        </MapView>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center', 
    justifyContent: 'space-between'
  },
  icon: {
    fontSize: 30,
    color: '#4A4A4A'
  }, 
  myMarker: {
    fontSize: 30,
    color: '#FED254'
  },
  map:{
    alignSelf: 'center',
    width: Dimensions.get('window').width * .9,
    height: Dimensions.get('window').height * .65,
  },
  addText: {
    fontSize: 20,
    color: '#939393',
  },
  
  titleText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 30,
    color: '#4A4A4A',
    marginBottom: 5,
    marginTop: 20,
    marginBottom: 15,
    alignSelf: 'center',
  },
  
});
