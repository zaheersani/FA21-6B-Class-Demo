import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {TextInput, TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';

const MyButton = ({ text, bgcolor = 'blue', onTap}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgcolor,
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        elevation: 10,
        borderColor: 'grey',
        borderWidth: 1
      }}
      activeOpacity={0.5}
      onPress={ () => onTap(text)}
    >
      <Text
        style={{ fontSize: 24, color: 'black', alignSelf: 'center' }}
      >{text}</Text>
    </TouchableOpacity>
  )
}

const NumPad = () => {
  const [getNum, setNum] = useState(0)
  const [btnFeedback, setBtnFeedback] = useState('Not Presse')
  const [text, setText] = useState('')

  const onBtnPress = (n) => {
    setNum(getNum + n)
  }

  return (
    <View style={styles.container}>
      <Text
        style={{ fontSize: 46, alignSelf: 'flex-end', paddingRight: 10 }}
        selectable={true}
        numberOfLines={1}
      >{getNum}</Text>
      <Text>{btnFeedback}</Text>
      <Text>{text}</Text>
      <TextInput
        style={{
          borderWidth: 1,
          width: 150,
          height: 50,
          fontSize: 24,
          borderColor: 'blue',
          borderRadius: 10,
          paddingLeft: 10
        }}
        onChangeText={(v) => setText(v)}
        keyboardType={'number-pad'}
      />
      <View style={{
        flexDirection: 'row',
        padding: 10,
        width: '70%',
        // backgroundColor: 'red',
        justifyContent: 'space-between'
      }}>
        {/* <Button title="1" onPress={() => setNum(getNum + "1")} /> */}
        <MyButton text="1" bgcolor="red" onTap={onBtnPress} />
        <MyButton text="2" onTap={onBtnPress} />
        <MyButton text="3" onTap={onBtnPress} />
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