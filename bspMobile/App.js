import React from 'react';
import {View, Text} from 'react-native';
import WebView from 'react-native-webview';

const App = () => {
  return <WebView source={{uri: 'https://bsp-learning.web.app/'}} />;
};

export default App;
