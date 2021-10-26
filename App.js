import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function App() {
  const [isStart, setStart] = useState(false)
  const msg = <Text style={{ fontSize: 24 }}>Welcome, Zaheer</Text>
  return (
    <View style={styles.container}>
      {isStart ? msg : <Text>Press Start to Begin</Text>}
      <Button title={isStart ? "Next" : "Start"} onPress={
        () => setStart(!isStart)
      } />
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