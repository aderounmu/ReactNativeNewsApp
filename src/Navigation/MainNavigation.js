import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabs from './HomeTabs';
import { View, Text } from 'react-native';
import NewsScreen from '../Screens/NewsScreen';
import LoginNavigation from './LoginNavigation';
import LoginScreen from '../Screens/LoginScreen'
import SplashScreen from '../Screens/SplashScreen';
import TermsScreen from '../Screens/TermsScreen';
const Stack = createNativeStackNavigator();
export default function MainNavigation() {
    const [isLogginedIN, setisLogginedIN] = useState(false)
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
                    <Stack.Screen name="SplashScreen" component={ SplashScreen}/>
                    <Stack.Screen name="LoginNavigation" component={LoginNavigation}/>
                    <Stack.Screen name="HomeTabs" component={HomeTabs} />
                    <Stack.Screen name ="News" component={NewsScreen}/>
                    <Stack.Screen name="TermsScreen" component={TermsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
