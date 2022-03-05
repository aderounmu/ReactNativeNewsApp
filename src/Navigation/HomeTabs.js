import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookmarkScreen from '../Screens/BookmarkScreen';
import HomeScreen from '../Screens/HomeScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import DiscoverScreen from '../Screens/DiscoverScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const tabBarOptions = {
    showLabel: false,
    activeTintColor: '#092953',
    style: {
      height: '10%',
    },
    headerShown: false
  };

const HomeTabs = () =>{
    return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="Discover" component={DiscoverScreen} options={{
        tabBarIcon: ({color, size}) => (
            <Icon name="compass" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Bookmarks" component={BookmarkScreen} options={{
        tabBarIcon: ({color, size}) => (
            <Icon name="bookmark" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen}  options={{
        tabBarIcon: ({color, size}) => (
            <Icon name="user-circle-o" color={color} size={size} />
        ),
      }}/>
    </Tab.Navigator>
    )
}

export default HomeTabs;