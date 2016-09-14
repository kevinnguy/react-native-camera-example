import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import Camera from 'react-native-camera'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.camera = null;

    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
        type: Camera.constants.Type.back,
        orientation: Camera.constants.Orientation.auto,
        flashMode: Camera.constants.FlashMode.off,
        captureQuality: Camera.constants.CaptureQuality.low
      },
    };

    this.testScanBarcode = this.testScanBarcode.bind(this);
  }

  testScanBarcode(code) {
    console.log(code);
    Vibration.vibrate();
    // this.forceUpdate();
    // {type: "org.gs1.EAN-13", data: "4946842505975", bounds: Object}
  }

  render() {
    return (
      <Camera ref={(camera) => { this.camera = camera; }}
        style={styles.camera}
        aspect={this.state.camera.aspect}
        captureTarget={this.state.camera.captureTarget}
        type={this.state.camera.type}
        captureQuality={this.state.camera.captureQuality}
        captureAudio={false}
        showViewFinder={true}
        onBarCodeRead={(code) => this.props.scanBarcode(code)}
        defaultTouchToFocus
        barCodeTypes={[
          'aztec',
          'codabar',
          'code128',
          'code39',
          'code39mod43',
          'code93',
          'datamatrix',
          'ean13',
          'ean8',
          'itf',
          'maxicode',
          'pdf417',
          'qr',
          'rss14',
          'rss',
          'upca',
          'upce',
          'upc'
        ]}>
      </Camera>
    );
  }
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
});