import React, {useState}from 'react'
import { View , StyleSheet, TextInput,Text , Platform, TouchableOpacity} from 'react-native'
import AuthInput from './AuthInput';
import GButton from '../general/GButton';
import GError from '../general/GError';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase/config';
export default function LoginForm({navigation}) {

    const [Password, setPassword] = useState("");
    const [Email,setEmail] = useState("");
    const [Error , setError] = useState({
        isError: false,
        message: ''
      })

    const logIn = async () => {
        setError({
            isError: false,
            message: ''
        })
        if(Email === "" || Email === " "){
            setError({
              isError: true,
              message:'Email is Required'
            }) 
            return ; 
        }
    
        if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email))){
        setError({
            isError: true,
            message:'Email is not valid'
        }) 
        return ; 
        }

        if(Password === "" || Password === " "){
        
            setError({
              isError: true,
              message:'Password is Required'
            })
            return ;
        }

        


        try{
            const currentUser = await signInWithEmailAndPassword(
                auth, Email , Password
            )
            console.log(currentUser)
            navigation.navigate('HomeTabs');
        }catch(err){
            setError({
                isError: true,
                message: err.message
            })
            //throw(err)
        }



    }
  return (
    <View style={{ marginTop: 10}}>
        {/* Error Message */}
        {Error.isError ? <GError message={Error.message} />:<></>}
        {/* Email */}
        
        <AuthInput value={Email} name="Email" icon="envelope" onChange={(text) => setEmail(text)} />
        
        {/* Password */}
        <AuthInput value={Password} name="Password" icon="lock" onChange={(text) => setPassword(text)} />

        <TouchableOpacity style={styles.forgotP} onPress={()=>navigation.navigate('ForgotPasswordScreen')}>
            <Text style={styles.forgotP.text}>Forgot Password ?</Text>
        </TouchableOpacity>

        <GButton text="Sign In" onButtonPress={() => logIn()} />

    </View>
  )
}


const styles = StyleSheet.create({
    forgotP:{
        width: '100%',
        // paddingRight: 20,
        marginTop: 16,
        text :{
            textAlign: 'right'
        }
    },
    
})