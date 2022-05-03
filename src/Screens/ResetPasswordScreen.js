import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, KeyboardAvoidingView} from 'react-native'
import ResetPasswordForm from '../Components/auth/ResetPasswordForm'
import AuthLower from '../Components/auth/AuthLower'
import Header from '../Components/general/Header'


export default function ResetPasswordScreen({navigation}) {

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
        title="Create New Password 🔒"
        subtitle="You can create a new password, please dont forget it too."
        />
        <ResetPasswordForm navigation={navigation}/>
    </View>
    </KeyboardAvoidingView>
    <AuthLower NormalText={"Didn’t receive an email? "} LinkText="Send again" onLowerPress={() => navigation.navigate('ForgotPasswordScreen')}/>

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

