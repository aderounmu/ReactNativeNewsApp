import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigation from './src/Navigation/MainNavigation';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <MainNavigation/>
  );
}

export default App;