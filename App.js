/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';

import List from './src/containers/List'
import SomethingElse from './src/containers/SomethingElse'
// import NewList from './src/containers/NewList'


const SimpleApp = StackNavigator({
  Home: { screen: List },
  Next: {screen: SomethingElse}
});


export default class App extends Component {
  render() {
    return (
      <SimpleApp />       
    );
  }
}




