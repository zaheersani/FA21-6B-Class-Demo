import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const NumPad = () => {
  const [getNum, setNum] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 46, alignSelf:'flex-end', paddingRight: 10}}>{getNum}</Text>
      <View style={{
        flexDirection: 'row',
        padding: 10,
        width: '70%',
        backgroundColor: 'red',
        justifyContent: 'space-between'
      }}>
        <Button title="1" onPress={() => setNum(getNum + "1")} />
        <Button title="2" onPress={() => setNum(getNum + "2")} />
        <Button title="3" onPress={() => setNum(getNum + "3")} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Button title="4" />
        <Button title="5" />
        <Button title="6" />
      </View>
    </View>
  )
}

function App() {
  const [isStart, setStart] = useState(false)
  return (
    <View style={styles.container}>
      {!isStart && <Button title="Start" onPress={() => setStart(true)} />}
      {isStart && <NumPad />}
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