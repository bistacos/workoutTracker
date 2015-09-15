/*
React Native App to simply and conveniently
track progress in the "Starting Strength" strength program 
by Mark Rippetoe
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  Form,
  View,
} = React;

var workoutTracker = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
           workoutTracker 
        </Text>
        <Form>
        </Form>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F0F5F9',
  },
  header: {
    fontFamily: 'Helvetica',
    flexDirection: 'row',
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    margin: 30,
    fontWeight: 'bold',
  },  
  text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('workoutTracker', () => workoutTracker);
