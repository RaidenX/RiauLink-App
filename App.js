import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

export default class RiauLink extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://riaulink.com'}}
        // style={{marginTop: 20}}
      />
    );
  }
}