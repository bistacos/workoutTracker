/*
React Native App to simply and conveniently
track progress in the "Starting Strength" strength program 
by Mark Rippetoe
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  DatePickerIOS,
  PickerIOS,
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;

// the main component
var workoutTracker = React.createClass({
  getDefaultProps: function () {
    return {
      date: new Date(),
    };
  },

  getInitialState: function () {
    return {
      date: this.props.date,
    };
  },

  onDateChange: function (date) {
    this.setState({date: date});
  },

  render: function() {
    return (
      <View>
          <Text style={styles.header}>
             Workout Tracker 
          </Text>

        <View style={styles.container}>
          <Text style={styles.text}>
            Today&#39;s Date:
          </Text>

          <DatePickerIOS
            date={this.state.date}
            mode="date"
            timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
            onDateChange={this.onDateChange}
          />
          
          <ExerciseRow style={styles.text}>
          </ExerciseRow>

        </View>
      </View>
    );
  }
});

var PickerItemIOS = PickerIOS.Item;

var EXERCISES = ['Bench', 'Chinups', 'Deadlift', 'Press', 
                  'Power Clean', 'Squat'];

var ExerciseRow = React.createClass({
  getDefaultProps: function () {
    return {
      date: new Date(),
      text: '',
    };
  },

  getInitialState: function () {
    return {
      text: this.props.text,
      exercise: 'Squat',
    };
  },  

  render: function () {
    // var selected = EXERCISES[5];
    return (
      <View>
        <Text>Exercise:</Text>
        <PickerIOS 
          selectedValue={this.state.exercise}>
          </PickerIOS>
        <TextInput
          style={{height: 20, width: 50, margin: 10, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );

    // return (
    //   <View>
    //     <Text>Exercise:</Text>
        // <PickerIOS 
        //   selectedValue={this.state.exercise} >
        //   // onValueChange={(exercise) => this.setState({exercise, })}
        // </PickerIOS>
    //     <TextInput
    //       style={{height: 20, width: 50, margin: 10, borderColor: 'gray', borderWidth: 1}}
    //       onChangeText={(text) => this.setState({text})}
    //       value={this.state.text}
    //     />
    //     <Text style={styles.text}>
    //       {this.state.text}
    //     </Text>
    //   </View>
    // );
  },
});

// styles
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F0F5F9',
  },
  header: {
    fontFamily: 'Helvetica',
    flexDirection: 'row',
    fontSize: 30,
    fontStyle: 'italic',
    textAlign: 'center',
    margin: 30,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    color: '#333333',
    margin: 10,
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent('workoutTracker', () => workoutTracker);
