import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {ScrollView, FlatList, TextInput, TouchableOpacity, StyleSheet, Text, View, Button, ToastAndroid, Keyboard, Alert } from 'react-native';

function App() {
  const [getItem, setItem] = React.useState('')
  const [getList, setList] = React.useState([])
  const [editing, setEditing] = React.useState(false)
  const [editingIndex, setEditingIndex] = React.useState()
  const addItem = () => {
    setList([...getList, getItem])
    setItem('')
    Keyboard.dismiss()
  }
  const updateItem = () => {
    setList(
      getList.map((item, index) => editingIndex == index ? getItem : item)
    )
    setEditing(false)
    setItem('')
  }
  const deleteItem = (index) => {
    setList(getList.filter((item, i) => i != index ? item: null ))
  }
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', padding: 5, margin: 5, justifyContent: 'space-between', width: 200}}>
        <TextInput
          style={{fontSize: 20, width: 130, borderBottomColor: 'red', borderBottomWidth: 2 }}
          placeholder="Enter Item"
          onChangeText={(text) => setItem(text)}
          value={getItem}
      />
        <Button
          title={editing ? "Update" : "Add"}
          onPress={editing? updateItem : addItem}
        />
      </View>
      <FlatList
        style={{ paddingTop: 20, width: '100%', padding: 5 }}
        data={getList}
        renderItem={({ item, index }) =>
          <TouchableOpacity
            style={{justifyContent: 'space-between',  flexDirection: 'row',alignItems: 'center', backgroundColor: 'yellow', margin: 5, borderRadius: 10, padding: 5 }}
            onPress={() => {
              setItem(item)
              setEditingIndex(index)
              setEditing(true)
            }}
          >
            <Text key={index} style={{ fontSize: 34 }}>{item}</Text>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                width: 20,
                height: 20,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() => {
                Alert.alert(
                  'Delete Item?',
                  "Are you sure? Pakka?",
                  [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    { text: "OK", onPress: () => deleteItem(index) }
                  ]
                )
              }}
            >
              <Text style={{color:'white'}}>X</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        }
        ListEmptyComponent={<Text style={{fontSize: 24, color: 'grey', fontStyle:'italic', alignSelf: 'center'}}>No Item to Display</Text>}
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
    paddingTop: 30
  },
});

export default App;