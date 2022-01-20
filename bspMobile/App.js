import React, {useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  BackHandler,
  Alert,
} from 'react-native';
import WebView from 'react-native-webview';
import RNBootSplash from 'react-native-bootsplash F';
const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
    Alert.alert('hello', 'hh');
    console.log('works');
  }, []);

  useEffect(() => {
    console.log('workds');
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const showLoading = () => {
    return (
      <ActivityIndicator
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        color="#00005c"
        size={35}
      />
    );
  };

  return (
    <>
      <StatusBar backgroundColor="#00005c" />
      <WebView
        renderLoading={showLoading}
        source={{uri: 'https://bsp.upgrate.in/'}}
        startInLoadingState
        javaScriptEnabled
        domStorageEnabled
      />
    </>
  );
};

export default App;
