import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ForwardButton() {

  return (
    <View style = {styles.container}>
      <Icon name="arrow-right" style={styles.icon} />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: "#FFF0C1",
    marginLeft: 10,
    marginBottom: 10,
    justifyContent: "center",
  }, 
  icon: {
    fontSize: 40,
    color: "#4A4A4A",
    alignSelf: "center",
    marginBottom: 2,
    marginLeft: 3,
  },
});