import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  CameraRoll,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux'

class SomethingElse extends Component {
	render(){
    		return(
	      <View style={styles.container}>
	      	<TouchableOpacity style={styles.button}>
            <Text style={styles.push} >{this.state.status}</Text>
          </TouchableOpacity>
          <Text style={styles.textBox}> </Text>
          <TouchableOpacity style={styles.photos}>
              <Text style={{color:'black', fontSize:35, alignSelf:'center'}} >+</Text>
          </TouchableOpacity>
	      </View>
		)
	}
}


// export default connect (mapStateToProps)(SomethingElse)
export default SomethingElse

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
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
    marginTop: 10,
    fontSize:20,
    alignSelf: 'center',
    color: 'white'
  },
  textBox: {
    height: '50%',
    width: '80%',
    borderColor: 'lightgrey',
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: 15
  },
  photos: {
    height: '15%',
    width: '30%',
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginLeft: 35
  }
})