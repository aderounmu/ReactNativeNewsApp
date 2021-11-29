import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './src/Screens/HomeScreen';
import HomeTabs from './src/Screens/HomeTabs';
import NewsScreen from './src/Screens/NewsScreen';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeTab" component={HomeTabs} /> 
        <Stack.Screen name="News" component={NewsScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;