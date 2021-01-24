import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Images, Profiles } from './App/Themes';

export default function App() {
  const haroldProfile = Profiles.harold;
  const [profileImage] = useState(haroldProfile.image);
  const [name] = useState(haroldProfile.name);
  const [age] = useState(haroldProfile.age);
  const [occupation] = useState(haroldProfile.occupation);

  return (
    <View style={styles.container}>
      <Text>This is your workspace. Have fun!</Text>
      <Text>(Hint: Peep the App folder)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});