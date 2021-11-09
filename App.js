import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {ScrollView, FlatList, TextInput, TouchableOpacity, StyleSheet, Text, View, Button, ToastAndroid } from 'react-native';

function App() {
  const [getItem, setItem] = React.useState('')
  const [getList, setList] = React.useState([])
  const addItem = () => {
    // var arr = getList
    // arr.push(getItem)
    setList([...getList, getItem])
  }
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', padding: 5, margin: 5}}>
      <TextInput
        placeholder="Enter Item"
        onChangeText={(text) => setItem(text)}
      />
        <Button title="Add" onPress={addItem} />
      </View>
      <FlatList
        style={{ paddingTop: 20, width: '100%', padding: 5 }}
        data={getList}
        renderItem={({ item, index }) =>
          <Text style={{fontSize: 34}}>Item: {item}</Text>
        }
        ListEmptyComponent={<Text>No Item to Display</Text>}
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
    paddingTop: 20
  },
});

export default App;