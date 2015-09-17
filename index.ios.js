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
        </View>
        <View>
          <ExerciseRow style={styles.container}>
          </ExerciseRow>
        </View>
      </View>
    );
  }
});

var PickerItemIOS = PickerIOS.Item;

// Bench, Chinups, Deadlift, Power Clean, Press, Squat
var EXERCISES = {
  bench: {
    name: 'Bench',
  },
  chinups: {
    name: 'Chinups',
  },
  deadlift: {
    name: 'Deadlift',
  },
  powerClean: {
    name: 'Power Clean',
  },
  press: {
    name: 'Press',
  },
  squat: {
    name: 'Squat',
  },
};

var ExerciseRow = React.createClass({

  getInitialState: function () {
    return {
      text: '',
      exercise: 'squat',
    };
  },  

  render: function () {
    return (
      <View>
        <Text style={styles.text}>Please choose an exercise:</Text>
        <PickerIOS
          selectedValue={this.state.exercise}
          onValueChange={(exercise) => this.setState({exercise})}>
          {Object.keys(EXERCISES).map((exercise) => (
            <PickerItemIOS
              key={exercise}
              value={exercise}
              label={EXERCISES[exercise].name}
              />
            )
          )}
        </PickerIOS>

        <TextInput
          style={{height: 20, width: 50, margin: 10, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={styles.text}>
           {this.state.text}
        </Text>
      </View>
    );
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
    color: '#333333',
    margin: 10,
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent('workoutTracker', () => workoutTracker);
