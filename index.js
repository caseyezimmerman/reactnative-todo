import React, { Component } from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import reduxPromise from 'redux-promise'
import {createStore, applyMiddleware} from 'redux'
import { Provider} from 'react-redux'
import reducers from './src/reducers/rootReducer'

const store = applyMiddleware(reduxPromise)(createStore)(reducers)

export default class nativeTodo extends Component {
  render() {
    return (
      <Provider store={store}>
          <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('nativeTodo', () => nativeTodo);
