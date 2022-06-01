import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, KeyboardAvoidingView,Platform} from 'react-native'
import AuthLower from '../Components/auth/AuthLower'
import RegisterForm from '../Components/auth/RegisterForm'
import Header from '../Components/general/Header'


export default function RegisterScreen({navigation}) {

    // const [height, setHeight] = useState('');
    // const [width, setWidth] = useState('');
    // useEffect(() => {
    //     //Get device Height
    //     setHeight(Dimensions.get('window').height);
    //     //Get device Width
    //     setWidth(Dimensions.get('window').width);
    // }, []);
  return (
    <SafeAreaView style={{...styles.container, height: '100%'}}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={{ flex: 1 }}>
            <View style={styles.subContainer}>
                <Header title="Welcome to Nuntium 👋" subtitle="Hello, I guess you are new around here. You can start using the application after sign up."/>
                <RegisterForm navigation={navigation}/>
            </View>
        </KeyboardAvoidingView>
    <AuthLower NormalText={"Already have an account? "} LinkText="Sign In" onLowerPress={() => navigation.navigate('LoginScreen')}/>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container : {
        backgroundColor: '#fff',
        // display: 'flex',
        // justifyContent: 'space-between',
    },
    subContainer:{
        //display: 'flex',
        //flex: 1,
        marginHorizontal: 25
    },
   

    
    
})