import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native'
import AddTask from '../actions/AddTaskAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SomethingElse from './SomethingElse'

class List extends Component {
  constructor(){
    super()
    this.state = {
      emailText: "",
      passwordText: ""
    }
    this.handleText = this.handleText.bind(this)
    navigationOptions = {
    title: 'Welcome',
    };
  }

  handleText(){
    // var newTask = this.state.text
    // console.log(newTask)
    // this.props.taskList(newTask)
    this.setState({

    })
    const { navigate } = this.props.navigation
    navigate('Next')
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={{alignSelf: 'center', marginTop: 30, marginBottom: 10}} source={require('../icon.png')} />
        <Text style={styles.head} > TRACKTER </Text>
        <TextInput
          style={styles.phone}
          placeholder = {"Phone Number"}
          onChangeText={(emailText) => this.setState({emailText})}
          value={this.state.emailText}
        />
        <TextInput
          style={styles.password}
          placeholder = {"Password"}
          onChangeText={(passwordText) => this.setState({passwordText})}
          value={this.state.passwordText}
        />
          <Text style={styles.rm} > Remember Me </Text>
          <Text style={styles.fp} > Forgot Password? </Text>
        <TouchableOpacity onPress={this.handleText} style={styles.button}>
          <Text style={styles.push} >Login</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({
//     taskList: AddTask
//   }, dispatch)
// }

// export default connect(null, mapDispatchToProps)(List)
export default List

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  password: {
    height: '8%',
    width: '85%',
    alignSelf: 'center',
    borderRadius: 30,
    borderColor: 'lightgrey',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10
  },
  phone: {
    height: '8%',
    width: '85%',
    alignSelf: 'center',
    borderRadius: 30,
    borderColor: 'lightgrey',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 21
  },
  rm: {
    fontSize: 15,
    color: "#005580",
    marginBottom: 30,
    marginLeft: 30
  },
  fp: {
    fontSize: 15,
    color: "#005580",
    position: 'absolute',
    top: 320,
    right: 20
  }, 
  head: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50
  },
  button: {
    marginTop: 30,
    marginBottom: 15,
    height:'8%',
    width:'85%',
    backgroundColor: "#005580",
    alignSelf:'center',
    borderRadius:30
  },
  push:{
    fontSize:20,
    marginTop: 10,
    textAlign: 'center',
    color: 'white'
  }
});