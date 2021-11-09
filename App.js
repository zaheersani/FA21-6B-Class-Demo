import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {ScrollView, FlatList, TextInput, TouchableOpacity, StyleSheet, Text, View, Button, ToastAndroid } from 'react-native';

function App() {
  var arr = [34, 23, 343, 232, 33, 22, 33, 77, 88, 88, 22, 33, 77, 88, 88]
  return (
    <View style={styles.container}>
      <FlatList
        style={{paddingTop: 20, width: '100%', padding: 5}}
        data={arr}
        renderItem={({ item, index }) =>
          <TouchableOpacity
            style={{ backgroundColor: 'pink', margin: 10, width:'40%'}}
          >
            <Text key={index} style={{ fontSize: 34 }}>item: {item}</Text>
          </TouchableOpacity>
        }
        ListHeaderComponent={<Text>Header</Text>}
        ListFooterComponent={<Text>Footer</Text>}
        numColumns={2}
        refreshing={false}
        onRefresh={()=>ToastAndroid.show('fetching data..', ToastAndroid.SHORT)}
      />
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