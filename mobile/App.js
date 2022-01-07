import React from 'react';
import PhoneAuth from './src/screens/auth/PhoneAuth';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PhoneAuth" component={PhoneAuth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
