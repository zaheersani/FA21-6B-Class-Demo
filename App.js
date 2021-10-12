import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

function App() {
  const infoObj = { fname: 'zaheer', lname: 'sani' }
  return (
    <View style={styles.container}>
      <Name />
      <Name />
      <Name info={infoObj} />
      <Age ageInNumbers={23} />
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