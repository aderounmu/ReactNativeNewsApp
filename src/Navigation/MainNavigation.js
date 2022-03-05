import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabs from './HomeTabs';
import { View } from 'react-native';
import NewsScreen from '../Screens/NewsScreen';
import LoginNavigation from './LoginNavigation';
console.log('works')
const Stack = createNativeStackNavigator();
export default function MainNavigation() {
    const [isLogginedIN, setisLogginedIN] = useState(false)
    return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {/* <Stack.Screen name="LoginNavigation" component={LoginNavigation}/> */}
                    
                    {
                        !isLogginedIN ? (
                            <Stack.Screen name="LoginNavigation" component={LoginNavigation}/> 
                        ):(
                        <Stack.Group>
                            <Stack.Screen name="HomeTab" component={HomeTabs} /> 
                            <Stack.Screen name="News" component={NewsScreen} />
                        </Stack.Group> 
                        )
                    }
                </Stack.Navigator>
            </NavigationContainer>
    )
}
