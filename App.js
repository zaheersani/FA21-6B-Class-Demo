import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {ScrollView, TextInput, TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';

function App() {
  var arr = [34, 23, 343, 232, 33, 22, 33, 77, 88, 88]
  return (
    <View style={styles.container}>
      <ScrollView
        style={{paddingTop: 20}}
      >
        <Text style={{fontSize: 54}}>toggle auto opening developer tools on startup (enabled)</Text>
        <Text style={{ fontSize: 54 }}>toggle auto opening developer tools on startup (enabled)</Text>
        <Text style={{ fontSize: 54 }}>toggle auto opening developer tools on startup (enabled)</Text>
        {arr.map((i, index) =>
          <TouchableOpacity
            style={{width: '100%', height: 50, backgroundColor: 'red', padding: 5, margin: 5}}
          >
            <Text key={index} style={{ fontSize: 44 }}>Item: {i}, index: {index}</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;