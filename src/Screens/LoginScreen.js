import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import AuthLower from '../Components/auth/AuthLower'
import LoginForm from '../Components/auth/LoginForm'

import Header from '../Components/general/Header'
export default function LoginScreen({navigation}) {

    // const [height, setHeight] = useState('');
    // const [width, setWidth] = useState('');
    // useEffect(() => {
    //     //Get device Height
    //     setHeight(Dimensions.get('window').height);
    //     //Get device Width
    //     setWidth(Dimensions.get('window').width);
    // }, []);
  return (
    <SafeAreaView style={{...styles.container,  height: '100%'}}>
    <KeyboardAvoidingView enabled>
        <View style={styles.subContainer}>
            <Header title={"Welcome Back 👋"} subtitle="I am happy to see you again. You can continue where you left off by logging in"/>
            {/* <Text style={styles.headline}>Welcome Back 👋</Text>
            <Text style={styles.subheadline}>I am happy to see you again. You can continue where you left off by logging in</Text> */}
            <LoginForm navigation={navigation}/>
        </View>
    </KeyboardAvoidingView>
    <AuthLower NormalText="Don't have an account?" LinkText="Sign Up" onLowerPress={() => navigation.navigate('RegisterScreen') }/>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container : {
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
    },
    subContainer:{
        //display: 'flex',
        //flex: 1,
        marginHorizontal: 25
    },
    
    headline: {
        paddingTop: 50,
        paddingBottom: 6,
        fontSize: 24,
        fontWeight: 'bold'
     },
     subheadline:{
         width: 300,
         paddingTop: 6,
         paddingBottom: 30,
         fontSize: 16,
         
     },

    
    
})