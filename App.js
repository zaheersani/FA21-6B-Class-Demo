import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Name = (props) => {
  if (props.info) {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 16 }}>First Name: {props.info.fname}</Text>
        <Text style={{ fontSize: 16 }}>Last Name: {props.info.lname}</Text>
      </View>
    )
  } else {
    return (
      <View style={{backgroundColor: 'yellow'}}>
        <Text style={{color:'red', fontSize: 15}}>Name is not available</Text>
      </View>
    )
  }
  
}

class Age extends React.Component {
  render() {
    return (
      <View>
        <Text>Age: {this.props.ageInNumbers}</Text>
      </View>
    )
  }
}

const Counter = () => {
  const [getCounter, setCounter] = React.useState(0)
  // var counter = 6
  const inc = () => {
    setCounter(getCounter + 1)
    // console.log(counter)
  }
  return (
    <View>
      <Text style={{ fontSize: 24 }}>Function Component</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '20%' }}>
        <Button title="+" onPress={inc} />
        <Text style={{ fontSize: 24 }}>{getCounter}</Text>
        <Button title="-" onPress={() => setCounter(getCounter - 1)} />
      </View>
    </View>
  )
}

class CounterClass extends React.Component {
  constructor() {
    super()
    this.state = { counter: 10, counter2: 100}
  }
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Button title="+" color='red' onPress={
          () => this.setState({ counter: this.state.counter + 1 })
        } />
        <Text style={{ fontSize: 24 }}>{this.state.counter}</Text>
        <Button title="-" color='red' onPress={()=> {}} />
      </View>
    )
  }
}

function App() {
  const infoObj = { fname: 'zaheer', lname: 'sani' }
  return (
    <View style={styles.container}>
      <Counter />
      <CounterClass />
      {/* <Name />
      <Name />
      <Name info={infoObj} />
      <Age ageInNumbers={23} /> */}
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