import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <Text>React Native Animation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
