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
  TouchableOpacity
} from 'react-native';

import List from './src/containers/List'
// import NewList from './src/containers/NewList'

export default class App extends Component {
  render() {
    return (
      <List />       
    );
  }
}




