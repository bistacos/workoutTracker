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
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

// Third paty component: see https://github.com/bulenttastan/react-native-list-popover
var ListPopover = require('./ListPopover.js');



var PickerItemIOS = PickerIOS.Item;

// Exercises to be used by PickerIOS
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

var sets = ["1","2","3","4","5"];

var NumSetsListPopover = React.createClass({
  getInitialState: function() {
    return {
      item: "Select number of sets",
      isVisible: false,
    };
  },

  showPopover: function() {
    this.setState({isVisible: true});
  },
  closePopover: function() {
    this.setState({isVisible: false});
  },
  setItem: function(item) {
    this.setState({item: item});
  },

  render: function() {
    return (
      <View style={styles.listPopover}>
        <TouchableHighlight style={styles.button} onPress={this.showPopover}>
          <Text>{this.state.item}</Text>
        </TouchableHighlight>

        <ListPopover
          list={sets}
          isVisible={this.state.isVisible}
          onClick={this.setItem}
          onClose={this.closePopover}/>
      </View>
    );
  }
});

var ExerciseUnit = React.createClass({

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

        <NumSetsListPopover>
        </NumSetsListPopover>

      </View>
    );
  },
});
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

      <ScrollView showsVerticalScrollIndicator="true" styles="scrollView"> 
          <Text style={styles.header}>
             Workout Tracker 
          </Text>

          <View>
            <ExerciseUnit style={styles.container}>
            </ExerciseUnit>
          </View>
          
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
        


      </ScrollView>
    );
  }
});


// styles
var styles = StyleSheet.create({
   button: {
    borderRadius: 4,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#b3b3b3",
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F0F5F9',
  },
  header: {
    flex: 1,
    fontFamily: 'Helvetica',
    flexDirection: 'row',
    fontSize: 30,
    fontStyle: 'italic',
    textAlign: 'center',
    margin: 30,
    fontWeight: 'bold',
  },
  listPopover: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  text: {
    flex: 1,
    color: '#333333',
    margin: 10,
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent('workoutTracker', () => workoutTracker);
