import React, {useState}from 'react'
import { View , StyleSheet, TextInput,Text , Platform, TouchableOpacity} from 'react-native'
import AuthInput from './AuthInput';
import GButton from '../general/GButton';
import { auth } from '../../services/firebase/config';
import {createUserWithEmailAndPassword , updateProfile , onAuthStateChanged } from "firebase/auth"
import GError from '../general/GError';
import { setAuthLocal } from '../../services/LocalStore';


export default function RegisterForm({navigation}) {

    const [Password, setPassword] = useState("");
    const [Rpassword, setRpassword] = useState("");
    const [Username ,setUsername] = useState("");
    const [Email, setEmail] = useState("")
    const [isRegistering , setIsRegistering] = useState(false)
    const [Error , setError] = useState({
      isError: false,
      message: ''
    })
    const register = async () => {
      setError({
        isError: false,
        message: ''
      })
      setIsRegistering(true)

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

      if(Username === "" || Username === " "){
        console.log(Rpassword)
        setError({
          isError: true,
          message:'Username is Required'
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

      if(Rpassword !== Password || Rpassword !== Password){
        setError({
          isError: true,
          message:' Passwords Must Match'
        })
        return ;

      }



      try{
        //register user
        const currentUser = await createUserWithEmailAndPassword(
          auth,Email,Password
        )
        const user = auth.currentUser;
        //set user username
        
        await updateProfile(user,{displayName: Username})
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
    <View style={{ marginTop: 32}}>
        {/* Error Message */}
        {Error.isError ? <GError message={Error.message} />:<></>}
        {/* username */}
       
        <AuthInput value={Username} name="Username" icon="user" onChange={(text) => setUsername(text)} />

        {/* Email */}
        <AuthInput value={Email} name="Email" icon="envelope" onChange={(text) => setEmail(text)} />
        
        {/* Password */}

        <AuthInput value={Password} name="Password" icon="lock" onChange={(text) => setPassword(text)} />

        {/* Repeat Password */}
        <AuthInput value={Rpassword} name="Repeat Password" icon="lock" onChange={(text) => setRpassword(text)} />

        
        <GButton text="Register" onButtonPress={() => register()} />
    </View>
  )
}


