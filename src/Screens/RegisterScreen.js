import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, TouchableOpacity} from 'react-native'
import RegisterForm from '../Components/RegisterForm'


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
    <View style={styles.subContainer}>
        <Text style={styles.headline}>Welcome to Nuntium 👋</Text>
        <Text style={styles.subheadline}>Hello, I guess you are new around here. You can start using the application after sign up.</Text>
        <RegisterForm navigation={navigation}/>
    </View>
    <View style={{...styles.subContainer, ...styles.signInContainer}}>
        <Text>Already have an account?  </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')}>
            <Text style={styles.signInContainer.NonTouch}>Sign In</Text>
        </TouchableOpacity>
    </View>
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
    signInContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        NonTouch : {
            color: '#8C92AD'
        }
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