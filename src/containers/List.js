import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import AddTask from '../actions/AddTaskAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SomethingElse from './SomethingElse'

class List extends Component {
  constructor(){
    super()
    this.state = {
      text: ""
    }
    this.handleText = this.handleText.bind(this)
    navigationOptions = {
    title: 'Welcome',
    };
  }

  handleText(){
    var newTask = this.state.text
    console.log(newTask)
    this.props.taskList(newTask)
    const { navigate } = this.props.navigation
    navigate('Next')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head} > My To-do List</Text>
        <TextInput style={styles.input} onChangeText={(text) => this.setState({text})}/>
        <TouchableOpacity onPress={this.handleText} style={styles.button}>
          <Text style={styles.push} >Add Task</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    taskList: AddTask
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(List)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    borderBottomColor: 'black',
    // width: '80%',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    borderBottomColor:'black',
    borderBottomWidth:1,
    height: 30,
    marginBottom:10
  },
  head: {
    // flex: 1,
    fontSize: 50,
    justifyContent: 'center',
    marginBottom: 30
  },
  button: {
    height:'6%',
    width:'30%',
    backgroundColor: "teal",
    marginLeft:'35%',
    borderRadius:20
  },
  push:{
    fontSize:20,
    marginLeft:20,
    marginTop:4
  }
});