import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  CameraRoll,
  ScrollView
} from 'react-native';
import { CameraKitCamera, CameraKitCameraScreen } from 'react-native-camera-kit';
import { connect } from 'react-redux'

class SomethingElse extends Component {
  constructor(){
    super()
    this.state = {
      status: ''
    }
  }

  async componentDidMount(){
    this.setState({
      status: "On The Way"
    })
    const checkCamAuth = await CameraKitCamera.checkDeviceCameraAuthorizationStatus();
    console.log(checkCamAuth)
      if (!checkCamAuth) {
      const getCamAuth = await CameraKitCamera.requestDeviceCameraAuthorization();
      if (!getCamAuth) {
          Alert.alert('Camera Access Denied', 'Please visit Settings to enable Camera access.');
          this.props.tookPicture(null);
      }
    }
  }

	render(){
    		return(
	      // <View style={styles.container}>
	      // 	<TouchableOpacity style={styles.button}>
        //     <Text style={styles.push} >{this.state.status}</Text>
        //   </TouchableOpacity>
        //   <Text style={styles.textBox}> ADDRESS INFO </Text>
        //   <TouchableOpacity style={styles.photos}>
        //       <Text style={{color:'black', fontSize:35, alignSelf:'center'}} >+</Text>
        //   </TouchableOpacity>
        //   <TouchableOpacity style={styles.stampPhotos}>
        //       <Text style={{color:'black', fontSize:35, alignSelf:'center'}} >+</Text>
        //   </TouchableOpacity>
        // </View>
        <CameraKitCameraScreen style={Styles.cameraView}
                actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
                onBottomButtonPressed={this.props.onBottomButtonPressed}
                cameraOptions={{
                  flashMode: 'auto',             // on/off/auto(default)
                  focusMode: 'on',               // off/on(default)
                  zoomMode: 'on',                // off/on(default)
                  ratioOverlay:'1:1',            // optional, ratio overlay on the camera and crop the image seamlessly
                  ratioOverlayColor: '#00000077' // optional
                }}
                // cameraFlipImage={cameraFlipIcon}
                // captureButtonImage={cameraButton}
                />
		)
	}
}


// export default connect (mapStateToProps)(SomethingElse)
export default SomethingElse

const Styles = StyleSheet.create({
  cameraView: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
},
  // container: {
  //   flex: 1,
  //   backgroundColor: 'white'
  // },
  // button: {
  //   marginTop: 30,
  //   marginBottom: 15,
  //   height:'8%',
  //   width:'85%',
  //   backgroundColor: "#005580",
  //   alignSelf:'center',
  //   borderRadius:30
  // },
  // push:{
  //   marginTop: 10,
  //   fontSize:20,
  //   alignSelf: 'center',
  //   color: 'white'
  // },
  // textBox: {
  //   height: '50%',
  //   width: '80%',
  //   borderColor: 'lightgrey',
  //   borderWidth: 1,
  //   alignSelf: 'center',
  //   marginBottom: 15,
  //   textAlign: 'center'
  // },
  // photos: {
  //   height: '15%',
  //   width: '30%',
  //   borderColor: 'lightgrey',
  //   borderWidth: 1,
  //   marginLeft: '15%'
  // },
  // stampPhotos: {
  //   position:'absolute',
  //   height: '15%',
  //   width: '30%',
  //   borderColor: 'lightgrey',
  //   borderWidth: 1,
  //   right: '15%',
  //   bottom: '17%'
  // }
})