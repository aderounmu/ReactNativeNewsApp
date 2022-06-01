import React, {useState , useEffect} from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, TouchableOpacity} from 'react-native'
import { auth } from '../services/firebase/config';
import {onAuthStateChanged } from "firebase/auth";

const SplashScreen = ({navigation}) => {

useEffect(()=>{
  
    setTimeout(()=>{
        //Check async Storage if Data Exist 
        //if data exist move to HomeTabs
        //if they don't move to 
        onAuthStateChanged(auth, (user) => {
            console.log('--- i am working')
            if (user) {
                navigation.navigate('HomeTabs')
            } else {
              // User is signed out
              navigation.navigate('LoginNavigation')
            }
        }); 
    },5000)
},[])


return (
    <View
    style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        backgroundColor: '#475AD7',
        alignItems: 'center',
        justifyContent: 'center'
    }}
    >
        <Image source={require("../assets/logo.png")}/>
    </View>
  )
}


export default SplashScreen