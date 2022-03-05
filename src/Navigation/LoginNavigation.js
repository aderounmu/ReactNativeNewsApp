import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native'
import OnboardingScreen from '../Screens/OnboardingScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../Screens/ResetPasswordScreen';



const Stack = createNativeStackNavigator();
export default function LoginNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} /> 
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} /> 
            <Stack.Screen name="LoginScreen" component={LoginScreen} /> 
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> 
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} /> 
            <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} /> 
        </Stack.Navigator>
       
    )
}
