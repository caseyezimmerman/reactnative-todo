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

class CameraView extends Component{
    render() {
        return (
            <CameraKitCameraScreen style={Styles.cameraView}
                actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
                onBottomButtonPressed={this.props.onBottomButtonPressed}
                flashImages={{
                    on: flashOn,
                    off: flashOff,
                    auto: flashAuto,
                }}
                cameraFlipImage={cameraFlipIcon}
                captureButtonImage={cameraButton}/>
            );
        }

    async componentDidMount() {
        const checkCamAuth = await CameraKitCamera.checkDeviceCameraAuthorizationStatus();
        if (!checkCamAuth) {
            const getCamAuth = await CameraKitCamera.requestDeviceCameraAuthorization();
            if (!getCamAuth) {
                Alert.alert('Camera Access Denied', 'Please visit Settings to enable Camera access.');
                this.props.tookPicture(null);
            }
        }

        // const image = await this.camera.capture(true);
        // console.log('Got image', image);
        // this.props.tookPicture(image);
    }
}

CameraView.propTypes = {
    tookPicture: PropTypes.func,
    onBottomButtonPressed: PropTypes.func,
};

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
});
