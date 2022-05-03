import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, TouchableOpacity , KeyboardAvoidingView} from 'react-native'
import ForgotPassWordForm from '../Components/auth/ForgotPassWordForm'
import AuthLower from '../Components/auth/AuthLower'
import Header from '../Components/general/Header'

export default function ForgotPasswordScreen({navigation}) {

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
    <KeyboardAvoidingView enabled>
    <View style={styles.subContainer}>
        <Header 
        title={"Forgot Password 🤔"} 
        subtitle={"We need your email adress so we can send you the password reset code."}
        />
        <ForgotPassWordForm navigation={navigation}/>
    </View>
    </KeyboardAvoidingView>
    <AuthLower NormalText={"Remember the password? "} LinkText="Try again" onLowerPress={() => navigation.navigate('LoginScreen')}/>
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